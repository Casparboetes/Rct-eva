import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Title from '../components/UI/Title'
import BatchItem, { batchShape } from './BatchItem'
import CreateBatchForm from '../components/batches/CreateBatchForm'
import { fetchBatches } from '../actions/batches/fetchBatches'
import Paper from 'material-ui/Paper'
// import './BatchesContainer.css'

const dialogStyle = {
  flex: 'auto',
  textAlign: 'center',
  width: 'auto',
  padding: '1px',
  backgroundColor: 'canvasColor',
  color: 'black',
}

class BatchsContainer extends PureComponent {
  static propTypes = {
    batches: PropTypes.arrayOf(batchShape).isRequired,
  }


  componentWillMount() {
  this.props.fetch()
  }

  renderBatch(batch, index) {
    return (
      <BatchItem key={index} { ...batch } />
    )
  }

  render() {
    return(
      <Paper style={ dialogStyle }>
        <header className="renderHeader">
          <Title content="#Batches" />
          <CreateBatchForm />
        </header>
        <main className="renderMain">
          { this.props.batches.map(this.renderBatch.bind(this)) }
        </main>
        <footer className="renderFooter">
        </footer>
      </Paper>
    )
  }
}


// Same as:
// const mapStoreToProps = (store) => {
//   return { batches: store.batches }
// }

const mapStateToProps = ({ batches }) => ({ batches })
const mapDispatchToProps = { fetch: fetchBatches }


export default connect(mapStateToProps, mapDispatchToProps)(BatchsContainer)
