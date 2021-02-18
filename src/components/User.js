import React, {useState,useEffect} from 'react'
import axios from 'axios';
import Table from './table/table';
import UserContext from '../context/userContext';
import _ from 'lodash';

const usersApi= "https://reqres.in/api/users?page=1";
function User() {
    const [usersFromApi , setUsersFromApi] = useState([]);
    const [sortColumn , setSortColumn] = useState({column: "title" , order: "asc"})
    const [searchTerm ,setSearchTerm] = useState("");
    const [users , setUsers] = useState([]);
    
    useEffect(()=>{
        async function getUsers(){
            const result = await axios.get(usersApi);
            setUsersFromApi(result.data.data)
            setUsers(result.data.data)
        }
        getUsers()
    },[]);

    useEffect(()=>{
        let results = usersFromApi.filter(user => 
        user.first_name.toString().toLowerCase().includes(searchTerm));
        setUsers(results);
    },[searchTerm]);
      
    const handleSearch = query => {
        
        setSearchTerm(query)
        
    };
    
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
    
    return (
        <UserContext.Provider 
            value={
                {
                    users,
                    handleDelete,
                    handleEdit,
                    handleSearch,
                    searchTerm,
                    handleSort,
                    
                }
            }
        >
            <Table />
        </UserContext.Provider>
    )
}

export default User;