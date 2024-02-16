import React from 'react'
import car from "../../assets/car1.webp"
import "./register.css"
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const {register,handleSubmit,reset} =useForm()
    const navigate = useNavigate()
    function saveData(data){
      const response=  axios.post("http://localhost:8080/customer",data)
      console.log(response);
      alert("data added successfully")
      reset()
      navigate("/list")
    }
  return (
    <>
    <img src={car} alt="carphoto" className='w-100 img' />
    <h1 className='heading'>Book A Car</h1>
    <form onSubmit={handleSubmit(saveData)} className="row g-3 w-50 mx-auto bg-dark rounded-3 p-2 form opacity-75">
  <div className="col-md-6">
    <label htmlFor="name" className="form-label text-warning fw-bold fs-5">Name</label>
    <input type="text" required className="form-control" id="name" {...register("name")}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label text-warning fw-bold fs-5">Email</label>
    <input type="email" required className="form-control" id="inputEmail4" {...register("email")}/>
  </div>
 
  <div className="col-md-4">
    <label htmlFor="inputAddress" className="form-label text-warning fw-bold fs-5">Pickup Address</label>
    <input type="text" className="form-control" id="inputAddress" value="Karve Nagar,Krishnai Plaza,Parking B2" {...register("pickup")} readOnly/>
  </div>
  
  <div className="col-md-4">
    <label htmlFor="inputCity" className="form-label text-warning fw-bold fs-5">Destination City</label>
    <input type="text" required className="form-control" id="inputCity" {...register("city")}/>
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label text-warning fw-bold fs-5">State</label>
    <select id="inputState" required className="form-select" {...register("state")}>
      <option value="">Select State</option>
      <option value="maharashtra">Maharashtra</option>
      <option value="gujrat">Gujrat</option>
      <option value="Karnataka">Karnataka</option>
      <option value="Tamilnadu">Tamilnadu</option>
    </select>
  </div>
  <div className="col-md-3">
    <label htmlFor="inputZip" className="form-label text-warning fw-bold fs-5">ZipCode</label>
    <input type="tel" required className="form-control" id="inputZip" {...register("zipcode")}/>
  </div>
  <div className="col-md-3">
    <label htmlFor="contact" className="form-label text-warning fw-bold fs-5">Contact</label>
    <input type="tel" required className="form-control" id="contact" {...register("contact")}/>
  </div>
  <div className="col-md-3">
    <label htmlFor="date" className="form-label text-warning fw-bold fs-5">Pickup Date</label>
    <input type="date" required className="form-control" id="date" {...register("date")}/>
  </div>
  <div className="col-md-3">
    <label htmlFor="time" className="form-label text-warning fw-bold fs-5">Pickup Time</label>
    <input type="time" rel='' className="form-control" id="time" {...register("time")}/>
  </div>
 
  <div className="col-12">
    <button type="submit" className="btn btn-primary w-100 mb-3">Book Car</button>
  </div>
</form>
    </>
  )
}

export default Register