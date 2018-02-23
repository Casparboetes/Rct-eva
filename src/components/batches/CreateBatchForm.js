import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import createBatch from '../../actions/batches/createBatch'
import Paper from 'material-ui/Paper'
// import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const dialogStyle = {
  float: 'left',
  width: '325px',
  height: '230px',
  margin: '2rem',
  marginLeft: '2rem',
  padding: '2rem',
  textAlign: 'left',
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

  updateStartDate(text) {
    this.setState({
      startDate: this.refs.startDate.value
    })
  }

  updateEndDate(text) {
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
          onKeyDown={this.updateBatch.bind(this)} />
          <br />

        <input
          type="date"
          ref="startDate"
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
