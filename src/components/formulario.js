import axios from 'axios';
import { useState } from 'react';
import React from 'react';
import Swal from 'sweetalert2';

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
        const mensaje=response.data.message;
        console.log('Respuesta del servidor:', mensaje);
        /*
        Swal.fire({
            title: 'Éxito',
            text: mensaje,
            icon: 'success'
            
        });*/
        Swal.fire({
            title: "Èxito",
            text: mensaje,
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "ok"
          }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload();
            }
          });
      } catch (e) {
        console.log('error al enviar datos `${e}`');
      }
    }

    return (
        <div className="container-fluid mt-5 w-50 p-3 ">   
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
                            className='form-control w-75'
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
                            className='form-control w-75' 
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
