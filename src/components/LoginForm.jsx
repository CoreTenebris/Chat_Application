import { useState } from 'react';
import axios from 'axios';

const projectID = projectID;

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': 
    "projectID", 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Invalid User or Password');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Core's Chat</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Enter</span>
            </button>
          </div>
        </form>
        <h1 className="error">{error}</h1>
      </div>
    </div>

  );
};

export default Modal;