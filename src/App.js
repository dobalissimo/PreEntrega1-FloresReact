import React from 'react';
import './App.css';
import NavbarComponent from '../src/components/navbar/navbar';
import ItemListContainer from '../src/components/itemlistcontainer/itemlistcontainer';
function App() {
  return (
    <div className="App">
      <NavbarComponent /> 
      <ItemListContainer greeting="Hola, ¡te damos la bienvenida a nuestra tienda!" /> 
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
