import  {configureStore} from '@reduxjs/toolkit';
import { cryptoapi } from '../services/cryptoapi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';

export default configureStore({
    reducer:{
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
        [cryptoapi.reducerPath]: cryptoapi.reducer,
       
    }
});