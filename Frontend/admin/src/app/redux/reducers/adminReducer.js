import typeAction from '../typeactions'
import jwt_decode from "jwt-decode";
// import jwt_decode from 'jwt-decode'

const initialState = {
  listApis: [],
  totalPageApiList: {},
  user: {},
  listRoles: [],
  roleCombo: [],
  //brand
  listBrand: [],
  brandUpdate: {},
  //category
  listCategory: [],
  categoryUpdate: {},
  //product
  listProduct: [],
  productUpdate: {},
}

const reducer = (state = initialState, action) => {
  const copyState = { ...state }

  switch (action.type) {
    case typeAction.LOGIN_SUCCESS: {
      const dataLogin = jwt_decode(action.payload.details.accessToken)

      localStorage.setItem('token', action.payload.details.accessToken)
      localStorage.setItem('refresh_token', action.payload.details.refreshToken)
      copyState.user = dataLogin
      return copyState
    }

    case typeAction.LOGOUT_SUCCESS: {
      localStorage.removeItem('token')
      localStorage.removeItem('refresh_token')
      copyState.user = {}
      return copyState
    }

    case typeAction.USER_INIT: {
      const token = localStorage.getItem('token')
      if (token) {
        const data = jwt_decode(token)
        if (data.exp > Date.now() / 1000) {
          copyState.user = data
        } else {
          copyState.user = null
        }
      } else {
        copyState.user = null
      }
      return copyState
    }

    case typeAction.GET_NEW_TOKEN_SUCCESS: {
      const dataLogin = jwt_decode(action.payload.details.accessToken)
      localStorage.setItem('token', action.payload.details.accessToken)
      localStorage.setItem('refresh_token', action.payload.details.refreshToken)
      copyState.user = dataLogin
      return copyState
    }

    case typeAction.REFRESH_TOKEN_EXPIRED: {
      localStorage.removeItem('token')
      localStorage.removeItem('refresh_token')
      copyState.user = {}
      return copyState
    }

    //badge
    case typeAction.GET_ALL_BRAND_SUCCESS: {
      copyState.listBrand = action.payload
      return copyState
    }

    case typeAction.GET_ALL_CATEGORY_SUCCESS: {
      copyState.listCategory = action.payload
      return copyState
    }

    case typeAction.GET_BRAND_BY_ID_SUCCESS: {
      copyState.brandUpdate = action.payload
      return copyState
    }

    case typeAction.UPDATE_BRAND_SUCCESS: {
      copyState.listBrand = action.payload
      return copyState
    }

    case typeAction.DELETE_BRAND_SUCCESS: {
      copyState.listBrand = action.payload
      return copyState
    }

    default:
      return state
  }
}

export default reducer
