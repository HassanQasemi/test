import React, {useState,useEffect} from 'react'
import axios from 'axios';
import Table from './table/table';
import UserContext from '../context/userContext';
import _ from 'lodash';


const usersApi= "https://reqres.in/api/users?page=1";
function User() {
    const [users , setUsers] = useState([]);
    const [searchQuery,setSearchQuery] = useState("");
    const [sortColumn , setSortColumn] = useState({column: "title" , order: "asc"})
    
    useEffect(()=>{
        async function getUsers(){
            const result = await axios.get(usersApi);
            setUsers(result.data.data)}
        getUsers()
    },[]);
    
    const handleDelete = async userDeleted =>{
        const usersOrginal = [...users]
        setUsers(users.filter(user => user.id !== userDeleted.id))
        try{
            await axios.delete(usersApi + "/" + userDeleted.id);
        }catch(error){
            setUsers(usersOrginal)
        }   
    }
    const handleEdit = (userEdit) => {
        console.log(userEdit)
    }
    const handleSort = column => { 
        if(sortColumn.column === column){
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        }else{
            sortColumn.column = column;
            sortColumn.order = 'asc';
        }
        setSortColumn({column, order:"asc"})
        setUsers(_.orderBy(users , [sortColumn.column],[sortColumn.order]),[])
    }
    const handleSearch = query => {
        console.log(query)
        setSearchQuery({ searchQuery: query })
    };
    
    if (searchQuery)
        setUsers(users.filter(user =>
        user.first_name.toLowerCase().startsWith(searchQuery.toLowerCase()))
        
    );
    
    
    
    return (
        <UserContext.Provider 
            value={
                {
                    users,
                    handleDelete,
                    handleEdit,
                    handleSearch,
                    searchQuery,
                    handleEdit,
                    handleSort
                }
            }
        >
            <Table />
        </UserContext.Provider>
    )
}

export default User;
