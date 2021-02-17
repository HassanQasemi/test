import React from 'react';
import Search from './search/Search';
import SortButton from './sortButton';
import { Link } from 'react-router-dom';


function TableHeader() {
    return (
        <thead>
            <tr>
                <th>User Image</th>
                <th>
                    First Name
                    <SortButton typeSort="first_name" />
                </th>
                <th>
                    Last Name
                    <SortButton typeSort="last_name" />
                </th>
                <th>Email</th>
                <th><Link to="/addUser" className="btn btn-success">Add User</Link></th>                    
                <th><Search  /></th>
            </tr>
         </thead>

        
    )
}

export default TableHeader
