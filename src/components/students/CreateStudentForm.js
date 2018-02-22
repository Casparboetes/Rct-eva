import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import createStudent from '../../actions/students/createStudent'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

const dialogStyle = {
  float: 'left',
  width: '400px',
  margin: '2rem',
  marginLeft: '2rem',
  padding: '2rem',
  textAlign: 'left',
}

const buttonStyle = {
  flex: 'left',
  marginTop: '1rem',
}

class CreateStudentForm extends PureComponent {
  constructor(props) {
    super()

    const { studentName, photo } = props

    this.state = {
      studentName,
      photo,
    }
  }

  updateStudent(event) {
    this.setState({
      studentName: this.refs.studentName.value
    })
  }

  updatePhoto(text) {
    this.setState({
      photo: this.refs.photo.value
    })
  }

  saveBatch() {
    const {
      studentName,
      photo,
    } = this.state

    const batch = {
      studentName,
      photo,
      batchNum: this.props.batchId,
    }

    this.props.createStudent(batch)
  }

  render() {
    return (
      <Paper style={ dialogStyle }>

      <form onSubmit={this.saveBatch.bind(this)}>
        <input
          type="text"
          ref="studentName"
          placeholder="Enter full name"
          defaultValue={this.state.studentName}
          onChange={this.updateStudent.bind(this)}
          onKeyDown={this.updateStudent.bind(this)} />
          <br />

        <input
          type="text"
          ref="photo"
          placeholder="Photo URL"
          defaultValue={this.state.photo}
          onChange={this.updatePhoto.bind(this)}
          onKeyDown={this.updatePhoto.bind(this)} />
          <br />

      </form>
        <RaisedButton
          style={ buttonStyle }
          onClick={this.saveBatch.bind(this)}
          label="Add Student"
          primary={true} />
      </Paper>
    )
  }
}

export default connect(null, { createStudent })(CreateStudentForm)
