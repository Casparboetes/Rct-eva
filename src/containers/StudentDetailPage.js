import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchOneStudent } from '../actions/students/fetchStudents'
import { fetchStudentsByBatchId } from '../actions/students/fetchStudents'
import { updateStudent } from '../actions/students/updateStudent'

// import { deleteStudent } from '../actions/students/deleteStudent'
import Title from '../components/UI/Title'
import EvalutionMark from '../components/students/EvaluationMark'
import UpdateForm from '../components/students/UpdateForm'

import StudentIcon from 'material-ui/svg-icons/action/assignment-ind'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import Editor from 'react-medium-editor'
import toMarkdown from 'to-markdown'

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

  const buttonStyle = {
    flex: 'left',
    marginTop: '1rem',
  }

const TYPES = [
  'red',
  'yellow',
  'green'
]

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
  }

  updateTitle(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      studentName: this.refs.studentName.value
    })
  }

  updatePhoto(event) {
    this.setState({
      photo: this.refs.photo.value
    })
  }

  updateEvaluationDate(text) {
    this.setState({
      evaluationDate: this.refs.evaluationDate.value
    })
  }

  updateIntro(text, medium) {
    this.setState({
      summary: text
    })
  }

  setType(event) {
    this.setState({
      red: event.target.value === 'red',
      yellow: event.target.value === 'yellow',
      green: event.target.value === 'green'
    })
  }

  saveStudent() {
    const {
      studentName,
      summary,
      yellow,
      red,
      green,
      photo,
      evaluationDate,
    } = this.state

    const student = {
      studentName,
      summary: toMarkdown(summary),
      yellow,
      red,
      green,
      photo,
      evaluationDate,
    }

    console.log("eerst", evaluationDate)
    console.log("tweede", student)
    console.log("derde", this.props)
    // {() => this.props.updateStudent(this.props.batchId)}
    this.props.updateStudent(student)

  }

  render() {
    const { _id , photo, studentName, summary, green, yellow, red, evaluationDate } = this.props
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

              <input
                type="text"
                ref="studentName"
                className="studentName"
                placeholder="Enter full name"
                defaultValue={this.state.studentName}
                onChange={this.updateTitle.bind(this)}
                onKeyDown={this.updateTitle.bind(this)} />
                <br />

                <input
                type="text"
                ref="photo"
                className="photo"
                placeholder="Photo URL"
                defaultValue={this.state.photo}
                onChange={this.updatePhoto.bind(this)}
                onKeyDown={this.updatePhoto.bind(this)} />
                <br />

                <input
                  type="date"
                  ref="evaluationDate"
                  onKeyDown={this.updateEvaluationDate.bind(this)} />
                  <br />

              <Editor
                ref="summary"
                options={{
                  placeholder: {text: 'Remark...'}
                }}
                onChange={this.updateIntro.bind(this)}
                text={this.state.summary} />

              {TYPES.map((type) => {
                return <label key={type} htmlFor={type}>
                  <input id={type} type="radio" name="type" value={type} onChange={this.setType.bind(this)} />
                  {type}
                </label>
              })}
              <br />
              <RaisedButton
                style={ buttonStyle }
                label="Update Information"
                primary={true}
                onClick={this.saveStudent.bind(this)}
                icon={<StudentIcon />} />

        </Paper>
        <Paper style={ updateForm }>
          <UpdateForm />
        </Paper>

        </div>

    )
  }
}
// <div className="actions">
// <button className="primary" onClick={this.nextStudent.bind(this)}>Next Student</button>
// </div>
// <div className="actions">
//   <button className="primary" onClick={this.deleteStudent(this.props.batchId)}>Delete</button>
// </div>

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

export default connect(mapStateToProps, { fetchStudentsByBatchId, fetchOneStudent, updateStudent })(StudentDetailPage)
