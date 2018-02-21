import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../user/loading'

export const CREATED_RECIPE = 'CREATED_RECIPE'

const api = new API()

export default (newRecipe) => {
  return (dispatch) => {
    console.log(newRecipe)
    dispatch({ type: APP_LOADING })

    api.post('/recipes', newRecipe)
      .then((res) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })
        dispatch({ type: CREATED_RECIPE, payload: res.body})
      })

      .catch((error) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}
