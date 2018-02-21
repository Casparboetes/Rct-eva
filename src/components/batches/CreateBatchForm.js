import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import createBatch from '../../actions/batches/createBatch'

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
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.medium.elements[0].focus()
    }
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
      <div className="editor">
        <input
          type="text"
          ref="batchNum"
          className="batchNum"
          placeholder="Enter Batch number"
          defaultValue={this.state.batchNum}
          onChange={this.updateBatch.bind(this)}
          onKeyDown={this.updateBatch.bind(this)} />

          <input
            type="text"
            ref="startDate"
            className="startDate"
            placeholder="Enter date 01/01/2018"
            defaultValue={this.state.startDate}
            onChange={this.updateStartDate.bind(this)}
            onKeyDown={this.updateStartDate.bind(this)} />

            <input
              type="text"
              ref="endDate"
              className="endDate"
              placeholder="Enter date 01/01/2018"
              defaultValue={this.state.endDate}
              onChange={this.updateEndDate.bind(this)}
              onKeyDown={this.updateEndDate.bind(this)} />

        <div className="actions">
          <button className="primary" onClick={this.saveBatch.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { createBatch })(CreateBatchForm)
