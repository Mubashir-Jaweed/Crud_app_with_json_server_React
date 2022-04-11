import React,{ useState } from 'react';
import { addUser } from '../service/Api';
import { useNavigate } from 'react-router-dom';


const initialValue = {
  name :"",
  username:'',
  email:'',
  phone:''
}

const AddUser = () => {

  const navigate = useNavigate()

  const [user ,setUser] = useState(initialValue)

  const onValueChange = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
  }

  const addUserDetails = async ()=>{
    await addUser(user)
    navigate('/')
  }
  return (
  <div>
    <h1 className='add-h'>Add User</h1>
     <form className='foam'>
      <input type='text' onChange={(e)=>onValueChange(e)} name='name' placeholder='Name'/>
      <input type='text' onChange={(e)=>onValueChange(e)} name='username' placeholder='User Name'/>
      <input type='email' onChange={(e)=>onValueChange(e)} name='email' placeholder='Email'/>
      <input type='number' onChange={(e)=>onValueChange(e)} name='phone' placeholder='Phone'/>
      <input className='but' type='button' onClick={()=>addUserDetails()} value={'Submit'}/>
     </form>
     <div className='container'>
       <div className='water'>

       </div>

     </div>
  </div>
    );
};

export default AddUser;
