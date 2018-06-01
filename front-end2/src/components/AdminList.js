// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as adminActions from '../actions/adminActions';
// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';




class AdminList extends Component {
  constructor() {
    super();
    this.state = {
      selected: "",
      selectedAdmin: "",
      selectedAdminId: ""
    }
  }

  handleSelect = (selectedRows, index, value) => {
    console.log('clicked')
    console.log(selectedRows, 'selected')
    console.log(value, 'value', value.currentTarget.id, 'currenttarget.id', value.currentTarget.innerHTML, 'name')
    console.log(index, 'this is index')
    // console.log(e.target, 'this is e.target')
    this.setState({
      selected: selectedRows,
      // selectedAdmin: e.target.innerHTML,
      selectedAdminId: value.currentTarget.id
    })
  }

  toggleSelected = () => {

  }



  handleClick = (e) => {
    e.preventDefault();
    this.props.toggleDeleteModal(this.state.selectedAdminId)
  }

  render() {
    const admins = this.props.admins
    const ListOfAdmins = admins.map((admin, index) => {
      let id = admin.id
      return (
        <TableRow key={index} id={admin.id} selected={this.state.selectedAdminId == id ? true : false}>
          <TableRowColumn id={admin.id}>{admin.name}</TableRowColumn>
          <TableRowColumn id={admin.id}>{admin.email}</TableRowColumn>
        </TableRow>
      )
    })
    console.log(this.state, 'this is state')

    return (

      <Card className="list-container">
        <AppBar showMenuIconButton={false} title="All Admins" iconElementRight={<FlatButton label="Add New Admin" onClick={this.props.toggleAddAdmin} />} />
        <Table onCellClick={this.handleSelect}>
          <TableBody displayRowCheckbox={false}>
            {ListOfAdmins}
          </TableBody>
        </Table>
        <RaisedButton className="button wide-button" primary={true} onClick={this.handleClick}> Delete Selected Admin </RaisedButton>
      </Card>
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

// <li key={admin.id} id={admin.id} onClick={this.handleSelect}>Name: {admin.name}, Email: {admin.email} </li>
//

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(adminList);
