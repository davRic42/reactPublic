import React from 'react';
import Swal from "sweetalert2";
import axios from "axios";

export default function ButtonUp({ userId }) {
    const handleUpdate = async () => {
        try {
            const { value: formValues } = await Swal.fire({
                title: 'Actualizar usuario',
                html: `
                    <input id="swal-input1" class="swal2-input" type="text" placeholder="Nuevo nombre">
                    <input id="swal-input2" class="swal2-input" type="number" placeholder="Nuevo número">
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
                    userNumber: newNumber
                };

                const responseUp = await axios.patch(`/updateUser/${userId}`, formData);
                console.log(responseUp.data);

                // Aquí puedes realizar acciones adicionales después de la actualización
                console.log(`Usuario con el id '${userId}' actualizado: Nuevo nombre: ${newName}, Nuevo número: ${newNumber}`);
            }
        } catch (error) {
            console.error('Error al actualizar el usuario:', error);
        }
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
