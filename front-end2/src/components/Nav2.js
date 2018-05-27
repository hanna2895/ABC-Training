import React from 'react';

const Nav2 = ({clickUsers, clickGroups, clickSettings, clickCourseMaterials}) => {
  return (
    <div className="button-group">
      <button onClick={clickGroups}>Clients and Groups</button>
      <button onClick={clickUsers}>Users</button>
      <button onClick={clickCourseMaterials}>Course Materials</button>
      <button onClick={clickSettings}>Settings</button>
    </div>
  )
}

export default Nav2;
