import axios from 'axios';
import React,{useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';


const Update = () => {
       let navigate=useNavigate()
       let {id}=useParams()
       
       let [state,setState]=useState([])
       let [values,setValues]=useState({
        username: "",
        password:"",
        email:"",
        phone:""
       })
       useEffect(()=>{
       axios.get('http://localhost:4000/users/' +id)
       .then(res=> setState(res.data))
       .catch (err=> console.log(err))})


       let handleUpdate = (e)=>{
            e.preventDefault();
           axios.put(`http://localhost:4000/users/${id}`, values).then(res=> console.log(res)).catch(err=> console.log(err))
           alert("Data Updated successfully")
           navigate("/")
          
       }
  return (
   
    
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center '>
     <div className="border border-success p-5 mb-5">
      <h1 className='d-flex justify-content-center align-items-center'>Update user</h1>
      <form action="" className="row g-3 needs-validation" onSubmit={handleUpdate} >
       <div className='mb-3'>
              <label htmlFor="name"  className="form-check-label">UserName :</label>
              <input type="text" defaultValue={state.username} className="form-control" name='name' id='name' placeholder='Enter username' 
              onChange={e=>setValues({...values, username:e.target.value})} />
       </div>
       <div className='mb-3'>
              <label htmlFor="password" className="form-check-label">Password :</label>
              <input type="text" defaultValue={state.password} className="form-control"  name='password' id='password' placeholder='Enter Password'
              onChange={e=>{setValues({...values, password:e.target.value})}} />
       </div>

      <div className='mb-3 '>
             <label htmlFor="phone" className="form-check-label">Phone :</label>
             <input type="number" defaultValue={state.phone}  className="form-control"  name='phone' id='phone' placeholder='Enter Phone Number'
              onChange={e=>{setValues({...values, phone:e.target.value})}}/>
       </div>
       <div className='mb-3'>
             <label htmlFor="email" className="form-check-label">Email ID :</label>
             <input type="text" defaultValue={state.email} className="form-control"  name='email' id='email' placeholder='Enter Email'
              onChange={e=>{setValues({...values, email:e.target.value})}}/>
      </div>
      </form>
      <button className="btn btn-primary m-4 " >Update</button>
      <Link className="btn btn-warning m-4 " to="/"> Go Back </Link> 
     </div>
    </div>
    
  
  )
}

export default Update
