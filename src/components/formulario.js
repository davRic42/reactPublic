import axios from 'axios';

import React from 'react';

export default function Formulario({ onSubmit }) {
    
    return (
        <div className="container-fluid mt-5 ">   
            <section>
                <h2>Formulario</h2>
                <form className="card border-primary mb-3 w-55" onSubmit={onSubmit}>
                    <div className='p-5 '>
                        <div className='form-group '>
                            <label className="col-sm-2 col-form-label" htmlFor='inpNombre'>Nombre:</label>
                            <input 
                            required
                            id='inpNombre' 
                            name="userName" 
                            type='text'
                            className='form-control w-50'
                            placeholder='Ingrese su nombre' />
                        </div>

                        <div className='form-group'>
                            <label className="col-sm-2 col-form-label" htmlFor="inpTel">Numero de telefono:</label>
                            <input 
                            required
                            id="inpTel" 
                            name="phone" 
                            type='number' 
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