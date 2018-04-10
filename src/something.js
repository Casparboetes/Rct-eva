import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchOneStudent } from '../actions/students/fetchStudents'
import { updateStudent } from '../actions/students/updateStudent'
// import { fetchStudentsByBatchId } from '../actions/students/fetchStudents'
// import { deleteStudent } from '../actions/students/deleteStudent'
import Title from '../components/UI/Title'
import EvalutionMark from '../components/students/EvaluationMark'
import UpdateForm from '../components/students/UpdateForm'
// import SomeName from '../components/students/SomeName'
import Paper from 'material-ui/Paper'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'

const dialogStyleTitle = {
  textAlign: 'center',
  width: '800',
  padding: '1px',
  backgroundColor: 'canvasColor',
  color: 'black',
}

const dialogStyle = {
    float: 'center',
    width: '800',
    flexFlow: 'column wrap',
    padding: '2rem',
    textAlign: 'left',
    backgroundColor: 'white',
  }

  const updateForm = {
    float: 'center',
    width: '500px',
    margin: '1rem',
    marginLeft: '1rem',
    padding: '1rem',
    textAlign: 'left',
  }


  const evalationMarkStyle = {
    flex: 'right',
  }


class StudentDetailPage extends PureComponent {
  constructor(props) {
    super()

    const { studentName, summary, red, yellow, green, photo, evaluationDate } = props

    this.state = {
      studentName,
      summary,
      red,
      yellow,
      green,
      photo,
      evaluationDate,
    }
  }

  static propTypes = {
    _id: PropTypes.string,
    batchNum: PropTypes.number,
    studentName: PropTypes.string,
    photo: PropTypes.string,
    summary: PropTypes.string,
  }

  render() {
    const { _id, photo, studentName, summary, green, yellow, red, evaluationDate } = this.props
    const categories = { yellow, red, green }
    if (!_id) return null

    return (
      <div>
        <Paper style={ dialogStyleTitle }>
          <Title content="Student Detail Page" />
        </Paper>
        <Paper style={ dialogStyle }>
          <div style={ evalationMarkStyle }>
            <EvalutionMark { ...categories } />
          </div>
          <h2>  { studentName } </h2>
          <div style={{ height: '20rem',
            width: '18rem',
            backgroundSize: 'cover',
            backgroudPosition: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            backgroundImage: `url(${photo })` }}
          />
          <p> Last evualution date was on: {evaluationDate} </p>
          <p className="Text">Remarks: { summary }</p>
        </Paper>
        <Paper style={ updateForm }>
          <UpdateForm />
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({ students }, { match }) => {
  const student = students.reduce((prev, next) => {
    if (next._id === match.params.studentId) {
      return next
    }
    return prev
  }, {})

  return {
    ...student
  }
}

export default connect(mapStateToProps, { fetchOneStudent, updateStudent })(StudentDetailPage)
