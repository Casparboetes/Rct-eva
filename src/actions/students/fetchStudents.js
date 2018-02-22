import ApiClient from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const FETCHED_STUDENTS = 'FETCHED_STUDENTS'
export const FETCHED_ONE_STUDENT = 'FETCHED_ONE_STUDENT'
export const FETCHED_STUDENTS_BY_BATCHNUM = 'FETCHED_STUDENTS_BY_BATCHNUM'

const api = new ApiClient()

export const fetchOneStudent = (id) => {
  return dispatch => {
    const path = `/students/${id}`
    // dispatch(loading(path, true))

    api.get(path)
      .then(res => dispatch({ type: FETCHED_STUDENTS, payload: res.body }))
    //   .catch(err => dispatch(loadError(err)))
    //
    // dispatch(loading(false))
  }
}

export const fetchStudentsByBatchId = (batchNum) => {
  return dispatch => {
    dispatch({ type: APP_LOADING })

    api.get(`/students/batch/${ batchNum }`)
      .then(res => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })

        dispatch({
          type: FETCHED_STUDENTS_BY_BATCHNUM,
          payload: res.body
        })
      })
      .catch((err) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: err.message
        })
      })
  }
}
