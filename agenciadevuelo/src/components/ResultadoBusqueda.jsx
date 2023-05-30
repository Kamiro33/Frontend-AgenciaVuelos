import React from 'react';

function ResultadoBusqueda({ resultados }) {
  return (
    <div className="container">
      <h2>Resultados de búsqueda</h2>
      {resultados.length > 0 ? (
        resultados.map((vuelo) => (
          <div
           
          >
            <p>Aeropuerto de salida: {vuelo.departureAirportName}</p>
            <p>Aeropuerto de llegada: {vuelo.arrivalAirportName}</p>
            <p>Fecha de partida: {vuelo.departureDate}</p>
            <p>Fecha de llegada: {vuelo.arrivalDate}</p>
            <p>Duración del vuelo: {vuelo.flightDuration}</p>
            <p>Número de vuelo: {vuelo.numberFlight}</p>
            <p>Capacidad de asientos: {vuelo.seatCapacity}</p>
            <p>Precio del ticket: {vuelo.ticketPrice} {vuelo.ticketCurrency}</p>
          </div>
        ))
      ) : (
        <p>No se encontraron resultados</p>
      )}
    </div>
  );
}

export default ResultadoBusqueda;
