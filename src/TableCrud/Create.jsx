import axios from 'axios';
import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Create = () => {
       let navigate=useNavigate()
   
       let [username,setUserName]=useState("");
       let [password,setPassword]=useState("");
       let [email,setEmail]=useState("");
       let [phone,setPhone]=useState("");


       let handleSubmit = (e)=>{
            e.preventDefault();
           let payload={
              username,
              password,
              email,
              phone,
           }
           axios.post("http://localhost:4000/users", payload)
           alert("Data posted successfully")
           navigate("/")
          
       }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center '>
     <div className="border border-success p-5 mb-5">
      <h1 className='d-flex justify-content-center align-items-center'>Add a user</h1>
      <form action="" className="row g-3 needs-validation" >
       <div className='mb-3'>
              <label htmlFor="name" className="form-check-label">UserName :</label>
              <input type="text" className="form-control" name='name' id='name' placeholder='Enter username' onChange={(e)=>{setUserName(e.target.value)}} />
       </div>
       <div className='mb-3'>
              <label htmlFor="password" className="form-check-label">Password :</label>
              <input type="text" className="form-control"  name='password' id='password' placeholder='Enter Password' onChange={(e)=>{setPassword(e.target.value)}} />
       </div>

      <div className='mb-3 '>
             <label htmlFor="phone" className="form-check-label">Phone :</label>
             <input type="number" className="form-control"  name='phone' id='phone' placeholder='Enter Phone Number' onChange={(e)=>{setPhone(e.target.value)}}/>
       </div>
       <div className='mb-3'>
             <label htmlFor="email" className="form-check-label">Email ID :</label>
             <input type="text" className="form-control"  name='email' id='email' placeholder='Enter Email' onChange={(e)=>{setEmail(e.target.value)}}/>
      </div>
      </form>
      <button className="btn btn-primary m-4 " onClick={handleSubmit}>Submit form</button>
       <Link className="btn btn-warning m-4 " to="/"> Go Back </Link> 
     </div>
    </div>
  )
}

export default Create
