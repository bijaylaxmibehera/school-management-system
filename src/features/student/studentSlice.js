import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchStudents = createAsyncThunk(
  'students/fetchStudents',
  async () => {
    const response = await axios.get(
      'https://795f9c15-fbc2-40ae-a028-7ded7ad52910-00-3tmkbw4oh0jfl.pike.replit.dev/api/v1/students'
    )

    return response.data.students
  }
)

export const addStudentAsync = createAsyncThunk(
  'students/addStudentAsync',
  async newStudent => {
    const response = await axios.post(
      'https://795f9c15-fbc2-40ae-a028-7ded7ad52910-00-3tmkbw4oh0jfl.pike.replit.dev/api/v1/students',
      newStudent
    )
    return response.data.student
  }
)

export const updateStudentSync = createAsyncThunk(
  'students/updateStudentAsync',
  async ({ id, updatedStudent }) => {
    const response = await axios.put(
      `https://795f9c15-fbc2-40ae-a028-7ded7ad52910-00-3tmkbw4oh0jfl.pike.replit.dev/api/v1/students/${id}`,
      updatedStudent
    )

    return response.data.student
  }
)

export const deleteStudentAsync = createAsyncThunk(
  'students/deleteStudentAsync',
  async id => {
    const response = await axios.delete(
      `https://795f9c15-fbc2-40ae-a028-7ded7ad52910-00-3tmkbw4oh0jfl.pike.replit.dev/api/v1/students/${id}`
    )

    return response.data.student
  }
)

const initialState = {
  students: [],
  status: 'idle',
  error: null
}

export const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchStudents.pending]: state => {
      state.status = 'loading'
    },
    [fetchStudents.fulfilled]: (state, action) => {
      state.status = 'success'
      state.students = action.payload
    },
    [fetchStudents.rejected]: (state, action) => {
      state.status = 'error'
      state.error = action.error.message
    },
    [addStudentAsync.pending]: state => {
      state.status = 'loading'
    },
    [addStudentAsync.fulfilled]: (state, action) => {
      state.status = 'success'
      state.students.push(action.payload)
    },
    [addStudentAsync.rejected]: (state, action) => {
      state.status = 'error'
      state.error = action.error.message
    },
    [updateStudentSync.pending]: state => {
      state.status = 'loading'
    },
    [updateStudentSync.fulfilled]: (state, action) => {
      state.status = 'success'
      const updatedStudent = action.payload
      const index = state.students.findIndex(
        std => std._id === updatedStudent._id
      )
      if (index !== -1) {
        state.students[index] = updatedStudent
      }
    },
    [updateStudentSync.rejected]: (state, action) => {
      state.status = 'error'
      state.error = action.error.message
    },
    [deleteStudentAsync.pending]: state => {
      state.status = 'loading'
    },
    [deleteStudentAsync.fulfilled]: (state, action) => {
      state.status = 'success'
      state.students = state.students.filter(
        student => student._id !== action.payload._id
      )
    },
    [deleteStudentAsync.rejected]: (state, action) => {
      state.status = 'error'
      state.error = action.error.message
    }
  }
})

export default studentSlice.reducer
