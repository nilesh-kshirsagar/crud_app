import React from 'react'
import errorgif from "../../assets/error.gif"

const Error = () => {
  return (
    <>
    <h1>OOPS</h1>
    <img src={errorgif} alt="error" />
    </>
  )
}

export default Error