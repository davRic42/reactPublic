import Swal from "sweetalert2";
import axios from "axios";

export default function ButtonDel({userId}){
    const handleDelete = ()=>{
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
                deleteUser()
                //onDelete(userId);
                // Aquí puedes realizar la acción de eliminación del usuario
               
            }
        });
    };

    const deleteUser=async()=>{
        try{
            const response=await axios.patch(`/deleteUser/${userId}`, );
            console.log(response);
        } catch(e){
            console.log(`error en la peticion '${e}'`);
        }
    };

    return(
        <button 
        type="button"
         class="btn btn-outline-danger"
         onClick={handleDelete}
         >Delete</button>
    );
}