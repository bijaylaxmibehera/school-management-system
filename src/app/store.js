import { configureStore } from '@reduxjs/toolkit';
import { studentSlice } from '../features/student/studentSlice';
import {schoolSlice} from '../features/school/schoolSlice';
import {teacherSlice} from '../features/teacher/teacherSlice';

export const store = configureStore({
  reducer: {
    school:schoolSlice.reducer,
    students:studentSlice.reducer,
    teachers:teacherSlice.reducer
  },
});
