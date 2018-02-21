import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Title from '../components/UI/Title'
import BatchItem, { batchShape } from './BatchItem'
import CreateBatchForm from '../components/batches/CreateBatchForm'
import { fetchBatches } from '../actions/batches/fetchBatches'
// import './BatchesContainer.css'

class BatchsContainer extends PureComponent {
  static propTypes = {
    batches: PropTypes.arrayOf(batchShape).isRequired,
  }


  componentWillMount() {
  //this.props.dispatch(fetchBatchs())
  this.props.fetch() // see mapDispatchToProps below
  }

  renderBatch(batch, index) {
    return (
      <BatchItem key={index} /*updateBatch={this.props.updateBatch}*/ { ...batch } />
    )
  }

  render() {
    return(
      <div className="batch wrapper">

      <CreateBatchForm />



        <header className="renderHeader">
          <Title content="Batches" />
        </header>
        <main className="renderMain">
          { this.props.batches.map(this.renderBatch.bind(this)) }
        </main>
        <footer className="renderFooter">
        </footer>
      </div>
    )
  }
}

// <BatchEditor className="editor" />
// Same as:
// const mapStoreToProps = (store) => {
//   return { batches: store.batches }
// }

const mapStateToProps = ({ batches }) => ({ batches })
const mapDispatchToProps = { fetch: fetchBatches }


export default connect(mapStateToProps, mapDispatchToProps)(BatchsContainer)
