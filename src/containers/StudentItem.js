// src/students/studentItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Paper from 'material-ui/Paper'

const dialogStyle = {
    float: 'left',
    display: 'flex',
    flexFlow: 'column wrap',
    width: '400px',
    margin: '2rem',
    marginLeft: '2rem',
    padding: '2rem',
    textAlign: 'left',
  }

export const studentShape = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    batchNum: PropTypes.number.isRequired,
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
    const { _id, batchNum, studentName, photo, yellow, red, green } = this.props

    return(
      <Paper style={ dialogStyle }>
        <header>
          <div className="cover"
            style={{ height: '200px', backgroundImage: `url(${photo })` }} />

            <h1>
              <Link to={`/students/${ _id }`}>
                {studentName}
              </Link>
            </h1>
          </header>
          <h3> Batch Number: { batchNum } </h3>
          <h3> Student Id: { _id } </h3>
        <footer>

        </footer>
      </Paper>
    )
  }
}

const mapDispatchToProps = {
}

export default connect(null, mapDispatchToProps)(StudentItem)
