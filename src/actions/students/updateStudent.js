import ApiClient from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const UPDATED_STUDENT = 'UPDATED_STUDENT'

const api = new ApiClient()

export const updateStudent = (id) => {
  return dispatch => {
    dispatch({ type: APP_LOADING })

    api.put(`/students/${id}`)
      .then(res => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })

        dispatch({ type: UPDATED_STUDENT,
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
