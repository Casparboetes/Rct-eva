import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import { fetchOneStudent } from '../actions/students/fetchStudents'
import Title from '../components/UI/Title'

const dialogStyle = {
  flex: 'auto',
  textAlign: 'center',
  width: 'auto',
  padding: '1px',
  backgroundColor: 'canvasColor',
  color: 'black',
}

export class StudentDetailPage extends PureComponent {
  static propTypes = {
    studentName: PropTypes.string,
  }

  render() {
    const { _id, photo, studentName, summary, green, yellow, red, evaluationDate } = this.props

    if (!_id) return null

    return(
      <Paper style={ dialogStyle }>
        <header className="nav">
          <Title content="Student Detail Page" />
        </header>
        <main>
          { photo }
          { studentName }
          { summary }
          { green }
          { red }
          { yellow }
          { evaluationDate }
        </main>
      </Paper>
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

export default connect(mapStateToProps, { fetchOneStudent } )(StudentDetailPage)
