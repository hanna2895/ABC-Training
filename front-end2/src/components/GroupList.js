import React from 'react';

const GroupList = ({ groups }) => {
  const ListOfGroups = groups.map((group, i) => {
    return (
      <li key={group.id}> {group.name} </li>
    )
  })

  return (
    <div className="list-container">
      <h2> Groups </h2>
      <div className="list-holder">
        <ul>
          {ListOfGroups}
        </ul>
      </div>
    </div>
  )
}

export default GroupList;
