import axiosService from '../utils/axiosService'

export const loginAdminRequest = (body) => {
  return axiosService.postWithoutAuth(`/auth/login`, body)
}

// brands
export const getAllBrand = () => {
  return axiosService.get(`/brands/all`);
}

export const createBrand = (body) => {
  return axiosService.post(`/brands/create`, body)
}

export const updateBrandById = (body) => {
  return axiosService.put(`/brands/update/` + body.params, body.data)
}

export const deleteBrandBById = (params) => {
  return axiosService.delete(`/brands/delete/` + params)
}

export const getBrandById = (params) => {
  return axiosService.get(`/brands/get/` + params)
}

// categories
export const getAllCategories = () => {
  return axiosService.get(`/categories/all`)
}

export const addCategory = (body) => {
  return axiosService.post(`/categories/create`, body)
}

export const updateCategory = (body) => {
  return axiosService.put(`/categories/update/` + body.param, body.data)
}

export const deleteCategory = (param) => {
  return axiosService.delete(`/categories/delete` + param)
}

export const getCategoryById = (param) => {
  return axiosService.get(`/categories/get/` + param)
}

export const getCategoryByBrandId = (param) => {
  return axiosService.get(`/categories/getByBrand/` + param)
}

export const getAllProducts = () => {
  return axiosService.get(`/products/all`)
}

export const getProductById = (param) => {
  return axiosService.get(`/products/get/` + param)
}

export const getProductByCategoryId = (param) => {
  return axiosService.get(`/products/get/category/` + param)
}

export const getProductByBrandId = (param) => {
  return axiosService.get(`/products/get/brand/` + param)
}

export const deleteProduct = (param) => {
  return axiosService.delete(`/products/delete/` + param)
}

export const addProduct = (body) => {
  return axiosService.post(`/products/add`, body)
}

export const updateProduct = (body) => {
  return axiosService.put(`/products/update/` + body.param, body.data)
}

export const getAllOrders = () => {
  return axiosService.get(`/orders/all`)
}

export const getOrderById = (param) => {
  return axiosService.get(`/orders/get/` + param)
}

export const getOrderByUserId = (param) => {
  return axiosService.get(`/orders/get/user/` + param)
}

export const addOrder = (body) => {
  return axiosService.post(`/orders/add`, body)
}

export const updateOrder = (body) => {
  return axiosService.put(`/orders/update/` + body.param, body.data)
}

export const deleteOrder = (param) => {
  return axiosService.delete(`/orders/delete/` + param)
}

export const getAllVouchers = () => {
  return axiosService.get(`/vouchers/all`)
}

export const getVoucherById = (param) => {
  return axiosService.get(`/vouchers/get/` + param)
}

export const addVoucher = (body) => {
  return axiosService.post(`/vouchers/add`, body)
}

export const updateVoucher = (body) => {
  return axiosService.put(`/vouchers/update/` + body.param, body.data)
}

export const deleteVoucher = (param) => {
  return axiosService.delete(`/vouchers/delete/` + param)
}
