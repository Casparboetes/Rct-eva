import API from '../../api/client'

export const CREATED_STUDENT = 'CREATED_STUDENT'

const api = new API()

export default (newStudent) => {
  return (dispatch) => {
    console.log(dispatch)
    console.log(newStudent)
    dispatch({ type: APP_LOADING })

    api.post('/students/random', newStudent)
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
