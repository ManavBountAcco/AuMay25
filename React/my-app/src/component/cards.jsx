// src/components/Cards.jsx
import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../service/service';

import './cards.css';

function Cards() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
      setLoading(false);
    };
    getUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;

  return (
    <div className="cards-container">
      {users.map(user => (
        <div key={user.id} className="card">
          <h3>{user.name}</h3>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Company:</b> {user.company.name}</p>
          <p><b>Website:</b> <a href={`http://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
