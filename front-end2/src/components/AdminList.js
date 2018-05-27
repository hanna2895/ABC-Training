// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as adminActions from '../actions/adminActions';
// import PropTypes from 'prop-types';
import React from 'react';

const AdminList = (props) => {
  const admins = props.admins
  const ListOfAdmins = admins.map((admin, i) => {
    return (
        <li key={admin.id}>Name: {admin.name}, Email: {admin.email} </li>
    )
  })

  return (
    <div className="list-container">
      <h2> All Admins </h2>
      <div className="list-holder">
        <ul>
          {ListOfAdmins}
        </ul>
      </div>
    </div>
  )
}

export default AdminList;













// THIS COMPONENT DOESN'T NEED REDUX. KEEPING FOR FUTURE COMPONENTS THAT WILL.

// class adminList extends React.Component {
//
//   componentDidMount() { // here we are triggering the action => react lifecycle method
//     this.props.adminActions.fetchAdmins();
//     // this.setState({admins: admins})
//     // console.log(admins, 'this is admins from componentDidMount in adminList')
//   }
//
//   renderData() {
//
//   }
//
//   render() {
//     const listOfAdmins = this.state.admins.map((admin, i) => {
//       return (
//         <ul>
//           <li key={admin.id}>{admin.name}, {admin.email}, {admin.is_lead_admin}</li>
//         </ul>
//       )
//     })
//
//     return (
//       <div className="">
//         {this.props.admins.length > 0 ?
//           listOfAdmins
//           :
//           <div className="">
//             No Data
//           </div>
//         }
//       </div>
//     );
//   }
// }
//
// adminList.propTypes = {
//   adminActions: PropTypes.object,
//   admins: PropTypes.array
// };
//
// function mapStateToProps(state) {
//   return {
//     admins: state.admins
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return {
//     adminActions: bindActionCreators(adminActions, dispatch)
//   };
// }
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(adminList);
