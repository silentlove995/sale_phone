import axios from 'axios';

export async function getStaticPathsAPI() {
  try {
    const response = await axios.post(`http://localhost:8080/api/product/getDetailBySlug/${params.slug}`);
    const product = response.data.data;
    return { props: { product } };
  } catch (error) {
    console.error('Error fetching product data:', error);
    return { props: { product: null } };
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