export default function ButtonDel({onClick}){
    return(
        <button 
        type="button"
         class="btn btn-outline-danger"
         onClick={onClick}
         >Delete</button>
    );
}