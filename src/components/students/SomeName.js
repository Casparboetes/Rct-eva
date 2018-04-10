import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import StarIcon from 'material-ui/svg-icons/action/favorite'
import Paper from 'material-ui/Paper'
// import {CreateEvaluation} from '../../actions/batches/create'

const EVAL = [
  'red',
  'yellow',
  'green'
]

const buttonStyle = {
  flex: 'left',
  marginTop: '1rem',
}

const dialogStyle = {
  float: 'left',
  width: '500',
  height: '750',
  margin: '1rem',
  marginLeft: '1rem',
  padding: '1rem',
  textAlign: 'left',
}

class Eval extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool,
  }

  submitForm(event) {
    event.preventDefault()
    const newEvaluation = {
      yellow: this.refs.yellow.value,
      green: this.refs.green.valie,
      red: this.refs.red.value,
      date: this.refs.date.value,
      remark: this.refs.remark.value,
    }
    this.props.CreateEvaluation(this.props.batch, this.props.student, newEvaluation)
  }
  setType(event) {
    this.setState({
      red: event.target.value === 'red',
      yellow: event.target.value === 'yellow',
      green: event.target.value === 'green'
    })
  }

  render() {
    if (!this.props.signedIn) return null

    return (
      <Paper style={ dialogStyle} className="Eval">
        <form
          onSubmit={this.submitForm.bind(this)}>

        {EVAL.map((type) => {
          return <label key={type} htmlFor={type}>
            <input id={type} type="radio" name="type" value={type} onChange={this.setType.bind(this)} />
            {type}
          </label>
        })}

          <label style={{display: 'block'}}>
              Date:
              <input type="date" ref="date"/>
          </label>
          <label style={{display: 'block'}}>
            Remark:   <input type="text" ref="remark" />
          </label>
          <br/>
          <RaisedButton
            style={ buttonStyle }
            type="submit"
            label="Create Evaluation"
            primary={true}
            icon={<StarIcon />} />
        </form>
      </Paper>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps, null )(Eval)
