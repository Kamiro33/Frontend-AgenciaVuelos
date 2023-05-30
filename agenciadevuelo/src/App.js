import React, { useState } from 'react';
import './App.css';
import BusquedaVuelos from './components/BusquedaVuelos';
import ResultadoBusqueda from './components/ResultadoBusqueda';
import Login from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [resultados, setResultados] = useState([]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const buscarVuelos = async (data) => {
    console.log('Datos de búsqueda:', data); // Agrega esta línea para mostrar los datos en la consola
    setResultados(data);
  };

  return (
    
    <div className="App">
        <div className="avion-image"></div>
      <div className="container">
        <div className="labell">
          <h1>Aerolínea NORTE - SUR</h1>
        </div>
      </div>

      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <BusquedaVuelos onBuscar={buscarVuelos} />
          <ResultadoBusqueda resultados={resultados} />
        </>
      )}
    </div>
  );
}

export default App;
