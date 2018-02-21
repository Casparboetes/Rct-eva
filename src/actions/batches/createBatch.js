import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const CREATED_BATCH = 'CREATED_BATCH'

const api = new API()

export default (newBatch) => {
  return (dispatch) => {
    console.log(newBatch)
    dispatch({ type: APP_LOADING })

    api.post('/batches', newBatch)
      .then((res) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })
        dispatch({ type: CREATED_BATCH, payload: res.body})
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
