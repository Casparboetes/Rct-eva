import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateStudent } from '../../actions/students/updateStudent'
import RaisedButton from 'material-ui/RaisedButton'
import StudentIcon from 'material-ui/svg-icons/action/assignment-ind'
import Editor from 'react-medium-editor'
import toMarkdown from 'to-markdown'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'

const EVAL = [
  'red',
  'yellow',
  'green'
]

const buttonStyle = {
  flex: 'left',
  marginTop: '1rem',
}

class UpdateForm extends PureComponent {
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

  updateStudentName(event) {
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

  setColor(event) {
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

    console.log(this.props.batchId)
    this.props.updateStudent(student)

    // {() => this.props.updateStudent(this.props.batchId)}
  }

  render() {
    if (!this.props.signedIn) return null

    return (


          <div className="editor">
            <input
              type="text"
              ref="studentName"
              className="studentName"
              placeholder="Enter full name"
              defaultValue={this.state.studentName}
              onChange={this.updateStudentName.bind(this)}
              onKeyDown={this.updateStudentName.bind(this)} />
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
              style={{display: 'block'}}
              onChange={this.updateIntro.bind(this)}
              text={this.state.summary} />

            {EVAL.map((type) => {
              return <label key={type} htmlFor={type}>
                <input id={type} type="radio" name="type" value={type} onChange={this.setColor.bind(this)} />
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

      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, students }) => ({
  signedIn: !!currentUser && !!currentUser._id,
  students,
})

export default connect(mapStateToProps, {updateStudent})(UpdateForm)
