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
  width: 'auto',
  margin: '1px',
  padding: '2rem',
  backgroundColor: 'canvasColor',
  color: 'black',
}

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

// <BatchEditor className="editor" />
// Same as:
// const mapStoreToProps = (store) => {
//   return { batches: store.batches }
// }

const mapStateToProps = ({ batches }) => ({ batches })
const mapDispatchToProps = { fetch: fetchBatches }


export default connect(mapStateToProps, mapDispatchToProps)(BatchsContainer)
