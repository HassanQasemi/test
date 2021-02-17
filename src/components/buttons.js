const Buttons = (props) => {
    const className = (props.name === "Edit") ? "btn btn-primary btn-lg" : "btn btn-danger btn-lg";
    return ( 
        <button onClick={() => UserContext.handleEdit(user)} className="btn btn-primary btn-lg">{props.nameButton}</button>
     );
}
 
export default Buttons;