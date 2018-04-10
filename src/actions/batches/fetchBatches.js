// src/actions/games/fetch.js
import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const FETCHED_BATCHES = 'FETCHED_BATCHES'
// export const FETCHED_ONE_BATCH = 'FETCHED_ONE_BATCH'

const api = new API()

export const fetchBatches = () => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

    api.get('/batches')
      .then((res) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })

        dispatch({
          type: FETCHED_BATCHES,
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
//
// export const fetchBatchById = (batchNum) => {
//   return dispatch => {
//     dispatch({ type: APP_LOADING })
//
//     api.get(`/students/batch/${ batchNum }`)
//       .then((res) => {
//         dispatch({ type: APP_DONE_LOADING })
//         dispatch({ type: LOAD_SUCCESS })
//
//         dispatch({
//           type: FETCHED_ONE_BATCH,
//           payload: res.body
//         })
//       })
//       .catch((err) => {
//         dispatch({ type: APP_DONE_LOADING })
//         dispatch({
//           type: LOAD_ERROR,
//           payload: err.message
//         })
//       })
//   }
// }
