import React from 'react';
import Swal from "sweetalert2";
import axios from "axios";

export default function ButtonUp({ userId, userName,userPhone }) {
    const handleUpdate = async () => {
        console.log(userId);

        const { value: formValues } = await Swal.fire({
            title: 'Actualizar usuario',
            showCancelButton: true,
            cancelButtonColor: "#d33",
            html: `
                    <input id="swal-input1" class="swal2-input" type="text" placeholder="Nuevo nombre" value="${userName}">
                    <input id="swal-input2" class="swal2-input" type="number" placeholder="Nuevo número" value="${userPhone}">
                `,
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('swal-input1').value,
                    document.getElementById('swal-input2').value
                ];
            }
        });

        if (formValues) {
            const [newName, newNumber] = formValues;
            const formData = {
                userName: newName,
                userPhone: newNumber
            };
            
            try {
                console.log(formData);
                const responseUp = await axios.put(`/updateUser/${userId}`, formData);
                console.log(responseUp.data);
            } catch (error) {
                console.log(error);
            }
        }
       
        window.location.reload();
        
    };

    return (
        <button
            type="button"
            className="btn btn-outline-success"
            onClick={handleUpdate}
        >
            Update
        </button>
    );
}
