import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer';
import logger from './middleware/logger'


export default () => configureStore({
  reducer,
  middleware: [logger({ destination: "console" })]
});
