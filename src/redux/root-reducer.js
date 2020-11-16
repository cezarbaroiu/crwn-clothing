import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

// configuration object for the reducer persist
// we start the persisting of the reducers from the root
const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

// we return the root reducer with the persist capabilities on top of it
export default persistReducer(persistConfig, rootReducer);