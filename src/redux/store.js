import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import phoneBookReducers from './phoneBookActions/phoneBookReducers';
import authReducers from '../redux/auth/authReducer';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [thunk];

const persistConfig = {
  key: 'auth',
  storage,
  whiteList: ['token'],
};

const rootReducer = combineReducers({
  contacts: phoneBookReducers,
  auth: persistReducer(persistConfig, authReducers),
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export const persistor = persistStore(store);
