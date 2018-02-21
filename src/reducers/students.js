import { FETCHED_STUDENTS } from '../actions/students/fetchStudents'
import { FETCHED_ONE_STUDENT } from '../actions/students/fetchStudents'
import { FETCHED_STUDENTS_BY_BATCHNUM } from '../actions/students/fetchStudents'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_STUDENTS :
      return payload.concat(state)

    case FETCHED_ONE_STUDENT :
      return [payload].concat(state)

    case FETCHED_STUDENTS_BY_BATCHNUM :
      return payload

    default :
      return state
  }
}
