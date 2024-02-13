import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ButtonDel from "./btndel";
import ButtonUp from "./btnupd";
import axios from "axios";

export function Rows() {
    const [Data, setData] = useState([]);
    const [shouldUpdate, setShouldUpdate] = useState(false);
    const [loading, setLoading] = useState(false);
  
    const fetchData = async () => {
        try {
            const response = await axios.get("/user");
            setData(response.data[0]);
            setLoading(false);
            
        } catch (error) {
            console.error("Error al obtener los datos:", error);
            setLoading(false);
            
        }
    };

    useEffect(() => {

        fetchData();
        setShouldUpdate(false);

    }, [shouldUpdate]);

    if (loading) {
        return <div>Cargando...</div>;
      }
    const filteredUsers = Data.filter((user) => user.userState === 1);
    return (
        <>
            {filteredUsers.map((datos) => (
                <tr>
                    <td>{datos.userId}</td>
                    <td>{datos.userName}</td>
                    <td>{datos.userPhone}</td>
                    <td>
                        <ButtonDel userId={datos.userId} />
                        <br />
                        <br />
                        <ButtonUp userId={datos.userId} userName={datos.userName} userPhone={datos.userPhone}/>
                    </td>
                </tr>
            ))}
        </>
    );
}

export default function Table() {
    return (
        <div className="container-fluid p-4  mt-8 w-75 p-3">
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
