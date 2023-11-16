import axios from 'axios';

export async function getProductBySlug(slug) {
  try {
    // Gọi API để lấy dữ liệu sản phẩm theo slug
    const response = await axios.get(`http://localhost:8080/api/product/getListFE?slug=${slug}`);

    // Lấy dữ liệu từ phản hồi của API
    const product = response.data;

    console.log('data', product);

    return product;
  } catch (error) {
    // Xử lý lỗi nếu có
    console.error('Error fetching product by slug:', error);
    throw error;
  }
}
