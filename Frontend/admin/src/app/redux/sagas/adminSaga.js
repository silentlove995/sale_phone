import {call, put, takeLatest} from 'redux-saga/effects'
import typeAction from '../typeactions'
import * as apiRequest from '../api/index'
import {getAllProducts} from '../api/index'
import jwtDecode from 'jwt-decode'

function* loginAdmin({ payload, callback }) {
  try {
    const response = yield call(apiRequest.loginAdminRequest, payload)
    yield put({ type: typeAction.LOGIN_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.LOGIN_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* logout({callback}) {
  try {
    yield put({ type: typeAction.LOGOUT_SUCCESS })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.LOGOUT_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* autoRefreshToken(fn, params) {
  try {
    const refreshToken = localStorage.getItem('refresh_token')
    const exp = refreshToken && jwtDecode(refreshToken).exp
    if (!exp || exp < Date.now() / 1000) {
      yield put({ type: typeAction.REFRESH_TOKEN_EXPIRED })
    } else {
      const body = {
        grant_type: 'refresh_token',
        scope: 'openid',
        refresh_token: refreshToken,
      }
      const response = yield call(apiRequest.loginAdminRequest, body)
      const { data, status } = response
      if (status === 200) {
        yield put({ type: typeAction.GET_NEW_TOKEN_SUCCESS, payload: data })
        if (typeof fn === 'function') {
          yield call(fn, params)
        }
      } else {
        yield put({ type: typeAction.GET_NEW_TOKEN_FAILED, payload: data })
      }
    }
  } catch (e) {
    yield put({ type: typeAction.GET_NEW_TOKEN_FAILED, payload: e })
  }
}

//                                             brand
// ---------------------------------------------------------------------------------------------- //

function* getAllBrands({payload, callback}) {
  try {
    const response = yield call(apiRequest.getAllBrand, payload);
    yield put({type: typeAction.GET_ALL_BRAND_SUCCESS, payload: response.data.data});
    if (typeof callback === 'function') {
      callback({success: true});
    }
  } catch (e) {
    console.log('e', e);
    yield put({type: typeAction.GET_ALL_BRAND_FAILED});
    if (typeof callback === 'function') {
      callback(e);
    }
  }
}

function* createBrand({payload, callback}) {
  try {
    yield call(apiRequest.createBrand, payload);
    const response = yield call(apiRequest.getAllBrand, payload);
    yield put({type: typeAction.GET_ALL_BRAND_SUCCESS, payload: response.data.data});
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({type: typeAction.CREATE_BRAND_FAILED})
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* updateBrand({payload, callback}) {
  try {
    yield call(apiRequest.updateBrandById, payload);
    const response = yield call(apiRequest.getAllBrand, payload);
    yield put({type: typeAction.GET_ALL_BRAND_SUCCESS, payload: response.data.data})
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({type: typeAction.UPDATE_BRAND_FAILED})
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* deleteBrand({payload, callback}) {
  try {
    yield call(apiRequest.deleteBrandBById, payload);
    const response = yield call(apiRequest.getAllBrand, payload);
    yield put({type: typeAction.GET_ALL_BRAND_SUCCESS, payload: response.data.data})
    if (typeof callback === 'function') {
      callback({success: true})
    }
  } catch (e) {
    yield put({type: typeAction.DELETE_BRAND_FAILED})
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* getBrandById({payload, callback}) {
  try {
    const response = yield call(apiRequest.getBrandById, payload)
    yield put({type: typeAction.GET_BRAND_BY_ID_SUCCESS, payload: response.data.data})
    if (typeof callback === 'function') {
      callback({success: true})
    }
  } catch (e) {
    yield put({type: typeAction.GET_BRAND_BY_ID_FAILED})
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

// ---------------------------------------------------------------------------------------------- //
//Category
function* getAllCategory({payload, callback}) {
  try {
    const response = yield call(apiRequest.getAllCategories, payload);
    yield put({type: typeAction.GET_ALL_CATEGORY_SUCCESS, payload: response.data.data})
    if (typeof callback === 'function') {
      callback({success: true})
    }
  } catch (e) {
    yield put({type: typeAction.GET_ALL_CATEGORY_FAILED})
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* addCategory({payload, callback}) {
  try {
    yield call(apiRequest.addCategory, payload);
    const response = yield call(apiRequest.getAllCategories, payload);
    yield put({type: typeAction.GET_ALL_CATEGORY_SUCCESS, payload: response.data.data})
    if (typeof callback === 'function') {
      callback({success: true})
    }
  } catch (e) {
    yield put({type: typeAction.CREATE_CATEGORY_FAILED})
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* updateCategory({payload, callback}) {
  try {
    yield call(apiRequest.updateCategory, payload);
    const response = yield call(apiRequest.getAllCategories, payload);
    yield put({type: typeAction.GET_ALL_CATEGORY_SUCCESS, payload: response.data.data})
    if (typeof callback === 'function') {
      callback({success: true})
    }
  } catch (e) {
    yield put({type: typeAction.UPDATE_CATEGORY_FAILED})
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* deleteCategory({payload, callback}) {
  try {
    yield call(apiRequest.deleteCategory, payload)
    const response = yield call(apiRequest.getAllCategories, payload);
    yield put({type: typeAction.GET_ALL_CATEGORY_SUCCESS, payload: response.data.data})
    if (typeof callback === 'function') {
      callback({success: true})
    }
  } catch (e) {
    yield put({type: typeAction.DELETE_CATEGORY_FAILED})
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* getCategoryById({payload, callback}) {
  try {
    const response = yield call(apiRequest.getCategoryById, payload)
    yield put({type: typeAction.GET_CATEGORY_BY_ID_SUCCESS, payload: response.data.data})
    if (typeof callback === 'function') {
      callback({success: true})
    }
  } catch (e) {
    yield put({type: typeAction.GET_CATEGORY_BY_ID_FAILED})
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* getCategoryByBrandId({payload, callback}) {
  try {
    const response = yield call(apiRequest.getCategoryByBrandId, payload)
    yield put({type: typeAction.GET_CATEGORY_BY_BRAND_SUCCESS, payload: response.data.data})
    if (typeof callback === 'function') {
      callback({success: true})
    }
  } catch (e) {
    yield put({type: typeAction.GET_CATEGORY_BY_BRAND_FAILED})
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* getAllProduct({payload, callback}) {
  try {
    const response = yield call(apiRequest.getAllProducts, payload)
    yield put({type: typeAction.GET_ALL_PRODUCT_SUCCESS, payload: response.data.data})
    if (typeof callback === 'function') {
      callback({success: true})
    }
  } catch (e) {
    yield put({type: typeAction.GET_ALL_PRODUCT_FAILED})
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* getProductById({payload, callback}) {
  try {
    const response = yield call(apiRequest.getProductById, payload)
    yield put({type: typeAction.GET_PRODUCT_BY_ID_SUCCESS, payload: response.data.data})
    if (typeof callback === 'function') {
      callback({success: true})
    }
  } catch (e) {
    yield put({type: typeAction.GET_PRODUCT_BY_ID_FAILED})
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* getProductByCategoryId({payload, callback}) {
  try {
    const response = yield call(apiRequest.getProductByCategoryId, payload)
    yield put({type: typeAction.GET_PRODUCT_BY_ID_SUCCESS, payload: response.data.data})
    if (typeof callback === 'function') {
      callback({success: true})
    }
  } catch (e) {
    yield put({type: typeAction.GET_PRODUCT_BY_ID_FAILED})
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* getProductByBrandId({payload, callback}) {
  try {
    const response = yield call(apiRequest.getProductByBrandId, payload)
    yield put({type: typeAction.GET_PRODUCT_BY_BRAND_SUCCESS, payload: response.data.data})
    if (typeof callback === 'function') {
      callback({success: true})
    }
  } catch (e) {
    yield put({type: typeAction.GET_PRODUCT_BY_BRAND_FAILED})
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* deleteProduct({payload, callback}) {
  try {
    yield call(apiRequest.deleteProduct, payload)
    const response = yield call(apiRequest.getAllProducts, payload)
    yield put({type: typeAction.GET_ALL_PRODUCT_SUCCESS, payload: response.data.data})
    if (typeof callback === 'function') {
      callback({success: true})
    }
  } catch (e) {
    yield put({type: typeAction.DELETE_PRODUCT_FAILED})
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* addProduct({payload, callback}) {
  try {
    yield call(apiRequest.addProduct, payload)
    const response = yield call(apiRequest.getAllProducts, payload)
    yield put({type: typeAction.GET_ALL_PRODUCT_SUCCESS, payload: response.data.data})
    if (typeof callback === 'function') {
      callback({success: true})
    }
  } catch (e) {
    yield put({type: typeAction.CREATE_PRODUCT_FAILED})
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* updateProduct({payload, callback}) {
  try {
    yield call(apiRequest.updateProduct, payload)
    const response = yield call(apiRequest.getAllProducts, payload)
    yield put({type: typeAction.GET_ALL_PRODUCT_SUCCESS, payload: response.data.data})
    if (typeof callback === 'function') {
      callback({success: true})
    }
  } catch (e) {
    yield put({type: typeAction.UPDATE_PRODUCT_FAILED})
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* getAllOrders({payload, callback}) {
  try {
    const response = yield call(apiRequest.getAllOrders, payload)
    yield put({type: typeAction.GET_ALL_ORDER_SUCCESS, payload: response.data.data})
    if (typeof callback === 'function') {
      callback({success: true})
    }
  } catch (e) {
    yield put({type: typeAction.GET_ALL_ORDER_FAILED})
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* getOrderById({payload, callback}) {
  try {
    const response = yield call(apiRequest.getOrderById, payload)
    yield put({type: typeAction.GET_ORDER_BY_ID_SUCCESS, payload: response.data.data})
    if (typeof callback === 'function') {
      callback({success: true})
    }
  } catch (e) {
    yield put({type: typeAction.GET_ORDER_BY_ID_FAILED})
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* getOrderByUserId({payload, callback}) {
  try {
    const response = yield call(apiRequest.getOrderByUserId, payload)
    yield put({type: typeAction.GET_ORDER_BY_USER_SUCCESS, payload: response.data.data})
    if (typeof callback === 'function') {
      callback({success: true})
    }
  } catch (e) {
    yield put({type: typeAction.GET_ORDER_BY_USER_FAILED})
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* addOrder({payload, callback}) {
  try {
    yield call(apiRequest.addOrder, payload)
    const response = yield call(apiRequest.getAllOrders, payload)
    yield put({type: typeAction.GET_ALL_ORDER_SUCCESS, payload: response.data.data})
    if (typeof callback === 'function') {
      callback({success: true})
    }
  } catch (e) {
    yield put({type: typeAction.CREATE_ORDER_FAILED})
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* updateOrder({payload, callback}) {
  try {
    yield call(apiRequest.updateOrder, payload)
    const response = yield call(apiRequest.getAllOrders, payload)
    yield put({type: typeAction.GET_ALL_ORDER_SUCCESS, payload: response.data.data})
    if (typeof callback === 'function') {
      callback({success: true})
    }
  } catch (e) {
    yield put({type: typeAction.UPDATE_ORDER_FAILED})
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* deleteOrder({payload, callback}) {
  try {
    yield call(apiRequest.deleteOrder, payload)
    const response = yield call(apiRequest.getAllOrders, payload)
    yield put({type: typeAction.GET_ALL_ORDER_SUCCESS, payload: response.data.data})
    if (typeof callback === 'function') {
      callback({success: true})
    }
  } catch (e) {
    yield put({type: typeAction.DELETE_ORDER_FAILED})
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* getAllVouchers({payload, callback}) {
  try {
    const response = yield call(apiRequest.getAllVouchers, payload)
    yield put({type: typeAction.GET_ALL_VOUCHER_SUCCESS, payload: response.data.data})
    if (typeof callback === 'function') {
      callback({success: true})
    }
  } catch (e) {
    yield put({type: typeAction.GET_ALL_VOUCHER_FAILED})
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* getVoucherById({payload, callback}) {
  try {
    const response = yield call(apiRequest.getVoucherById, payload)
    yield put({type: typeAction.GET_VOUCHER_BY_ID_SUCCESS, payload: response.data.data})
    if (typeof callback === 'function') {
      callback({success: true})
    }
  } catch (e) {
    yield put({type: typeAction.GET_VOUCHER_BY_ID_FAILED})
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* addVoucher({payload, callback}) {
  try {
    yield call(apiRequest.addVoucher, payload)
    const response = yield call(apiRequest.getAllVouchers, payload)
    yield put({type: typeAction.GET_ALL_VOUCHER_SUCCESS, payload: response.data.data})
    if (typeof callback === 'function') {
      callback({success: true})
    }
  } catch (e) {
    yield put({type: typeAction.CREATE_VOUCHER_FAILED})
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* updateVoucher({payload, callback}) {
  try {
    yield call(apiRequest.updateVoucher, payload)
    const response = yield call(apiRequest.getAllVouchers, payload)
    yield put({type: typeAction.GET_ALL_VOUCHER_SUCCESS, payload: response.data.data})
    if (typeof callback === 'function') {
      callback({success: true})
    }
  } catch (e) {
    yield put({type: typeAction.UPDATE_VOUCHER_FAILED})
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* deleteVoucher({payload, callback}) {
  try {
    yield call(apiRequest.deleteVoucher, payload)
    const response = yield call(apiRequest.getAllVouchers, payload)
    yield put({type: typeAction.GET_ALL_VOUCHER_SUCCESS, payload: response.data.data})
    if (typeof callback === 'function') {
      callback({success: true})
    }
  } catch (e) {
    yield put({type: typeAction.DELETE_VOUCHER_FAILED})
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* homeSaga() {
  //login
  yield takeLatest(typeAction.LOGIN, loginAdmin)
  yield takeLatest(typeAction.LOGOUT, logout)
  yield takeLatest(typeAction.CALL_REFRESH_TOKEN, autoRefreshToken)
  yield takeLatest(typeAction.GET_ALL_BRAND, getAllBrands)
  yield takeLatest(typeAction.CREATE_BRAND, createBrand)
  yield takeLatest(typeAction.UPDATE_BRAND, updateBrand)
  yield takeLatest(typeAction.DELETE_BRAND, deleteBrand)
  yield takeLatest(typeAction.GET_BRAND_BY_ID, getBrandById)
  yield takeLatest(typeAction.GET_CATEGORY_BY_ID, getCategoryById)
  yield takeLatest(typeAction.GET_ALL_CATEGORY, getAllCategory)
  yield takeLatest(typeAction.CREATE_CATEGORY, addCategory)
  yield takeLatest(typeAction.UPDATE_CATEGORY, updateCategory)
  yield takeLatest(typeAction.DELETE_CATEGORY, deleteCategory)
  yield takeLatest(typeAction.GET_CATEGORY_BY_BRAND, getCategoryByBrandId)
  yield takeLatest(typeAction.GET_ALL_PRODUCT, getAllProducts)
  yield takeLatest(typeAction.GET_PRODUCT_BY_ID, getProductById)
  yield takeLatest(typeAction.GET_PRODUCT_BY_CATEGORY, getProductByCategoryId)
  yield takeLatest(typeAction.GET_PRODUCT_BY_BRAND, getProductByBrandId)
  yield takeLatest(typeAction.DELETE_PRODUCT, deleteProduct)
  yield takeLatest(typeAction.CREATE_PRODUCT, addProduct)
  yield takeLatest(typeAction.UPDATE_PRODUCT, updateProduct)
  yield takeLatest(typeAction.GET_ALL_ORDER, getAllOrders)
  yield takeLatest(typeAction.GET_ORDER_BY_ID, getOrderById)
  yield takeLatest(typeAction.GET_ORDER_BY_USER, getOrderByUserId)
  yield takeLatest(typeAction.CREATE_ORDER, addOrder)
  yield takeLatest(typeAction.UPDATE_ORDER, updateOrder)
  yield takeLatest(typeAction.DELETE_ORDER, deleteOrder)
  yield takeLatest(typeAction.GET_ALL_VOUCHER, getAllVouchers)
  yield takeLatest(typeAction.GET_VOUCHER_BY_ID, getVoucherById)
  yield takeLatest(typeAction.CREATE_VOUCHER, addVoucher)
  yield takeLatest(typeAction.UPDATE_VOUCHER, updateVoucher)
  yield takeLatest(typeAction.DELETE_VOUCHER, deleteVoucher)
}

export default homeSaga
