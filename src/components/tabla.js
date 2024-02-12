import React, { useState } from 'react';
import ButtonDel from './btndel';
import ButtonUp from './btnupd';
import Swal from 'sweetalert2';

export function Rows({ userId, userName, userCel, onDelete, onUpdate }) {
    return (
        <tr>
            <td>{userId}</td>
            <td>{userName}</td>
            <td>{userCel}</td>
            <td>
                <ButtonDel onClick={() => onDelete(userId)} />
                <br />
                <br />
                <ButtonUp onClick={() => onUpdate(userId)} />
            </td>
        </tr>
    );
}

export default function Table({ rows }) {
    
    // Filtrar los usuarios con stateRow igual a 1
    const filteredUsers = rows.filter(user => user.stateRow === true);

    const handleDelete = (userId) => {
        Swal.fire({
            title: 'Eliminar usuario',
            text: '¿Estás seguro de que deseas eliminar este usuario?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminarlo'
        }).then((result) => {
            if (result.isConfirmed) {

                // Aquí puedes realizar la acción de eliminación del usuario
                console.log(`Usuario con el id '${userId}' eliminado ${useState}`);
            }
        });
    };

    const handleUpdate = (userId) => {
        Swal.fire({
            title: 'Actualizar usuario',
            html: `
            <input id="swal-input1" class="swal2-input" type="text" placeholder="Nuevo nombre">
            <input id="swal-input2" class="swal2-input" type="number" placeholder="Nuevo número">
            `,
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById("swal-input1").value,
                    document.getElementById("swal-input2").value
                ];
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const [newName, newNumber] = result.value;
                // Aquí puedes realizar la acción de actualización del usuario con los nuevos datos
                console.log(`Usuario con el id '${userId}' actualizado: Nuevo nombre: ${newName}, Nuevo número: ${newNumber}`);
            }
        });
    };

    return (
        <div className="container-fluid p-4  mt-8 w-70">
            <table className="table table-hover">
                <thead className='table-info'>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">nombre</th>
                        <th scope="col">telefono celular</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='table-secondary'>
                    {filteredUsers.map((user, index) => (
                        <Rows
                            key={index}
                            userId={user.userId}
                            userName={user.userName}
                            userCel={user.userCel}
                            onDelete={handleDelete}
                            onUpdate={handleUpdate}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
