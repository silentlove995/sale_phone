import axios from 'axios';

export async function getStaticPathsAPI() {
  try {
    const response = await axios.get('http://localhost:8080/api/product/getListFE');
    const products = response.data.data;
    const paths = products.map((product) => ({
      params: { slug: product.slug },
    }));
    return { paths, fallback: false };
  } catch (error) {
    console.error('Error fetching product data:', error);
    return { paths: [], fallback: false };
  }
}

export async function getStaticPropsAPI({ params }) {
  try {
    const response = await axios.get(`http://localhost:8080/api/product/getListFE`);
    const products = response.data.data;
    const product = products.find((p) => p.slug === params.slug);
    return { props: { product } };
  } catch (error) {
    console.error('Error fetching product data:', error);
    return { props: { product: null } };
  }
}