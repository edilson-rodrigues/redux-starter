import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import reducer from './reducer';
import logger from './middleware/logger'


export default () => configureStore({ reducer }, applyMiddleware(logger));
