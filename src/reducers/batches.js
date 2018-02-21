import { CREATED_BATCH } from '../actions/batches/createBatch'
import { FETCHED_BATCHES } from '../actions/batches/fetchBatches'
import { FETCHED_ONE_BATCH } from '../actions/batches/fetchBatches'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case CREATED_BATCH :
      return [Object.assign({}, payload)].concat(state)

    case FETCHED_BATCHES :
      return payload.slice()

    case FETCHED_ONE_BATCH :
      return [payload].concat(state)

    default :
        return state
  }
}
