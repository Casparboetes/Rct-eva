import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'

class CreateEvaluation extends PureComponent {

  render() {
    const Style = {
     display: 'flex',
     flexFlow: 'column wrap',
     float: 'left',
     width: '325px',
     margin: '20px',
     padding: '20px',
     backgroundColor: this.props.students. || 'red',
    }

    if (!this.props.signedIn) return null
    console.log(this.props)
    return (
        <Paper style={Style} key={this.props.index} className="paper">
            {this.props.students.date}
            <br/>
            <br/>
            {this.props.students.remark}
        </Paper>

    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps)(CreateEvaluation)
