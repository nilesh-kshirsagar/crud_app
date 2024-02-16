import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const List = () => {
  
  const [customer, setCustomer] = useState([])
  async function getData(){
     const response = await axios.get("http://localhost:8080/customer")
    //  console.log(response);
     const result = await response.data
    //  console.log(result);
     setCustomer(result)
  }

  useEffect(()=>{
    getData()
  },[])
  return (
   <>
   <h1>Customer Data</h1>
   <table className='table'>
    <thead>
      <tr>
        <th>Booking ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Pickup Address</th>
        <th>City</th>
        <th>State</th>
        <th>ZipCode</th>
        <th>Contact</th>
        <th>Pickup Date</th>
        <th>Pickup Time</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody>
      {
        customer.map((cu)=>{
            return (
              <tr>
                <td>{cu.id}</td>
                <td>{cu.name}</td>
                <td>{cu.email}</td>
                <td>{cu.pickup}</td>
                <td>{cu.city}</td>
                <td>{cu.state}</td>
                <td>{cu.zipcode}</td>
                <td>{cu.contact}</td>
                <td>{cu.date}</td>
                <td>{cu.time}</td>
                <td>
                  <NavLink to={`/customer/update/${cu.id}`}><button className='btn btn-warning me-2'>EDIT</button></NavLink>
                  <NavLink to={`/customer/delete/${cu.id}`}><button className='btn btn-danger me-2'>DELETE</button></NavLink>
                </td>
              </tr>
            )
        })
      }
    </tbody>
    <tfoot>
      <NavLink to="/register"><button>Register</button></NavLink>
    </tfoot>
   </table>
   </>
  )
}

export default List