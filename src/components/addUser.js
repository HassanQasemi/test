import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import UserContext from '../context/userContext'
import Input from './input';
import InputImage from './inputImage'
// import Joi, { validate } from "joi-browser";


function AddUser() {
    const [data, setData] = useState({ first_name: "", last_name: "", email: "" })
    const [error, setErrror] = useState(null)
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.first_name.length || !data.last_name.length || !data.email.length) {
            return setErrror('خواهشا تمامی موارد را تکمیل نمایید !!!!')
        } else {
            history.push("/user");
        }
    };

    return (
        <UserContext.Provider value={[data]}>
            <React.Fragment>
                <h1>Add User </h1>
                <form onSubmit={handleSubmit}>
                    <Input
                        autoFocus
                        name="first_name"
                        label="First Name"
                        value={data.first_name}
                        onChange={(e) => setData({ ...data, first_name: e?.currentTarget?.value })}
                    />
                    <Input
                        name="last_name"
                        label="Last Name"
                        value={data.last_name}
                        onChange={(e) => setData({ ...data, last_name: e?.currentTarget?.value })}
                    />
                    <Input
                        name="email"
                        label="email"
                        value={data.email}
                        onChange={(e) => setData({ ...data, email: e?.currentTarget?.value })}
                    />
                    {
                        error?.length && <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    }
                    <InputImage />
                    <button className="btn btn-primary" >Send</button>
                </form>
            </React.Fragment>

        </UserContext.Provider>
    )
}

export default AddUser