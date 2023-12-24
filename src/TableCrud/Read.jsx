import axios from 'axios'
import React, { useEffect , useState} from 'react'
import { Link, useParams } from 'react-router-dom'



const Read = () => {
let {id}=useParams();
   let [state,setState]=useState([])

      useEffect(()=>{
      axios.get('http://localhost:4000/users/' +id).then(res=> setState(res.data)).catch(err=> 
      console.log(err))
       })
       return(
       <>
       <div className='d-flex w-100 vh-100 justify-content-center align-items-center' >
       <div className="card text-center w-50 h-50 rounded bg-white border shadow p-4"  style={{ width: '28rem' }}>
        <h4 className='card-header'>User Data</h4>
           <div className='card-body m-0'>
              <h5 className="card-title">UserName : <i style={{color:'blue'}}>{state.username}</i></h5>
              <h5 className="card-title">Password : <i style={{color:'darkred'}}>{state.password}</i></h5>
              <h5 className="card-title">Email : <i style={{color:'red'}}>{state.email}</i></h5>
              <h5 className="card-title">Phone: <i style={{color:'green'}}>{state.phone}</i></h5>
           </div>
            <Link to={`/update/${id}`}  className="btn btn-outline-success">Update</Link>
            <Link to={"/"} className="btn btn-outline-warning">Back</Link>
           
       </div>
       </div>
       </>  
      
       )

}

export default Read
