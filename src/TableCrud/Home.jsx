import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const Home = () => {
  let {id}=useParams()

  let [data,setData]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:4000/users').then(res=> setData(res.data)).catch(err=> console.log(err))
  })

  let handleDelete=(id)=>{
     axios.delete(`http://localhost:4000/users/${id}`)
  }
  return (
    
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'  >
    
      <h1>List of Users</h1>
      <div className='w-75 rounded bg-white border shadow p-5 ' > 
        <div className="d-flex justify-content-end " > <Link className='btn btn-success' to='/create '>Add +</Link> </div>
          <table className='table table-striped ' >
            <thead >
              <tr  >
                <th>ID</th>
                <th>Name</th>
                <th>Password</th>
                <th>Email</th>
                <th>phone </th>
              </tr>
            </thead>
            <tbody  >
              {data.map((d,i)=>{
                return(
               <tr key={i} >
                <td>{d.id}</td>
                <td>{d.username}</td>
                <td>{d.password}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                
                <td> <Link className='btn btn-sm btn-primary m-2' to={`/read/${d.id}`}>Read</Link> 
                <Link className='btn btn-sm btn-info m-2' to={`/update/${d.id}`}>Update</Link> 
              <button className='btn btn-sm btn-danger m-2' onClick={()=>{{handleDelete(d.id)}}}>Delete</button> </td>
               </tr>
                )
              })}
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default Home
