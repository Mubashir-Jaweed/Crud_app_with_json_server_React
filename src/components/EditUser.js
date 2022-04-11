import React,{ useState,useEffect } from 'react';
import { editUser, getUsers } from '../service/Api';
import { useNavigate,useParams } from 'react-router-dom';


const initialValue = {
  name :"",
  username:'',
  email:'',
  phone:''
}

const EditUser = () => {


  const [user ,setUser] = useState(initialValue)
  const { name ,username ,email ,phone} = user
  const navigate = useNavigate()
  const {id} = useParams()

  useEffect(()=>{
      loadUserData()
  },[])

  const onValueChange = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
  }

  const loadUserData = async () => {
     const responce = await getUsers(id)
     setUser(responce.data)
  }

  const editUserDetails = async ()=>{
    await editUser(id, user)
    navigate('/')
  }
  return (
  <div>
    <h1 className='add-h'>Edit User</h1>
     <form className='foam'>
       <br/><input type='text' onChange={(e)=>onValueChange(e)} value={name} name='name' placeholder='Name'/>
       <br/><input type='text' onChange={(e)=>onValueChange(e)} value={username} name='username' placeholder='User Name'/>
       <br/><input type='email' onChange={(e)=>onValueChange(e)} value={email} name='email' placeholder='Email'/>
       <br/><input type='number' onChange={(e)=>onValueChange(e)} value={phone} name='phone' placeholder='Phone'/>
       <br/><input className='but' type='button' onClick={()=>editUserDetails()} value={'Edit User'}/>
     </form>
  </div>
    );
};

export default EditUser;
