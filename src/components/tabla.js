import React, { useState } from 'react';
import ButtonDel from './btndel';
import ButtonUp from './btnupd';

export function Rows({ userId, userName, userCel, onUpdate }) {
    return (
        <tr>
            <td>{userId}</td>
            <td>{userName}</td>
            <td>{userCel}</td>
            <td>
                <ButtonDel userId={userId}/>
                <br />
                <br />
                <ButtonUp  userId={userId} />
            </td>
        </tr>
    );
}

export default function Table({ rows }) {
    
    // Filtrar los usuarios con stateRow igual a 1
    const filteredUsers = rows.filter(user => user.stateRow === true);


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
                            //onDelete={handleDelete}
                            //onUpdate={handleUpdate}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
