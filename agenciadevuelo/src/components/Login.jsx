import React, { useState } from 'react';
import './styles.css'; // Ruta al archivo CSS
function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Realiza la validación de los datos de inicio de sesión aquí
    // Puedes comparar los valores ingresados con registros en la base de datos o utilizar cualquier otro mecanismo de autenticación

    // Ejemplo de validación básica
    if (username === 'usuario' && password === 'contraseña') {
      onLogin(); // Llama a la función onLogin pasada como prop para indicar que el inicio de sesión fue exitoso
    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre de usuario:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Contraseña:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button className="button" type="submit">Iniciar sesión</button>

      
      <div className="avion-image"></div>
    </form>
    
    
  );
}

export default Login;
