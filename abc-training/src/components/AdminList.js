import React from 'react';
import { connect } from 'react-redux';
import { bind ActionCreators } from 'redux';
import * as adminActions from '../actions/adminActions';
import PropTypes from 'prop-types';

class adminList extends React.Component {
  renderData() {
    return <div>{this.props.admins}</div>
  }

  render() {
    return (
      <div className="">
        {this.props.admins.length > 0 ? this.renderData()
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
 )(adminList)
