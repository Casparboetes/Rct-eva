import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import { fetchOneStudent } from '../actions/students/fetchStudents'
import Title from '../components/UI/Title'

const dialogStyleTitle = {
  flex: 'auto',
  textAlign: 'center',
  width: 'auto',
  padding: '1px',
  backgroundColor: 'canvasColor',
  color: 'black',
}

const dialogStyle = {
    float: 'center',
    display: 'flex',
    flexFlow: 'column wrap',
    width: '500px',
    padding: '2rem',
    textAlign: 'left',
    backgroundColor: 'white',
  }

export class StudentDetailPage extends PureComponent {
  static propTypes = {
    _id: PropTypes.string,
    batchNum: PropTypes.number,
    studentName: PropTypes.string,
    photo: PropTypes.string,
  }

  render() {
    const { _id, photo, studentName, remarks, green, yellow, red, evaluationDate } = this.props

    if (!_id) return null


    return(
      <div>
      <Paper style={ dialogStyleTitle }>
        <header className="nav">
          <Title content="Student Detail Page" />
        </header>
      </Paper>
      <Paper>
        <main style={ dialogStyle }>

      <h2>  { studentName } </h2>
      <div style={{ height: '20rem',
        width: '18rem',
        backgroundSize: 'cover',
        backgroudPosition: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundImage: `url(${photo })` }}
      />
          { remarks }
          { green }
          { red }
          { yellow }
          { evaluationDate }
        </main>
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

export default connect(mapStateToProps, { fetchOneStudent } )(StudentDetailPage)
