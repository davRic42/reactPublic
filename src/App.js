import React, { useState } from 'react';
import axios from 'axios';
import Formulario from './components/formulario';
import Table from './components/tabla';
import './App.css';

export default function App() {

  axios.defaults.baseURL = "http://localhost:8080";
  const [formUser,setFormUser]=useState([]);
  const [msg,setMsg]=useState('');

  const [rows, setRows] = useState([]);
  const [id,setId]=useState(1);

  //tomar datos del formulario y mandarlos a back
  const handleFormSubmit = async (event) => {
    setId(id+1);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userName=formData.get("userName");
    const userCel=formData.get("phone");
    const stateRow=true;
    const userId=id;
    const newRow={userName,userCel,stateRow,userId};
    
    setFormUser([...formUser,{
      userName:userName,
      userPhone:userCel
    }]);
    try {
      const responseUser=await axios.post(`/insertUser`,formUser);

      setMsg(responseUser.data.message);
    } catch (e) {
      console.log('error al enviar datos `${e}`');
    }
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
