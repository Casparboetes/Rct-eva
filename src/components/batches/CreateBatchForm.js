import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import createBatch from '../../actions/batches/createBatch'
import Paper from 'material-ui/Paper'
// import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const dialogStyle = {
  width: '400px',
  margin: '50px auto',
  padding: '2rem',
}

const buttonStyle = {
  flex: 'left',
  marginTop: '1rem',
}

class CreateBatchForm extends PureComponent {
  constructor(props) {
    super()

    const { batchNum, startDate, endDate } = props

    this.state = {
      batchNum,
      startDate,
      endDate,
    }
  }

  updateBatch(event) {
    this.setState({
      batchNum: this.refs.batchNum.value
    })
  }

  updateStartDate(text, medium) {
    this.setState({
      startDate: this.refs.startDate.value
    })
  }

  updateEndDate(text, medium) {
    this.setState({
      endDate: this.refs.endDate.value
    })
  }

  saveBatch() {
    const {
      batchNum,
      startDate,
      endDate,
    } = this.state

    const batch = {
      batchNum,
      startDate,
      endDate,
    }

    console.log(batch)
    this.props.createBatch(batch)
  }

  render() {
    return (
      <Paper style={ dialogStyle }>

      <form onSubmit={this.saveBatch.bind(this)}>
        <input
          type="text"
          ref="batchNum"
          placeholder="Enter Batch number"
          defaultValue={this.state.batchNum}
          onChange={this.updateBatch.bind(this)}
          onKeyDown={this.updateBatch.bind(this)} />
          <br />

        <input
          type="date"
          ref="startDate"
          defaultValue={this.state.startDate}
          onChange={this.updateStartDate.bind(this)}
          onKeyDown={this.updateStartDate.bind(this)} />
          <br />

        <input
          type="date"
          ref="endDate"
          defaultValue={this.state.endDate}
          onChange={this.updateEndDate.bind(this)}
          onKeyDown={this.updateEndDate.bind(this)} />
          <br />

      </form>
        <RaisedButton
          style={ buttonStyle }
          onClick={this.saveBatch.bind(this)}
          label="Add Batch"
          primary={true} />
      </Paper>
    )
  }
}



export default connect(null, { createBatch })(CreateBatchForm)
