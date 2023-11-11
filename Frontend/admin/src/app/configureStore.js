import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './redux/reducers/rootReducer'
import rootSaga from './redux/sagas/adminSaga'

const composeEnhancer =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
  const middleWare = [sagaMiddleware]
  const enhancers = [applyMiddleware(...middleWare)]
  const store = createStore(rootReducer, composeEnhancer(...enhancers))
  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore
