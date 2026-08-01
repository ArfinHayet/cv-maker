import { configureStore } from '@reduxjs/toolkit';
import cvReducer from './states/cvSlice';

export const store = configureStore({
  reducer: {
    cv: cvReducer
  }
});

store.subscribe(() => {
  try {
    const cvState = store.getState().cv;
    localStorage.setItem('cv_maker_data_v2', JSON.stringify(cvState));
  } catch (e) {
    console.error('Failed to sync CV state to localStorage:', e);
  }
});

export default store;