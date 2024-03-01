import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export * from './reducer';

const store = configureStore({
  reducer: rootReducer,
});

export { store };
