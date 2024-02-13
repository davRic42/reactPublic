import React, { useEffect, useState } from "react";
import ButtonDel from "./btndel";
import ButtonUp from "./btnupd";
import axios from "axios";

export function Rows() {
    const [data, setData] = useState([]);
    const [shouldUpdate, setShouldUpdate] = useState(false);
  
    const fetchData = async () => {
        try {
            const response = await axios.get("/user");

            setData(response.data);

        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    };

    useEffect(() => {

        fetchData();
        setShouldUpdate(false);



    }, [shouldUpdate]);
    console.log(data);
    return (
        <>
        
            {data.map((datos) => 
                <tr >
                    <td>{datos.userId}</td>
                    <td>{datos.userName}</td>
                    <td>{datos.userPhone}</td>
                    <td>
                        <ButtonDel userId={datos.userId} />
                        <br />
                        <br />
                        <ButtonUp userId={datos} />
                    </td>
                </tr>
            )}
        </>
    );
}

export default function Table() {
    // Filtrar los usuarios con stateRow igual a 1
    //const filteredUsers = rows.filter((user) => user.stateRow === true);

    return (
        <div className="container-fluid p-4  mt-8 w-70">
            <table className="table table-hover">
                <thead className="table-info">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">nombre</th>
                        <th scope="col">telefono celular</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="table-secondary">
                    <Rows
                    />
                </tbody>
            </table>
        </div>
    );
}
