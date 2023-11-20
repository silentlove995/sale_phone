import axios from 'axios';

export async function getStaticPathsAPI() {
  try {
    const response = await axios.post(`http://localhost:8080/api/product/getListFE`);
    const product = response.data.data;
    return { props: { product } };
  } catch (error) {
    console.error('Error fetching product data:', error);
    return { props: { product: null } };
  }
}