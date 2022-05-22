import React, { useState } from 'react';
import noteService from '../services/notes';
import loginService from '../services/login';

const LoginForm = ({ handleException, handleUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target }) => {
    if (target.name === 'username') {
      setUsername(target.value);
    } else if (target.name === 'password') {
      setPassword(target.value);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username,
        password,
      });
      handleUser(user);
      noteService.setToken(user.token);
      window.localStorage.setItem('loggedNoteappUser', JSON.stringify(user));
      setUsername('');
      setPassword('');
    } catch (exception) {
      handleException('wrong credentials');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        username
        <input
          name="username"
          type="text"
          value={username}
          onChange={handleChange}
        />
      </div>
      <div>
        password
        <input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">login</button>
    </form>
  );
};

export default LoginForm;
