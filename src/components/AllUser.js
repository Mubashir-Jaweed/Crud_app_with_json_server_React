import React, { useState,useEffect } from 'react';
import { getUsers,deleteUser } from '../service/Api';
import { Link } from 'react-router-dom'
const AllUser = () => {

  const [users, setUsers] = useState([])
  const [query, setQuery] = useState('')

  useEffect(()=>{
    getAllUsers()
  },[])
  const getAllUsers = async () => {
     const responce = await getUsers()
     setUsers(responce.data)
  }
  const deleteUserData=async(id)=>{
    await deleteUser(id)
    getAllUsers()
  }
  return (
  <div>
    <input className='search' type={'search'} placeholder='Search' onChange={(e)=>setQuery(e.target.value)}/>
     <table className='table'>
       <tr className='table-h'>
         <th>Id</th>
         <th>Name</th>
         <th>User Name</th>
         <th>Email</th>
         <th>Phone</th>
         <th>Actions</th>
       </tr>
       {
           users.filter(value=>value.name.toLowerCase().includes(query)).map((user,_id) =>(
             <tr>
               <td>{_id + 1}</td>
               <td>{user.name}</td>
               <td>{user.username}</td>
               <td>{user.email}</td>
               <td>{user.phone}</td>
               <td>
                 <Link className='act e'  to={`/edit/${user.id}`}>Edit</Link>
                 <button className='act d' onClick={()=> deleteUserData(user.id)}>Delete</button>
                </td>
             </tr>
           ))
         }
     </table>
  </div>
  );
};

export default AllUser;
