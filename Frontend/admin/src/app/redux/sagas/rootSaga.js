import { all } from 'redux-saga/effects'
import adminSaga from './adminSaga'

export default function* rootSaga() {
  yield all([adminSaga()])
}
