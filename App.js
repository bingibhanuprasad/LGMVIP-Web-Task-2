 
import React, { useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <div className="App">
     
      <header>
        <nav>
          <div className="brand">MyBrand</div>
          <button onClick={getUsers} disabled={loading}>
            Get Users
          </button>
        </nav>
      </header>
      <main>
        
        {loading && <div className="loader">Loading...</div>}
        {users.length > 0 && (
          
          <table className="user-table">
            
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Avatar</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{`${user.first_name} ${user.last_name}`}</td>
                  <td>{user.email}</td>
                  <td>
                    <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="avatar" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>
    </div>
  );
}

export default App;
