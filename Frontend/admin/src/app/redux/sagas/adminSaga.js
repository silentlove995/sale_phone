import {call, put, takeLatest} from 'redux-saga/effects'
import typeAction from '../typeactions'
import * as apiRequest from '../api/index'
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
    const response = yield call(apiRequest.updateBrandById(), payload)
    yield put({type: typeAction.UPDATE_BRAND_SUCCESS, payload: response.data})
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
    const response = yield call(apiRequest.deleteBrandBById(), payload)
    yield put({type: typeAction.DELETE_BRAND_SUCCESS, payload: response.data})
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
function* getAllCategories({payload, callback}) {
  try {
    const response = yield call(apiRequest.getAllCategories, payload)
    yield put({type: typeAction.GET_ALL_CATEGORY_SUCCESS, payload: response.data})
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
    const response = yield call(apiRequest.addCategory, payload)
    yield put({type: typeAction.CREATE_CATEGORY_SUCCESS, payload: response.data})
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
    const response = yield call(apiRequest.updateCategory, payload)
    yield put({type: typeAction.UPDATE_CATEGORY_SUCCESS, payload: response.data})
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
    const response = yield call(apiRequest.deleteCategory, payload)
    yield put({type: typeAction.DELETE_CATEGORY_SUCCESS, payload: response.data})
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
    yield put({type: typeAction.GET_CATEGORY_BY_ID_SUCCESS, payload: response.data})
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
    yield put({type: typeAction.GET_CATEGORY_BY_BRAND_SUCCESS, payload: response.data})
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
  yield takeLatest(typeAction.GET_ALL_CATEGORY, getAllCategories)
  yield takeLatest(typeAction.CREATE_CATEGORY, addCategory)
  yield takeLatest(typeAction.UPDATE_CATEGORY, updateCategory)
  yield takeLatest(typeAction.DELETE_CATEGORY, deleteCategory)
  yield takeLatest(typeAction.GET_CATEGORY_BY_BRAND, getCategoryByBrandId)
}

export default homeSaga
