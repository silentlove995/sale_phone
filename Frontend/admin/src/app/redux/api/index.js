import axiosService from '../utils/axiosService'

export const loginAdminRequest = (body) => {
  return axiosService.postWithoutAuth(`/auth/login`, body)
}

// challenge
export const getAllChallenge = () => {
  return axiosService.get(`/program/type/CHALLENGE`)
}

export const getChallengeById = (params) => {
  return axiosService.get(`/program/` + params)
}

export const getChallengeByCondition = (body) => {
  return axiosService.put(`/program/type/CHALLENGE`, body)
}

export const createChallenge = (body) => {
  return axiosService.post(`/program`, body)
}

export const updateChallenge = (body) => {
  return axiosService.put(`/program/` + body.params, body.data)
}

export const saveDraftChallenge = (body) => {
  return axiosService.post(`/program/CHALLENGE/draft`, body)
}

export const updateDraftChallenge = (body) => {
  return axiosService.put(`/program/CHALLENGE/draft/` + body.params, body.data)
}

export const activeChallenge = (params) => {
  return axiosService.get(`/program/` + params + `/active`)
}

export const inactiveChallenge = (params) => {
  return axiosService.get(`/program/` + params + `/de-active`)
}

export const deleteChallenge = (params) => {
  return axiosService.delete(`/program/` + params)
}

//contest
export const getAllContest = (params) => {
  return axiosService.get(`/program/type/CONTEST`)
}

export const getContestById = (params) => {
  return axiosService.get(`/program/` + params)
}

export const getContestByCondition = (body) => {
  return axiosService.put(`/program/type/CHALLENGE`, body)
}

export const createContest = (body) => {
  return axiosService.post(`/program`, body)
}

export const updateContest = (body) => {
  return axiosService.put(`/program/` + body.params, body.data)
}

export const saveDraftContest = (body) => {
  return axiosService.post(`/program/CONTEST/draft`, body)
}

export const updateDraftContest = (body) => {
  return axiosService.put(`/program/CONTEST/draft/` + body.params, body.data)
}

export const activeContest = (params) => {
  return axiosService.get(`/program/` + params + `/active`)
}

export const inactiveContest = (params) => {
  return axiosService.get(`/program/` + params + `/de-active`)
}

export const deleteContest = (params) => {
  return axiosService.delete(`/program/` + params)
}

//badge
export const getAllBadge = (params) => {
  return axiosService.get(`/badge`)
}

export const getBadgeById = (params) => {
  return axiosService.get(`/badge/` + params)
}

export const getAssociatedBadge = (params) => {
  return axiosService.get(`/program/associated-badge/` + params)
}

export const getBadgeByCondition = (params) => {
  return axiosService.get(`/badge/search?` + params)
}

export const createBadge = (body) => {
  return axiosService.post(`/badge`, body)
}

export const updateBadge = (body) => {
  return axiosService.put(`/badge/` + body.params, body.data)
}

export const deleteBadge = (params) => {
  return axiosService.delete(`/badge/` + params)
}

//audio
export const getAllAudio = (params) => {
  return axiosService.get(`/audio`)
}

export const getAudioById = (params) => {
  return axiosService.get(`/audio/` + params)
}

export const getAudioByCondition = (params) => {
  return axiosService.get(`/audio/search?` + params)
}

export const getAudioListing = (params) => {
  return axiosService.get(`/audio/` + params + `/audio-listing`)
}

export const createAudio = (body) => {
  return axiosService.post(`/audio`, body)
}

export const updateAudio = (body) => {
  return axiosService.put(`/audio/` + body.params, body.data)
}

export const deleteAudio = (params) => {
  return axiosService.delete(`/audio/` + params)
}

export const deleteMultiAudio = (body) => {
  return axiosService.put(`/audio/multiple-audio` + body)
}

export const uploadAudio = (body) => {
  return axiosService.postMedia(`/upload`, body)
}

//playlist
export const getAllPlaylist = (params) => {
  return axiosService.get(`/playlist`)
}

export const getPlaylistById = (params) => {
  return axiosService.get(`/playlist/` + params)
}

export const getPlaylistByCondition = (params) => {
  return axiosService.get(`/playlist/search?` + params)
}

export const createPlaylist = (body) => {
  return axiosService.post(`/playlist`, body)
}

export const addAudioToPlaylist = (body) => {
  return axiosService.put(`/playlist/` + body.params + `/add-audio`, body.data.chosenId)
}

export const deleteAudioFromPlaylist = (body) => {
  return axiosService.put(`/playlist/` + body.params + `/remove-audio`, body.data.deleteId)
}

export const updatePlaylist = (body) => {
  return axiosService.put(`/playlist/` + body.params, body.data)
}

export const deletePlaylist = (params) => {
  return axiosService.delete(`/playlist/` + params)
}

export const deleteFileOnS3 = (body) => {
  return axiosService.deleteMedia(`/resource`, body)
}
