// import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import Title from '../components/UI/Title'no
// import StudentItem, { studentShape } from './StudentItem'
// import { fetchStudentsByBatchId } from '../actions/students'
// import './BatchesContainer.css'
//
// class StudentsList extends PureComponent {
//   static propTypes = {
//     students: PropTypes.arrayOf(studentShape).isRequired,
//   }
//
//
//   componentWillMount() {
//     this.props.fetch(this.props.match.params.batchId)
//   }
//
//   renderStudent = (student, index) => {
//     return <StudentItem key={index} { ...student } />
//   }
//
//   render() {
//     return (
//       <div className="students wrapper">
//         <header className="nav">
//           <Title content="Students Overview" />
//
//         </header>
//
//         <main>
//           {this.props.students.map(this.renderStudent)}
//         </main>
//       </div>
//     )
//   }
// }
//
// const mapStateToProps = ({ students }) => ({ students })
// const mapDispatchToProps = { fetch: fetchStudentsByBatchId }
//
// export default connect(mapStateToProps, mapDispatchToProps)(StudentsList)
