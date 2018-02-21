// src/batches/BatchesContainer.js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/UI/Title'
import BatchItem, { batchShape } from './BatchItem'
import { fetchBatches } from '../actions/batches'
// import './BatchesContainer.css'

class BatchesContainer extends PureComponent {
  static propTypes = {
    batches: PropTypes.arrayOf(batchShape).isRequired,
  }

  componentWillMount() {
    this.props.fetch()
  }

  renderBatch = (batch, index) => {
    return <BatchItem key={index} { ...batch } />
  }

  render() {
    return (
      <div className="batches wrapper">
        <header className="nav">
          <Title content="  Classes" />
        </header>

        <main>
        { this.props.batches.map(this.renderBatch) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ batches }) => ({ batches })
const mapDispatchToProps = { fetch: fetchBatches }

// Same as:
// const mapStoreToProps = (store) => {
//   return { batches: store.batches }
// }

export default connect(mapStateToProps, mapDispatchToProps)(BatchesContainer)
