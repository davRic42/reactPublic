import axios from 'axios';
import { useState } from 'react';
import React from 'react';

export default function Formulario() {
    axios.defaults.baseURL = "http://localhost:8080";
    const [formUser,setFormUser]=useState({
      userName:'',
      userPhone:'',
      userState:1
    });
  
  
    const handleChange=(event)=>{
      setFormUser({
        ...formUser,[event.target.name]:event.target.value
      });
    }
    //tomar datos del formulario y mandarlos a back
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        const response=await axios.post(`/insertUser`,formUser);
        console.log('Respuesta del servidor:', response.data);
      } catch (e) {
        console.log('error al enviar datos `${e}`');
      }
    }

    return (
        <div className="container-fluid mt-5 ">   
            <section>
                <h2>Formulario</h2>
                <form className="card border-primary mb-3 w-55" onSubmit={handleFormSubmit}>
                    <div className='p-5 '>
                        <div className='form-group '>
                            <label className="col-sm-2 col-form-label" htmlFor='inpNombre'>Nombre:</label>
                            <input 
                            required
                            id='inpNombre' 
                            value={formUser.userName}
                            onChange={handleChange} 
                            type='text'
                            name='userName'
                            className='form-control w-50'
                            placeholder='Ingrese su nombre' />
                        </div>

                        <div className='form-group'>
                            <label className="col-sm-2 col-form-label" htmlFor="inpTel">Numero de telefono:</label>
                            <input 
                            required
                            id="inpTel" 
                            name="userPhone"
                            onChange={handleChange}  
                            type='number' 
                            value={formUser.userPhone}
                            className='form-control w-50' 
                            placeholder='Ingrese su numero de telefono' />
                        </div>

                        <div className='form-group'>
                            <button type="submit" className="btn btn-info">Subir</button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}
