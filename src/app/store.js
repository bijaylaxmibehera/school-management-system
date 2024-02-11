import { configureStore } from '@reduxjs/toolkit';
import { studentSlice } from '../features/student/studentSlice';
import {schoolSlice} from '../features/school/schoolSlice';

export const store = configureStore({
  reducer: {
    school:schoolSlice.reducer,
    students:studentSlice.reducer
  },
});
