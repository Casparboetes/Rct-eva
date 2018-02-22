import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Paper from 'material-ui/Paper'

const dialogStyle = {
    float: 'left',
    display: 'flex',
    flexFlow: 'column wrap',
    width: '325px',
    margin: '2rem',
    marginLeft: '2rem',
    padding: '2rem',
    textAlign: 'left',
  }

export const batchShape = PropTypes.shape({
    batchNum: PropTypes.number.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
})

class BatchItem extends PureComponent {
  static propTypes = {
    ...batchShape.isRequired,
  }

 render() {
     const { batchNum, endDate, startDate } = this.props

     return(
      <Paper style={ dialogStyle }>
         <header>
           <h1>
             <Link to={`/students/batch/${ batchNum }`}>
             Batch {batchNum}
             </Link>
           </h1>
         </header>
         <div>
           <p>Start date on: { startDate }</p>
           <p>End date on: { endDate }</p>
         </div>

         <footer>

         </footer>
       </Paper>
     )
   }
 }

export default BatchItem
