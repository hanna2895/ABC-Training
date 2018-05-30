import React from 'react';

const GroupInfo = ({ groupName, clientName}) => {
  return (
    <div className="list-container">
      <h2> Group Details </h2>
      <div className="list-holder">
        <label> Group Name: </label> 
        {groupName} <br />
        <label> Belongs to: </label>
        {clientName} <br />
        <button> Edit This Group </button>
      </div>
    </div>
    )
}

export default GroupInfo;
