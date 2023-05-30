import React, { useState } from 'react';
import './styles.css'; // Ruta al archivo CSS

function BusquedaVuelos({ onBuscar }) {
  const [aeropuertoSalida, setAeropuertoSalida] = useState('');
  const [aeropuertoLlegada, setAeropuertoLlegada] = useState('');
  const [fechaPartida, setFechaPartida] = useState('');

  const buscarVuelos = async (event) => {
    event.preventDefault();

    try {
      const url = `http://localhost:8080/api/v1/catalogs/search?departureAirportCode=${aeropuertoSalida}&arrivalAirportCode=${aeropuertoLlegada}&departureDate=${fechaPartida}`;
      const response = await fetch(url);
      const data = await response.json();

      onBuscar(data); // Llamar a la función onBuscar pasando los resultados de búsqueda
    } catch (error) {
      console.error('Error al obtener los resultados de búsqueda:', error);
    }
  };

  return (
    
    <div className="container">
    
      <h2 className="titulo">Búsqueda de Vuelos</h2>
      
      <form className="form" onSubmit={buscarVuelos}>
        <label className="label" htmlFor="aeropuertoSalida">
          Aeropuerto de salida:
        </label>

        <input
          className="input"
          type="text"
          id="aeropuertoSalida"
          value={aeropuertoSalida}
          onChange={(event) => setAeropuertoSalida(event.target.value)}
        />

        <label className="label" htmlFor="aeropuertoLlegada">
          Aeropuerto de llegada:
        </label>
        <input
          className="input"
          type="text"
          id="aeropuertoLlegada"
          value={aeropuertoLlegada}
          onChange={(event) => setAeropuertoLlegada(event.target.value)}
        />

        <label className="label" htmlFor="fechaPartida">
          Fecha de partida:
        </label>
        <input
          className="input"
          type="date"
          id="fechaPartida"
          value={fechaPartida}
          onChange={(event) => {
            const selectedDate = event.target.value;
            setFechaPartida(selectedDate);
          }}
        />

        <button className="button" type="submit">
          Buscar
        </button>
      </form>
     
    </div>
  );
}

export default BusquedaVuelos;
