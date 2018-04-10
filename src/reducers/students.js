import { FETCHED_STUDENTS } from '../actions/students/fetchStudents'
import { FETCHED_ONE_STUDENT } from '../actions/students/fetchStudents'
import { FETCHED_STUDENTS_BY_BATCHNUM } from '../actions/students/fetchStudents'
import { CREATED_STUDENT } from '../actions/students/createStudent'
import { RANDOM_STUDENT_SELECTED } from '../actions/students/selectRandomStudent'
// import { DELETED_STUDENT } from '../actions/students/deleteStudent'
import { UPDATED_STUDENT } from '../actions/students/updateStudent'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case CREATED_STUDENT :
      return [Object.assign({}, payload)].concat(state)

    case FETCHED_STUDENTS :
      return payload.concat(state)

    case FETCHED_ONE_STUDENT :
      return [payload].concat(state)

    case FETCHED_STUDENTS_BY_BATCHNUM :
      return payload

    case RANDOM_STUDENT_SELECTED :
      return [payload]

    // case DELETED_STUDENT :
    //   return state.filter((student) => (student._id.toString() !== payload._id))
    //
    case UPDATED_STUDENT :
      return [payload]

    default :
      return state
  }
}
