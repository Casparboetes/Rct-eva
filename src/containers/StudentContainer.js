import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Title from '../components/UI/Title'
import Paper from 'material-ui/Paper'
import StudentItem, { studentShape } from './StudentItem'
import { fetchStudentsByBatchId } from '../actions/students/fetchStudents'
import CreateStudentForm from '../components/students/CreateStudentForm'
import RandomStudent from '../components/students/RandomStudent'

const dialogStyle = {
  flex: '1',
  flexDirection: 'column',
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

  renderStudent = (student, index) => {
    return <StudentItem key={index} { ...student } />
  }

  render() {
    if(!this.props.students) return null

    return (
      <div>
        <Paper style={ dialogStyle }>
          <header className="nav">
            <Title content="Student List" />
            <CreateStudentForm batchId={this.props.match.params.batchId} />
          </header>
          <main>
            <RandomStudent batchId={ this.props.match.params.batchId } />
            {this.props.students.map(this.renderStudent.bind(this))}
          </main>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = ({ students }) => ({ students })
const mapDispatchToProps = { fetch: fetchStudentsByBatchId }

export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer)
