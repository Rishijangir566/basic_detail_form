import { useEffect, useState } from "react"
// import login from "./Login"
import axios from "axios"
import { Link } from "react-router-dom"


function Register() {
      // const [isLogin ,setIsLogin]=useState(false)
    const [formValues , setFormValues]=useState({
      name:"",
      fName:"",
      email:"",
      password:"",
      address:"",
      phone:"",
    })

    useEffect(()=>{
        fetchData()
    },[formValues])
  
   async function fetchData(){
        const result = await axios.get("http://localhost:3009/get")
        setFormValues(result.data)
    }

    function handleInputchange(e){
    const {name,value}=e.target
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    }

    function handleSubmit(e){
     e.preventDefault()
     alert("your Register Is Sucessfull")
       console.log(formValues); 
       setFormValues("")  
    }
    

  return (
    <>
    <div className="page bg-amber-300 h-[100vh] ">
      
    <h2 className="text-5xl font-bold text-center text-blue-900 py-4"> Registration-Form </h2>

    <form action="" onSubmit={handleSubmit} className="mx-auto mt-2 rounded-xl bg-gray-200 border py-8 text-center border-blue-600 w-[40%]">
      <h2 className="text-center text-2xl font-medium mb-4 text-blue-900">Basic - Details</h2>

    <input type="text" 
    name="name"
    placeholder="Enter Your Name"
     className="border-b pl-2 w-[25rem] font-medium my-4  text-black"
     value={formValues.name}
     onChange={handleInputchange}
      />
    <input type="text" 
    name="fName"
    placeholder="Enter Your Father Name"
     className="border-b pl-2 w-[25rem] font-medium my-4 text-black"
     value={formValues.fName}
     onChange={handleInputchange}
      />
    <input type="email" 
    name="email"
    placeholder="Enter Your E-mail"
     className="border-b pl-2 w-[25rem] font-medium my-4 text-black"
     value={formValues.email}
     onChange={handleInputchange}
      />
    <input type="password" 
    name="password"
    placeholder="Enter Your Password"
     className="border-b pl-2 w-[25rem] font-medium my-4 text-black"
     value={formValues.password}
     onChange={handleInputchange}
      />
    <input type="Number" 
    name="phone"
    placeholder="Enter Your Number"
     className="border-b pl-2 w-[25rem] font-medium my-4 text-black"
     value={formValues.phone}
     onChange={handleInputchange}
     /> 
     
    <input type="text" 
    name="address"
    placeholder="Enter Your Address"
     className="border-b pl-2 w-[25rem] font-medium my-4 text-black"
     value={formValues.address}
     onChange={handleInputchange}
     /> <br />

     <button type="submit" className="bg-green-600 mr-4 text-white text-xl rounded font-medium py-2 px-12 mt-8"> Register</button>
     <button > <Link to="/login"  className="bg-blue-900 ml-4 text-white text-xl rounded font-medium py-2 px-12 mt-8" > Login</Link> </button>

    </form>
    </div>
    </>
  )
}

export default Register
