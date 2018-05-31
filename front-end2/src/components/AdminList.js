// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as adminActions from '../actions/adminActions';
// import PropTypes from 'prop-types';
import React, { Component } from 'react';

class AdminList extends Component {
  constructor() {
    super();
    this.state = {
      selectedAdmin: "",
      selectedAdminId: ""
    }
  }

  handleSelect = (e) => {
    console.log(e.target.innerHTML, 'was clicked')
    this.setState({
      selectedAdmin: e.target.innerHTML,
      selectedAdminId: e.target.id
    })
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.toggleDeleteModal(this.state.selectedAdminId)
  }

  render() {
    const admins = this.props.admins
    const ListOfAdmins = admins.map((admin, i) => {
      return (
          <li key={admin.id} id={admin.id} onClick={this.handleSelect}>Name: {admin.name}, Email: {admin.email} </li>
      )
    })
    console.log(this.state, 'this is state')

    return (

      <div className="list-container">
        <h2> All Admins </h2>
        <div className="list-holder">
          <ul>
            {ListOfAdmins}
          </ul>
        </div>
        <button onClick={this.props.toggleAddAdmin}> Add New Admin </button>
        <button onClick={this.handleClick}> Delete Selected Admin </button>
      </div>
    )
  }


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
