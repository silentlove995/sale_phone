import { call, put, takeLatest } from 'redux-saga/effects'
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

function* logout({ payload, callback }) {
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

//                                             CHALLENGE
// ---------------------------------------------------------------------------------------------- //

function* findAllChallenge({ payload, callback }) {
  try {
    const response = yield call(apiRequest.getAllChallenge, payload)
    yield put({ type: typeAction.FIND_ALL_CHALLENGE_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.FIND_ALL_CHALLENGE_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* findChallengeById({ payload, callback }) {
  try {
    const response = yield call(apiRequest.getChallengeById, payload)
    yield put({ type: typeAction.FIND_CHALLENGE_BY_ID_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.FIND_CHALLENGE_BY_ID_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* findChallengeByCondition({ payload, callback }) {
  try {
    const response = yield call(apiRequest.getChallengeByCondition, payload)
    yield put({ type: typeAction.FIND_CHALLENGE_BY_CONDITION_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.FIND_CHALLENGE_BY_CONDITION_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* createChallenge({ payload, callback }) {
  try {
    yield call(apiRequest.createChallenge, payload)
    const response = yield call(apiRequest.getAllChallenge)
    yield put({ type: typeAction.FIND_ALL_CHALLENGE_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.CREATE_CHALLENGE_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* updateChallenge({ payload, callback }) {
  try {
    yield call(apiRequest.updateChallenge, payload)
    const response = yield call(apiRequest.getAllChallenge)
    yield put({ type: typeAction.FIND_ALL_CHALLENGE_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.UPDATE_CHALLENGE_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* saveDraftChallenge({ payload, callback }) {
  try {
    yield call(apiRequest.saveDraftChallenge, payload)
    const response = yield call(apiRequest.getAllChallenge)
    yield put({ type: typeAction.FIND_ALL_CHALLENGE_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.SAVE_DRAFT_CHALLENGE_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* updateDraftChallenge({ payload, callback }) {
  try {
    yield call(apiRequest.updateDraftChallenge, payload)
    const response = yield call(apiRequest.getAllChallenge)
    yield put({ type: typeAction.FIND_ALL_CHALLENGE_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.UPDATE_DRAFT_CHALLENGE_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* activeChallenge({ payload, callback }) {
  try {
    yield call(apiRequest.activeChallenge, payload)
    const response = yield call(apiRequest.getAllChallenge)
    yield put({ type: typeAction.FIND_ALL_CHALLENGE_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.ACTIVE_CHALLENGE_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* inactiveChallenge({ payload, callback }) {
  try {
    yield call(apiRequest.inactiveChallenge, payload)
    const response = yield call(apiRequest.getAllChallenge)
    yield put({ type: typeAction.FIND_ALL_CHALLENGE_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.INACTIVE_CHALLENGE_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* deleteChallenge({ payload, callback }) {
  try {
    yield call(apiRequest.deleteChallenge, payload)
    const response = yield call(apiRequest.getAllChallenge)
    yield put({ type: typeAction.FIND_ALL_CHALLENGE_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.DELETE_CHALLENGE_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

//                                                      CONTEST
// ---------------------------------------------------------------------------------------------------------//

function* findAllContest({ payload, callback }) {
  try {
    const response = yield call(apiRequest.getAllContest)
    yield put({ type: typeAction.FIND_ALL_CONTEST_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.FIND_ALL_CONTEST_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* findContestById({ payload, callback }) {
  try {
    const response = yield call(apiRequest.getContestById, payload)
    yield put({ type: typeAction.FIND_CONTEST_BY_ID_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.FIND_CONTEST_BY_ID_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* findContestByCondition({ payload, callback }) {
  try {
    const response = yield call(apiRequest.getContestByCondition, payload)
    yield put({ type: typeAction.FIND_CONTEST_BY_CONDITION_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.FIND_CONTEST_BY_CONDITION_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* createContest({ payload, callback }) {
  try {
    yield call(apiRequest.createContest, payload)
    const response = yield call(apiRequest.getAllContest)
    yield put({ type: typeAction.FIND_ALL_CONTEST_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.CREATE_CONTEST_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* updateContest({ payload, callback }) {
  try {
    yield call(apiRequest.updateContest, payload)
    const response = yield call(apiRequest.getAllContest)
    yield put({ type: typeAction.FIND_ALL_CONTEST_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.UPDATE_CONTEST_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* saveDraftContest({ payload, callback }) {
  try {
    yield call(apiRequest.saveDraftContest, payload)
    const response = yield call(apiRequest.getAllChallenge)
    yield put({ type: typeAction.FIND_ALL_CHALLENGE_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.SAVE_DRAFT_CONTEST_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* updateDraftContest({ payload, callback }) {
  try {
    yield call(apiRequest.updateDraftContest, payload)
    const response = yield call(apiRequest.getAllChallenge)
    yield put({ type: typeAction.FIND_ALL_CHALLENGE_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.UPDATE_DRAFT_CONTEST_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* activeContest({ payload, callback }) {
  try {
    yield call(apiRequest.activeContest, payload)
    const response = yield call(apiRequest.getAllContest)
    yield put({ type: typeAction.FIND_ALL_CONTEST_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.ACTIVE_CONTEST_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* inactiveContest({ payload, callback }) {
  try {
    yield call(apiRequest.inactiveContest, payload)
    const response = yield call(apiRequest.getAllContest)
    yield put({ type: typeAction.FIND_ALL_CONTEST_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.INACTIVE_CONTEST_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* deleteContest({ payload, callback }) {
  try {
    yield call(apiRequest.deleteContest, payload)
    const response = yield call(apiRequest.getAllContest)
    yield put({ type: typeAction.FIND_ALL_CONTEST_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.DELETE_CONTEST_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

//                                                     BADGE
// --------------------------------------------------------------------------------------------------- //

function* findAllBadge({ payload, callback }) {
  try {
    const response = yield call(apiRequest.getAllBadge)
    yield put({ type: typeAction.FIND_ALL_BADGE_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.FIND_ALL_BADGE_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* findBadgeById({ payload, callback }) {
  try {
    const response = yield call(apiRequest.getBadgeById, payload)
    yield put({ type: typeAction.FIND_BADGE_BY_ID_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.FIND_BADGE_BY_ID_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* findAllAssociatedBadge({ payload, callback }) {
  try {
    const response = yield call(apiRequest.getAssociatedBadge, payload)
    yield put({ type: typeAction.FIND_ALL_ASSOCIATED_BADGE_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.FIND_ALL_ASSOCIATED_BADGE_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* findBadgeByCondition({ payload, callback }) {
  try {
    const response = yield call(apiRequest.getBadgeByCondition, payload)
    yield put({ type: typeAction.FIND_BADGE_BY_CONDITION_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.FIND_BADGE_BY_CONDITION_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* createBadge({ payload, callback }) {
  try {
    yield call(apiRequest.createBadge, payload)
    const response = yield call(apiRequest.getAllBadge)
    yield put({ type: typeAction.FIND_ALL_BADGE_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.CREATE_BADGE_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* updateBadge({ payload, callback }) {
  try {
    yield call(apiRequest.updateBadge, payload)
    const response = yield call(apiRequest.getAllBadge)
    yield put({ type: typeAction.FIND_ALL_BADGE_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.UPDATE_BADGE_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* deleteBadge({ payload, callback }) {
  try {
    yield call(apiRequest.deleteBadge, payload)
    const response = yield call(apiRequest.getAllBadge)
    yield put({ type: typeAction.FIND_ALL_BADGE_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.DELETE_BADGE_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

//                                                     AUDIO
// ------------------------------------------------------------------------------------------------------- //

function* findAllAudio({ payload, callback }) {
  try {
    const response = yield call(apiRequest.getAllAudio)
    yield put({ type: typeAction.FIND_ALL_AUDIO_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.FIND_ALL_AUDIO_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* findAudioById({ payload, callback }) {
  try {
    const response = yield call(apiRequest.getAudioById, payload)
    yield put({ type: typeAction.FIND_AUDIO_BY_ID_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.FIND_AUDIO_BY_ID_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* findAudioByCondition({ payload, callback }) {
  try {
    const response = yield call(apiRequest.getAudioByCondition, payload)
    yield put({ type: typeAction.FIND_AUDION_BY_CONDITION_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.FIND_AUDIO_BY_CONDITION_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* getAudioListing({ payload, callback }) {
  try {
    const response = yield call(apiRequest.getAudioListing, payload)
    yield put({ type: typeAction.GET_AUDIO_LISTING_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.GET_AUDIO_LISTING_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* createAudio({ payload, callback }) {
  try {
    yield call(apiRequest.createAudio, payload)
    const response = yield call(apiRequest.getAllAudio)
    yield put({ type: typeAction.FIND_ALL_AUDIO_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.CREATE_AUDIO_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* updateAudio({ payload, callback }) {
  try {
    yield call(apiRequest.updateAudio, payload)
    const response = yield call(apiRequest.getAllAudio)
    yield put({ type: typeAction.FIND_ALL_AUDIO_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.UPDATE_AUDIO_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* deleteAudio({ payload, callback }) {
  try {
    yield call(apiRequest.deleteAudio, payload)
    const response = yield call(apiRequest.getAllAudio)
    yield put({ type: typeAction.FIND_ALL_AUDIO_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.DELETE_AUDIO_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* deleteMultiAudio({ payload, callback }) {
  try {
    yield call(apiRequest.deleteAudio, payload)
    const response = yield call(apiRequest.getAllAudio)
    yield put({ type: typeAction.FIND_ALL_AUDIO_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.DELETE_AUDIO_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* uploadAudio({ payload, callback }) {
  try {
    const response = yield call(apiRequest.uploadAudio, payload)
    yield put({ type: typeAction.UPLOAD_MEDIA_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.UPLOAD_MEDIA_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

//                                                     PLAYLIST
// ----------------------------------------------------------------------------------------------------------//

function* findAllPlaylist({ payload, callback }) {
  try {
    const response = yield call(apiRequest.getAllPlaylist)
    yield put({ type: typeAction.FIND_ALL_PLAYLIST_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.FIND_ALL_PLAYLIST_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* findPlaylistById({ payload, callback }) {
  try {
    const response = yield call(apiRequest.getPlaylistById, payload)
    yield put({ type: typeAction.FIND_PLAYLIST_BY_ID_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.FIND_PLAYLIST_BY_ID_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* findPlaylistByCondition({ payload, callback }) {
  try {
    const response = yield call(apiRequest.getPlaylistByCondition, payload)
    yield put({ type: typeAction.FIND_PLAYLIST_BY_CONDITION_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.FIND_PLAYLIST_BY_CONDITION_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* createPlaylist({ payload, callback }) {
  try {
    yield call(apiRequest.createPlaylist, payload)
    const response = yield call(apiRequest.getAllPlaylist)
    yield put({ type: typeAction.FIND_ALL_PLAYLIST_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.CREATE_PLAYLIST_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* updatePlaylist({ payload, callback }) {
  try {
    yield call(apiRequest.updatePlaylist, payload)
    const response = yield call(apiRequest.getAllPlaylist)
    yield put({ type: typeAction.FIND_ALL_PLAYLIST_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.UPDATE_PLAYLIST_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* addAudioToPlaylist({ payload, callback }) {
  try {
    yield call(apiRequest.addAudioToPlaylist, payload)
    const response = yield call(apiRequest.getAudioListing, payload.params)
    yield put({ type: typeAction.GET_AUDIO_LISTING_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.ADD_AUDIO_TO_PLAYLIST_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* deleteAudioFromPlaylist({ payload, callback }) {
  try {
    yield call(apiRequest.deleteAudioFromPlaylist, payload)
    const response = yield call(apiRequest.getAudioListing, payload.params)
    yield put({ type: typeAction.GET_AUDIO_LISTING_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.DELETE_AUDIO_FROM_PLAYLIST_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* deletePlaylist({ payload, callback }) {
  try {
    yield call(apiRequest.deletePlaylist, payload)
    const response = yield call(apiRequest.getAllPlaylist)
    yield put({ type: typeAction.FIND_ALL_PLAYLIST_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.DELETE_PLAYLIST_FAILED })
    if (typeof callback === 'function') {
      callback(e)
    }
  }
}

function* deleteFileOnS3({ payload, callback }) {
  try {
    const response = yield call(apiRequest.deleteFileOnS3, payload)
    yield put({ type: typeAction.DELETE_ON_S3_SUCCESS, payload: response.data })
    if (typeof callback === 'function') {
      callback({ success: true })
    }
  } catch (e) {
    yield put({ type: typeAction.DELETE_ON_S3_FAILED })
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
  //challenge
  yield takeLatest(typeAction.FIND_ALL_CHALLENGE, findAllChallenge)
  yield takeLatest(typeAction.FIND_CHALLENGE_BY_ID, findChallengeById)
  yield takeLatest(typeAction.FIND_CHALLENGE_BY_CONDITION, findChallengeByCondition)
  yield takeLatest(typeAction.CREATE_CHALLENGE, createChallenge)
  yield takeLatest(typeAction.UPDATE_CHALLENGE, updateChallenge)
  yield takeLatest(typeAction.SAVE_DRAFT_CHALLENGE, saveDraftChallenge)
  yield takeLatest(typeAction.UPDATE_DRAFT_CHALLENGE, updateDraftChallenge)
  yield takeLatest(typeAction.ACTIVE_CHALLENGE, activeChallenge)
  yield takeLatest(typeAction.INACTIVE_CHALLENGE, inactiveChallenge)
  yield takeLatest(typeAction.DELETE_CHALLENGE, deleteChallenge)
  //contest
  yield takeLatest(typeAction.FIND_ALL_CONTEST, findAllContest)
  yield takeLatest(typeAction.FIND_CONTEST_BY_ID, findContestById)
  yield takeLatest(typeAction.FIND_CONTEST_BY_CONDITION, findContestByCondition)
  yield takeLatest(typeAction.CREATE_CONTEST, createContest)
  yield takeLatest(typeAction.UPDATE_CONTEST, updateContest)
  yield takeLatest(typeAction.SAVE_DRAFT_CONTEST, saveDraftContest)
  yield takeLatest(typeAction.UPDATE_DRAFT_CONTEST, updateDraftContest)
  yield takeLatest(typeAction.ACTIVE_CONTEST, activeContest)
  yield takeLatest(typeAction.INACTIVE_CONTEST, inactiveContest)
  yield takeLatest(typeAction.DELETE_CONTEST, deleteContest)
  //badge
  yield takeLatest(typeAction.FIND_ALL_BADGE, findAllBadge)
  yield takeLatest(typeAction.FIND_BADGE_BY_ID, findBadgeById)
  yield takeLatest(typeAction.FIND_ALL_ASSOCIATED_BADGE, findAllAssociatedBadge)
  yield takeLatest(typeAction.FIND_BADGE_BY_CONDITION, findBadgeByCondition)
  yield takeLatest(typeAction.CREATE_BADGE, createBadge)
  yield takeLatest(typeAction.UPDATE_BADGE, updateBadge)
  yield takeLatest(typeAction.DELETE_BADGE, deleteBadge)
  //audio
  yield takeLatest(typeAction.FIND_ALL_AUDIO, findAllAudio)
  yield takeLatest(typeAction.FIND_AUDIO_BY_ID, findAudioById)
  yield takeLatest(typeAction.FIND_AUDIO_BY_CONDITION, findAudioByCondition)
  yield takeLatest(typeAction.GET_AUDIO_LISTING, getAudioListing)
  yield takeLatest(typeAction.CREATE_AUDIO, createAudio)
  yield takeLatest(typeAction.UPDATE_AUDIO, updateAudio)
  yield takeLatest(typeAction.DELETE_AUDIO, deleteAudio)
  yield takeLatest(typeAction.DELETE_MULTI_AUDIO, deleteMultiAudio)
  yield takeLatest(typeAction.UPLOAD_MEDIA, uploadAudio)
  //playlist
  yield takeLatest(typeAction.FIND_ALL_PLAYLIST, findAllPlaylist)
  yield takeLatest(typeAction.FIND_PLAYLIST_BY_ID, findPlaylistById)
  yield takeLatest(typeAction.FIND_PLAYLIST_BY_CONDITION, findPlaylistByCondition)
  yield takeLatest(typeAction.CREATE_PLAYLIST, createPlaylist)
  yield takeLatest(typeAction.ADD_AUDIO_TO_PLAYLIST, addAudioToPlaylist)
  yield takeLatest(typeAction.DELETE_AUDIO_FROM_PLAYLIST, deleteAudioFromPlaylist)
  yield takeLatest(typeAction.UPDATE_PLAYLIST, updatePlaylist)
  yield takeLatest(typeAction.DELETE_PLAYLIST, deletePlaylist)

  yield takeLatest(typeAction.DELETE_ON_S3, deleteFileOnS3)
}

export default homeSaga
