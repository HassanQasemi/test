import React from 'react';
import UserContext from '../../context/userContext'
import {ToastContainer , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TableBody() {
    const notify = () => toast("user has been deleted");
    return (
        <UserContext.Consumer>
            {UserContext =>
                <tbody>
                    {UserContext.users.map(user =>
                        <tr key={user.id}>
                            <td><img src={user.avatar} /></td>
                            <td >{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td><button onClick={() => UserContext.handleEdit(user)} className="btn btn-primary btn-lg">Edit</button></td>
                            <td onClick={notify}>
                                <button onClick={() => UserContext.handleDelete(user)} className="btn btn-danger btn-lg">
                                    Delete
                                </button>
                                <ToastContainer />
                            </td>
                            
                        </tr>
                        
                        )}
                </tbody>}

        </UserContext.Consumer>
           
    )
}

export default TableBody;
