import axios from 'axios';

const fetchProductsFromBackend = async () => {
  try {
    const response = await axios.get('');
    return response.data; 
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
