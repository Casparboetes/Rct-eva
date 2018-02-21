// src/students/studentItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import EvaluationCategory from './EvaluationCategory'
import Paper from 'material-ui/Paper'
import './BatchItem.css'

const PLACEHOLDER = 'http://via.placeholder.com/500x180?text=No%20Image'

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
    const { _id, batchNum, studentName ,photo, yellow, red, green } = this.props
    const categories = { yellow, red, green }

    return(
      <article className="StudentItem">
        <Paper className="paper">
            <header>
            <div className="cover"
              style={{ backgroundImage: `url(${photo || PLACEHOLDER })` }} />

              <h1>
                <Link to={`/students/${ _id }`}>
                  {studentName}
                </Link>
              </h1>
              <ul className="categories">
                <EvaluationCategory { ...categories } />
              </ul>
            </header>
            <h3> Batch Number: { batchNum } </h3>
            <h3> Student Id: { _id } </h3>
            <footer>

            </footer>
        </Paper>
      </article>
    )
  }
}

const mapDispatchToProps = {
}

export default connect(null, mapDispatchToProps)(StudentItem)
