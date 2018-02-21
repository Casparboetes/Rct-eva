import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Title from '../components/UI/Title'
import Paper from 'material-ui/Paper'
import StudentItem, { studentShape } from './StudentItem'
import { fetchStudentsByBatchId } from '../actions/students/fetchStudents'

const dialogStyle = {
  flex: 'auto',
  textAlign: 'center',
  width: 'auto',
  padding: '1px',
  backgroundColor: 'canvasColor',
  color: 'black',
}

class StudentContainer extends PureComponent {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape).isRequired,
  }

  componentWillMount() {
    this.props.fetch(this.props.match.params.batchId)
  }
//
  renderStudent = (student, index) => {
    return <StudentItem key={index} { ...student } />
  }

  render() {
    return (
      <Paper style={ dialogStyle }>
        <header className="nav">
          <Title content="#Student List" />
        </header>
        <main>
          {this.props.students.map(this.renderStudent.bind(this))}
        </main>
      </Paper>
    )
  }
}

const mapStateToProps = ({ students }) => ({ students })
const mapDispatchToProps = { fetch: fetchStudentsByBatchId }

export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer)
