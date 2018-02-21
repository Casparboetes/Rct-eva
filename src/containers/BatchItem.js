// src/batches/BatchItem.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import './BatchItem.css'

export const batchShape = PropTypes.shape({
    batchNum: PropTypes.number.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
})

class BatchItem extends PureComponent {
  static propTypes = {
    ...batchShape.isRequired,
  }

  render() {
    const { batchNum ,endDate, startDate } = this.props

    return(
      <article className="BatchItem">
        <header>
          <h1>
            <Link to={`/students/batch/${ batchNum }`}>
            Batch {batchNum}
            </Link>
          </h1>
        </header>
        <div>
          <p>Start date on: { startDate }</p>
          <p>End date on: { endDate }</p>
        </div>

        <footer>

        </footer>
      </article>
    )
  }
}

const mapDispatchToProps = {
}

export default connect(null, mapDispatchToProps)(BatchItem)
