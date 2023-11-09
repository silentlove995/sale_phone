import typeAction from '../typeactions'
import jwt_decode from 'jwt-decode'

const initialState = {
  listApis: [],
  totalPageApiList: {},
  user: {},
  listRoles: [],
  roleCombo: [],
  //challenge
  listChallenge: [],
  challengeUpdate: {},
  //contest
  listContest: [],
  contestUpdate: {},
  //badge
  listBadge: [],
  badgeUpdate: {},
  associatedBadge: [],
  //audio
  listAudio: [],
  audioUpdate: {},
  mediaUpload: {},
  audioListing: [],
  //playlist
  listPlaylist: [],
  playlistUpdate: {},
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
    case typeAction.FIND_ALL_BADGE_SUCCESS: {
      copyState.listBadge = action.payload
      return copyState
    }

    case typeAction.FIND_ALL_ASSOCIATED_BADGE_SUCCESS: {
      copyState.associatedBadge = action.payload
      return copyState
    }

    case typeAction.FIND_BADGE_BY_ID_SUCCESS: {
      copyState.badgeUpdate = action.payload
      return copyState
    }

    //challenge
    case typeAction.FIND_ALL_CHALLENGE_SUCCESS: {
      copyState.listChallenge = action.payload
      return copyState
    }

    case typeAction.FIND_CHALLENGE_BY_ID_SUCCESS: {
      copyState.challengeUpdate = action.payload
      return copyState
    }

    case typeAction.FIND_CHALLENGE_BY_CONDITION_SUCCESS: {
      copyState.listChallenge = action.payload
      return copyState
    }

    //contest
    case typeAction.FIND_ALL_CONTEST_SUCCESS: {
      copyState.listContest = action.payload
      return copyState
    }

    case typeAction.FIND_CONTEST_BY_ID_SUCCESS: {
      copyState.contestUpdate = action.payload
      return copyState
    }

    case typeAction.FIND_CONTEST_BY_CONDITION_SUCCESS: {
      copyState.listContest = action.payload
      return copyState
    }

    //audio
    case typeAction.UPLOAD_MEDIA_SUCCESS: {
      copyState.mediaUpload = action.payload
      return copyState
    }

    case typeAction.FIND_ALL_AUDIO_SUCCESS: {
      copyState.listAudio = action.payload
      return copyState
    }

    case typeAction.FIND_AUDIO_BY_ID_SUCCESS: {
      copyState.audioUpdate = action.payload
      return copyState
    }

    case typeAction.GET_AUDIO_LISTING_SUCCESS: {
      copyState.audioListing = action.payload
      return copyState
    }

    //playlist
    case typeAction.FIND_ALL_PLAYLIST_SUCCESS: {
      copyState.listPlaylist = action.payload
      return copyState
    }

    case typeAction.FIND_PLAYLIST_BY_ID_SUCCESS: {
      copyState.playlistUpdate = action.payload
      return copyState
    }

    default:
      return state
  }
}

export default reducer
