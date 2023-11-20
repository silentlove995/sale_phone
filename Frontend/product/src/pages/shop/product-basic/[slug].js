import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import { getDiscountPrice } from "../../../lib/product";
import { getProducts } from "../../../lib/product";
import { LayoutOne } from "../../../layouts";
import { BreadcrumbOne } from "../../../components/Breadcrumb";
import {
  ImageGalleryBottomThumb,
  ProductDescription,
  ProductDescriptionTab,
  Sidebar
} from "../../../components/ProductDetails";
import { ProductSliderTwo } from "../../../components/ProductSlider";
import {getListProductAPI} from "../../../servicesAPI/api";
import {setProducts} from "../../../store/slices/product-slice";

const ProductLeftSidebar = ({ product}) => {
  const { products } = useSelector((state) => state.product);
  const { cartItems } = useSelector((state) => state.cart);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { compareItems } = useSelector((state) => state.compare);
  const relatedProducts = getProducts(products, product.category[0], "popular", 8);
  const discountedPrice = getDiscountPrice(
    product.price,
    product.discount
  ).toFixed(2);

  const productPrice = product.price.toFixed(2);
  const cartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );
  const wishlistItem = wishlistItems.find(
    (wishlistItem) => wishlistItem.id === product.id
  );
  const compareItem = compareItems.find(
    (compareItem) => compareItem.id === product.id
  );

  return (
    <LayoutOne>
      {/* breadcrumb */}
      <BreadcrumbOne pageTitle={product.name}>
        <ol className="breadcrumb justify-content-md-end">
          <li className="breadcrumb-item">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/shop/grid-left-sidebar">
              Shop
            </Link>
          </li>
          <li className="breadcrumb-item active">{product.name}</li>
        </ol>
      </BreadcrumbOne>

      {/* product details */}
      <div className="product-details space-pt--r100 space-pb--r100">
        <Container>
          <Row>
            <Col
              xl={3}
              lg={4}
              className="order-2 order-lg-1 space-mt-mobile-only--60"
            >
              {/* sidebar */}
              <Sidebar products={products} category={product.category[0]} />
            </Col>
            <Col xl={9} lg={8} className="order-1 order-lg-2">
              <Row>
                <Col lg={6} className="space-mb-mobile-only--40">
                  {/* image gallery */}
                  <ImageGalleryBottomThumb product={product} />
                </Col>
                <Col lg={6}>
                  {/* product description */}
                  <ProductDescription
                    product={product}
                    productPrice={productPrice}
                    discountedPrice={discountedPrice}
                    cartItems={cartItems}
                    cartItem={cartItem}
                    wishlistItem={wishlistItem}
                    compareItem={compareItem}
                    productContentButtonStyleClass="product-content__button-wrapper--style-two"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  {/* product description tab */}
                  <ProductDescriptionTab product={product} />
                </Col>
              </Row>

              {/* related product slider */}
              {/*<ProductSliderTwo*/}
              {/*  title="Related Products"*/}
              {/*  products={relatedProducts}*/}
              {/*  items={3}*/}
              {/*/>*/}
            </Col>
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
};


export default ProductLeftSidebar;

export async function getStaticPaths() {
  // get the paths we want to pre render based on products
  const { props } = await getListProductAPI();
  const products = props.product;

  const paths = products.map((product) => ({
    params: { slug: product.slug }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // get product data based on slug
  /*const product = products.filter((single) => single.slug === params.slug)[0];
  return { props: { product } };*/
  try {
    // Gọi hàm getListProductAPI để lấy dữ liệu sản phẩm
    const { props } = await getListProductAPI();
    const product = props.product.find((single) => single.slug === params.slug);
    // Lấy danh sách toàn bộ sản phẩm
    /*const allProducts = props.product;

    // Dispatch action để cập nhật Redux store
    const dispatch = useDispatch();
    dispatch(setProducts(allProducts));*/
    return { props: { product } };
  } catch (error) {
    console.error('Error fetching product data:', error);
    return { props: { product: null } };
  }
}