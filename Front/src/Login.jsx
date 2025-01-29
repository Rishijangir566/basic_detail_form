// eslint-disable-next-line no-unused-vars
import React from 'react'

function Login() {
  return (
    <>
    <form action="" className="mx-auto mt-2 rounded-xl bg-gray-200 border py-8 text-center border-blue-600 w-[40%]">

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
     <button  className="bg-blue-900 ml-4 text-white text-xl rounded font-medium py-2 px-12 mt-8" > Register</button>

      </form>
    </>
  )
}

export default Login