import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';  // Importamos el archivo de estilos

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');  // Resetear mensaje de error

    try {
      const response = await axios.post('http://localhost:8000/api/login/', { username, password });
      console.log(response.data);
      // Redirigir al reporte si el login es exitoso
    } catch (error) {
      setErrorMessage('Usuario o contraseña incorrectos.');
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Iniciar sesión</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="input-group">
          <label htmlFor="username">Usuario:</label>
          <input 
            type="text" 
            id="username"
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Ingresa tu usuario" 
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña:</label>
          <input 
            type="password" 
            id="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Ingresa tu contraseña" 
          />
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button type="submit" className="login-btn">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
