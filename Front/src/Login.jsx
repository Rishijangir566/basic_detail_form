// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <h2 className="text-5xl font-bold text-center text-blue-900 py-4"> Sign -In </h2>

    <form action="" className="mx-auto mt-16 rounded-xl bg-gray-200 border py-8 text-center border-blue-600 w-[40%]">
    <h2 className="text-center text-2xl font-medium mb-4 text-blue-900"> E-mail & Password</h2>
    <input type="email" 
    name="email"
    placeholder="Enter Your E-mail"
     className="border-b pl-2 w-[25rem] font-medium my-4 text-black"
    
      />
    <input type="password" 
    name="password"
    placeholder="Enter Your Password"
     className="border-b pl-2 w-[25rem] font-medium my-4 text-black"
    
      />
      <button type="submit" className="bg-green-600 mr-4 text-white text-xl rounded font-medium py-2 px-12 mt-8"> Login</button>
     <button><Link to="/"  className="bg-blue-900 ml-4 text-white text-xl rounded font-medium py-2 px-12 mt-8"> Register</Link> </button>

      </form>
    </>
  )
}

export default Login