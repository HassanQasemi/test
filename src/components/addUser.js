import React, { useState } from 'react';
import UserContext from '../context/userContext'
import Input from './input';
import InputImage from './inputImage'
// import Joi, { validate } from "joi-browser";


function AddUser() {
    const [data, setData] = useState({ first_name: "", last_name: "", email: "" })
    const handleChange = e => {

        const newFirstName = { ...data }
        newFirstName[e.currentTarget.name] = e.currentTarget.value;
        setData({ data: newFirstName })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')
    };

    return (
        <UserContext.Consumer>
            {UserContext =>
                <React.Fragment>
                    <h1>Add User </h1>
                    <form onSubmit={handleSubmit}>
                        <Input
                            autoFocus
                            name="first_name"
                            label="First Name"
                            value={data.first_name}
                            onChange={(e) => handleChange(e)}
                        />
                        <Input
                            name="last_name"
                            label="Last Name"
                            value={data.last_name}
                            onChange={(e) => handleChange(e)}
                        />
                        <Input
                            name="email"
                            label="email"
                            value={data.email}
                            onChange={(e) => handleChange(e)}
                        />
                        <InputImage />
                        <button className="btn btn-primary" >Send</button>
                    </form>
                </React.Fragment>}

        </UserContext.Consumer>
    )
}

export default AddUser
