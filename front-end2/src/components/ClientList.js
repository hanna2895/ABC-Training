import React from 'react';

const ClientList = ({ clients, getGroups }) => {

  const handleClick = (e) => {
    const id = e.currentTarget.id
    getGroups(id)
    // maybe make that shit change color when it's clicked
  }

  const ListOfClients = clients.map((client, i) => {
    return (
      <li key={client.id} id={client.id} onClick={handleClick}> {client.name} </li>
    )
  })

  return (
    <div className="list-container">
      <h2> Clients </h2>
      <div className="list-holder">
        <ul>
          {ListOfClients}
        </ul>
      </div>
    </div>
  )
}

export default ClientList;
