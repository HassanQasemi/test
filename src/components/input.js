import React , {useEffect ,useState} from 'react';



const Input = ({name , label , id ,error,...rest}) => {
    
    return (
        
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input {...rest} id={id} type="text" className="form-control"></input>
            {error && <div className="alert alert-danger">{error}</div>}
        </div> 
            
     );
}
 
export default Input;