import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Delete = () => {

    const [customer, setCustomer] = useState({})
    const {customerID} = useParams()
    const navigate = useNavigate()
    async function fetchData(){
        const result=await  axios.get(`http://localhost:8080/customer/${customerID}`)
      setCustomer(result.data)
         }
         useEffect(()=>{
            fetchData()
         },[])

         function DeleteData(){
            axios.delete(`http://localhost:8080/customer/${customerID}`)
            alert("data deleted")
            navigate("/list")
        }
  return (
    <>
    <form onSubmit={()=>DeleteData()}>
    <h1>Do You Really Want To Delete Records</h1>
    <h2>ID- {customer.id}</h2>
    <h2>Name-{customer.name} </h2>
    <button type='submit' className='btn btn-outline-success me-3 fs-3'>Yes</button>
   <NavLink to={"/list"}> <button type='button' className='btn btn-outline-danger fs-3'>No</button></NavLink>
    </form>
    </>
  )
}

export default Delete