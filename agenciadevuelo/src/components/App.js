import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BusquedaVuelos from './components/BusquedaVuelos';
import ResultadoBusqueda from './components/ResultadoBusqueda';


function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Aerolínea NORTE - SUR</h1>
        <Switch>
          <Route exact path="/" component={BusquedaVuelos} />
          <Route path="/resultados" component={ResultadoBusqueda} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

