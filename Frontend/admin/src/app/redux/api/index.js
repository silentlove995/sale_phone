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
  return axiosService.post(`/categories/delete`, param)
}

export const getCategoryById = (param) => {
  return axiosService.get(`/categories/get/` + param)
}

export const getCategoryByBrandId = (param) => {
  return axiosService.get(`/categories/getByBrand/` + param)
}
