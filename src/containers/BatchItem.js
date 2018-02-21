import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const batchShape = PropTypes.shape({
    batchNum: PropTypes.number.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
})

class BatchItem extends PureComponent {
  static propTypes = {
    ...batchShape.isRequired,
  }

 // forceUpdateHandler(){
 //   this.forceUpdate()
 // }

 // onClick={this.forceUpdateHandler.bind(this)}

 render() {
     const { batchNum ,endDate, startDate } = this.props

     return(
       <article className="BatchItem">
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
       </article>
     )
   }
 }

export default BatchItem
