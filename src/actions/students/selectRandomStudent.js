import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'


export const RANDOM_STUDENT_SELECTED = 'RANDOM_STUDENT_SELECTED'

const api = new API()

export const selectRandomStudent = (batchNum) => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

    api.get(`/students/batch/${ batchNum }/random`)
      .then((res) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })
        dispatch({ type: RANDOM_STUDENT_SELECTED, payload: res.body})
        console.log(res.body)
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
