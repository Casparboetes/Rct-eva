createbatchform

import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import createBatch from '../../actions/batches/createBatch'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
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
  // static propTypes = {
  //   batchNum: PropTypes.number.isRequired,
  //   startDate: PropTypes.string.isRequired,
  //   endDate: PropTypes.string.isRequired,
  // }

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
      <Paper style={ dialogStyle }>


          <TextField
            type="text"
            ref="batchNum"
            errorText="This field is required"
            placeholder="Enter Batch number"
            defaultValue={this.state.batchNum}
            onChange={this.updateBatch.bind(this)}
            onKeyDown={this.updateBatch.bind(this)} />

          <TextField
            type="date"
            ref="startDate"
            errorText="Date is required"
            defaultValue={this.state.startDate}
            onChange={this.updateStartDate.bind(this)}
            onKeyDown={this.updateStartDate.bind(this)} />

          <TextField
            type="date"
            ref="endDate"
            errorText="Date is required"
            defaultValue={this.state.endDate}
            onChange={this.updateEndDate.bind(this)}
            onKeyDown={this.updateEndDate.bind(this)} />


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

===============================================================================

EvaluationCategory

// <ul className="categories">
// <EvaluationCategory { ...categories } />
// </ul>

  render
  const categories = { yellow, red, green }



===============================================================================

// cut from fetchBatches.js

===============================================================================
// this was Random.js attempt to use a Dialog

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/UI/Title'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'


 class Random extends PureComponent {
  state = {
    open: false,
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  render() {
    const actions = [
      <FlatButton
        label="Delete"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Save"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ]

    return (
      <div>
        <RaisedButton label="Select Student" onClick={this.handleOpen} />
        <Dialog
          title="Show Random Student"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        </Dialog>
      </div>
    )
  }
}

export default Random

===============================================================================

// from subscribe

export const GAME_CREATED = 'GAME_CREATED'
export const GAME_UPDATED = 'GAME_UPDATED'
export const GAME_REMOVED = 'GAME_REMOVED'
export const GAME_PLAYERS_UPDATED = 'GAME_PLAYERS_UPDATED'

===============================================================================

// src/reducers/games.js
import { FETCHED_GAMES, FETCHED_ONE_GAME } from '../actions/games/fetch'
import {
  GAME_CREATED,
  GAME_UPDATED,
  GAME_REMOVED,
  GAME_PLAYERS_UPDATED,
} from '../actions/games/subscribe'

export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case FETCHED_GAMES :
      return [ ...payload ]

    case FETCHED_ONE_GAME :
      const gameIds = state.map(g => g._id)
      if (gameIds.indexOf(payload._id) < 0) {
        return [{ ...payload }].concat(state)
      }
      return state.map((game) => {
        if (game._id === payload._id) {
          return { ...payload }
        }
        return game
      })

    case GAME_CREATED :
      const newGame = { ...payload }
      return [newGame].concat(state)

    case GAME_UPDATED :
      return state.map((game) => {
        if (game._id === payload._id) {
          return { ...payload }
        }
        return game
      })

    case GAME_PLAYERS_UPDATED :
      return state.map((game) => {
        if (game._id === payload.game._id) {
          return { ...payload.game, players: payload.players }
        }
        return game
      })

    case GAME_REMOVED :
          return state.filter((game) => (game._id !== payload._id))

    default :
      return state

  }
}


============================================================================



  updateTitle(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
      this.refs.summary.medium.elements[0].focus()
    }
    this.setState({
      studentName: this.refs.studentName.value
    })
  }

  updatePhoto(event) {
    this.setState({
      photo: this.refs.photo.value
    })
  }

  updateEvaluationDate(text) {
    this.setState({
      evaluationDate: this.refs.evaluationDate.value
    })
  }

  updateIntro(text, medium) {
    this.setState({
      summary: text
    })
  }

  setColor(event) {
    this.setState({
      red: event.target.value === 'red',
      yellow: event.target.value === 'yellow',
      green: event.target.value === 'green'
    })
  }

  saveStudent() {
    const {
      studentName,
      summary,
      yellow,
      red,
      green,
      photo,
      evaluationDate,
    } = this.state

    const student = {
      studentName,
      summary: toMarkdown(summary),
      yellow,
      red,
      green,
      photo,
      evaluationDate,
      _id: this.props.match.params.studentId,
    }

    console.log("DEZE STUDENT", student)
    console.log("DEZE PROPS", this.props.match.params.studentId)
    console.log("DERDER PROPS", this.props.match.params.batchId)
    console.log("VIER", this.props.updateStudent(student))
    // {() => this.props.updateStudent(student)}
    this.props.updateStudent(student)

  }




          <div className="editor">
            <input
              type="text"
              ref="studentName"
              className="studentName"
              placeholder="Enter full name"
              defaultValue={this.state.studentName}
              onChange={this.updateTitle.bind(this)}
              onKeyDown={this.updateTitle.bind(this)} />
              <br />

              <input
              type="text"
              ref="photo"
              className="photo"
              placeholder="Photo URL"
              defaultValue={this.state.photo}
              onChange={this.updatePhoto.bind(this)}
              onKeyDown={this.updatePhoto.bind(this)} />
              <br />

              <input
                type="date"
                ref="evaluationDate"
                onKeyDown={this.updateEvaluationDate.bind(this)} />
                <br />

            <Editor style={{display: 'block'}}
              ref="summary"
              options={{
                placeholder: {text: 'Remark...'}
              }}
              onChange={this.updateIntro.bind(this)}
              text={this.state.summary} />

            {EVAL.map((type) => {
              return <label key={type} htmlFor={type}>
                <input id={type} type="radio" name="type" value={type} onChange={this.setColor.bind(this)} />
                {type}
              </label>
            })}

            <div className="actions">
              <button className="primary" onClick={this.saveStudent.bind(this)}>Save</button>
            </div>
