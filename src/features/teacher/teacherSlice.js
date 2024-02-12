import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  teachers: [],
  status: 'idle',
  error: null
}

export const fetchTeachers = createAsyncThunk(
  'teachers/fetchTeachers',
  async () => {
    const response = await axios.get(
      'https://795f9c15-fbc2-40ae-a028-7ded7ad52910-00-3tmkbw4oh0jfl.pike.replit.dev/api/v1/teachers'
    )

    return response.data.teachers
  }
)

export const addTeacherAsync = createAsyncThunk(
  'teachers/addTeacherAsync',
  async teacher => {
    const response = await axios.post(
      'https://795f9c15-fbc2-40ae-a028-7ded7ad52910-00-3tmkbw4oh0jfl.pike.replit.dev/api/v1/teachers',
      teacher
    )

    return response.data.teacher
  }
)

export const updateTeacherAsync = createAsyncThunk(
  'teachers/updateTeacherAsync',
  async ({ id, updatedTeacher }) => {
    const response = await axios.put(
      `https://795f9c15-fbc2-40ae-a028-7ded7ad52910-00-3tmkbw4oh0jfl.pike.replit.dev/api/v1/teachers/${id}`,
      updatedTeacher
    )

    return response.data.teacher
  }
)

export const deleteTeachersAsync = createAsyncThunk(
  'teachers/deleteTeachersAsync',
  async id => {
    const response = await axios.delete(
      `https://795f9c15-fbc2-40ae-a028-7ded7ad52910-00-3tmkbw4oh0jfl.pike.replit.dev/api/v1/teachers/${id}`
    )

    return response.data.teacher
  }
)

export const teacherSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTeachers.pending]: state => {
      state.status = 'loading'
    },
    [fetchTeachers.fulfilled]: (state, action) => {
      state.status = 'success'
      state.teachers = action.payload
    },
    [fetchTeachers.rejected]: (state, action) => {
      state.status = 'error'
      state.error = action.error.message
    },
    [addTeacherAsync.pending]: state => {
      state.status = 'loading'
    },
    [addTeacherAsync.fulfilled]: (state, action) => {
      state.status = 'success'
      state.teachers.push(action.payload)
    },
    [addTeacherAsync.rejected]: (state, action) => {
      state.status = 'error'
      state.error = action.error.message
    },
    [updateTeacherAsync.pending]: state => {
      state.status = 'loading'
    },
    [updateTeacherAsync.fulfilled]: (state, action) => {
      state.status = 'success'
      const updatedTeacher = action.payload
      const index = state.teachers.findIndex(
        teacher => teacher.id === updatedTeacher._id
      )
      if (index !== -1) {
        state.teachers[index] = updatedTeacher
      }
    },
    [updateTeacherAsync.rejected]: (state, action) => {
      state.status = 'error'
      state.error = action.error.message
    },
    [deleteTeachersAsync.pending]: state => {
      state.status = 'loading'
    },
    [deleteTeachersAsync.fulfilled]: (state, action) => {
      state.status = 'success'
      state.teachers = state.teachers.filter(
        teacher => teacher._id !== action.payload._id
      )
    },
    [deleteTeachersAsync.rejected]: (state, action) => {
      state.status = 'error'
      state.error = action.error.message
    }
  }
})

export default teacherSlice.reducer
