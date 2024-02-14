import axios from "axios";
import Swal from "sweetalert2";
import React from "react";
import { useState,useEffect } from "react";

export function CardConsult({ datos }) {
    if (!datos || !datos.message) {
        return null; // O cualquier otro valor por defecto
    }
    const userData =datos.data;
    console.log(datos.data);
    if(userData.userState){
    return (
        
        <>
            <p><p>ID:</p>{userData.userId}<br/>
            <p>Nombre:</p>{userData.userName}<br/>
            <p>Celular:</p>{userData.userPhone}
            </p>

        </>
        
    );}else{
        return(
            <>
            <p>usuario no encontrado</p>
            </>
        );
    }
}

export default function Consult(){
    const [userId,setUserId]=useState('');
    const [Data,setData]=useState([]);

    const onChangeId=(event)=>{
        setUserId(event.target.value);
    }

    const handleConsult= async (event)=>{
        event.preventDefault();
        try {
            const response=await axios.get(`/userConsult/${userId}`);
            setData(response.data);
            console.log(Data);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div className="card text-white bg-prymary mb-3 container-fluid mt-5 w-50 p-3" >

            <div class="card-header">busqueda</div>
            <form class="form-group p-3" onSubmit={handleConsult}> 
                <label> ingrese el id para hacer la busqueda</label>
                <input 
                onChange={onChangeId} 
                value={userId} 
                type="number" 
                class="form-control p-3" 
                placeholder="id del user"/>
                <button class="btn btn-primary m-3">buscar</button>
            </form>
            {Data && <CardConsult datos={Data} />}
        </div>
    );
}