import React from 'react';

const AdminShow = (props) => {
  return (
    <div className="list-container">
      <h2> Admin Settings </h2>
      <div className="list-holder">
        <label> Name: </label>
        <input placeholder="name"/><br />
        <label> Email: </label>
        <input placeholder="email" /> <br />
        <button> Edit My Information </button>
      </div>
    </div>
  )
}

export default AdminShow;
