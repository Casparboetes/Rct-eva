import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const CREATED_STUDENT = 'CREATED_STUDENT'

const api = new API()

export default (newStudent) => {
  return (dispatch) => {
    console.log(newStudent)
    dispatch({ type: APP_LOADING })

    api.post('/student', newStudent)
      .then((res) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })
        dispatch({ type: CREATED_STUDENT, payload: res.body})
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
