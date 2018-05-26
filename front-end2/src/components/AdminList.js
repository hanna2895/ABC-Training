import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as adminActions from '../actions/adminActions';
import PropTypes from 'prop-types';
import React from 'react';

class adminList extends React.Component {
componentDidMount() { // here we are triggering the action => react lifecycle method
  this.props.adminActions.fetchAdmins();
}

  renderData() {
    return <div>{this.props.admins}</div>
  }

  render() {
    return (
      <div className="">
        {this.props.admins.length > 0 ?
          this.renderData()
          :
          <div className="">
            No Data
          </div>
        }
      </div>
    );
  }
}

adminList.propTypes = {
  adminActions: PropTypes.object,
  admins: PropTypes.array
};

function mapStateToProps(state) {
  return {
    admins: state.admins
  };
}

function mapDispatchToProps(dispatch) {
  return {
    adminActions: bindActionCreators(adminActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(adminList);
