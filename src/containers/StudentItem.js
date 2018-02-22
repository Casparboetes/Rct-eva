// src/students/studentItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import EvalutionMark from '../components/students/EvaluationMark'
import Paper from 'material-ui/Paper'

const dialogStyle = {
    float: 'left',
    display: 'flex',
    flexFlow: 'column wrap',
    width: '325px',
    margin: '2rem',
    marginLeft: '2rem',
    padding: '2rem',
    textAlign: 'left',
  }

  const evalationMarkStyle = {
    float: 'right',
    display: 'flex',
  }

export const studentShape = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    batchNum: PropTypes.number,
    studentName: PropTypes.string.isRequired,
    photo: PropTypes.string,
    yellow: PropTypes.bool,
    red: PropTypes.bool,
    green: PropTypes.bool,
})

class StudentItem extends PureComponent {
  static propTypes = {
    ...studentShape.isRequired,
  }


  render() {
    const { _id, studentName, photo, yellow, red, green } = this.props
    const categories = { yellow, red, green }

    return(
      <Paper style={ dialogStyle }>
        <header>
          <Link to={`/students/${ _id }`}>
            <div style={{ height: '18rem',
              backgroundSize: 'cover',
              backgroudPosition: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              backgroundImage: `url(${photo })` }}
            />
          </Link>
          <h2>
            <Link to={`/students/${ _id }`}>
              {studentName}
            </Link>
          </h2>
        </header>
        <footer style={ evalationMarkStyle }>
        <EvalutionMark { ...categories } />

        </footer>
      </Paper>
    )
  }
}

const mapDispatchToProps = {
}

export default connect(null, mapDispatchToProps)(StudentItem)
