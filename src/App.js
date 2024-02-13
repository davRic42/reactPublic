import React, { useState } from 'react';
import axios from 'axios';
import Formulario from './components/formulario';
import Table from './components/tabla';
import './App.css';

export default function App() {



  return (
    <div>
      <header className="App-header">
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
          <h1>Crud usuarios</h1>
        </nav>
      </header>

      <body>
        <Formulario />
        <Table />
      </body>
    </div>
  );
}
