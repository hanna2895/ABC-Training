import React from 'react';

const AdminShow = ({ adminName, email, toggleEditAdmin, isLeadAdmin }) => {
  return (
    <div className="list-container">
      <h2> Admin Settings </h2>
      <div className="list-holder">
        <label> Name: </label>
        {adminName} <br />
        <label> Email: </label>
        {email}<br />
        <label> Is Lead Admin: </label>
        <input type="checkbox" checked={isLeadAdmin} readOnly/>
        <button onClick={toggleEditAdmin}> Edit My Information </button>
      </div>
    </div>
  )
}

export default AdminShow;
