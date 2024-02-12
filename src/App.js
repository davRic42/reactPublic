import React, { useState } from 'react';
import Formulario from './components/formulario';
import Table from './components/tabla';
import './App.css';

export default function App() {
  const [rows, setRows] = useState([]);
  const [id,setId]=useState(1);
  const handleFormSubmit = (event) => {
    setId(id+1);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userName=formData.get("userName");
    const userCel=formData.get("phone");
    const stateRow=true;
    const userId=id;
    const newRow={userName,userCel,stateRow,userId};

    //setFormData({
      //name: formDataFromEvent.get('userName'),
     // phone: formDataFromEvent.get('phone')
    //});
    setRows([...rows, newRow]);
    console.log(stateRow);
  };

  return (
    <div>
      <header className="App-header">
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
          <h1>Crud usuarios</h1>
        </nav>
      </header>

      <body>
        <Formulario onSubmit={handleFormSubmit} />
        <Table rows={rows} />
      </body>
    </div>
  );
}
