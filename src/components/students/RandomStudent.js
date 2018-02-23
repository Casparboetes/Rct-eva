import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
import StudentIcon from 'material-ui/svg-icons/action/assignment-ind'
import {selectRandomStudent} from '../../actions/students/selectRandomStudent'

const dialogStyle = {
  float: 'left',
  width: '325px',
  height: '463px',
  margin: '2rem',
  marginLeft: '2rem',
  padding: '2rem',
  textAlign: 'left',
}

class RandomStudent extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool,
  }

  render() {
    if (!this.props.signedIn) return null

    return (
        <Paper style={ dialogStyle }>
          <RaisedButton
            label="Choose Student"
            primary={true}
            onClick={this.props.selectRandomStudent}
            icon={<StudentIcon />} />
        </Paper>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps, {selectRandomStudent})(RandomStudent)
