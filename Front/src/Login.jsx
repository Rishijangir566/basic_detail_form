// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import instance from './axiosConfig'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate=useNavigate();

    const [matchData, setMetchData] = useState({
        email: "",
        password: "",
    })

    function handleInputchange(e) {
        const { name, value } = e.target

        setMetchData((prev) => ({
            ...prev,
            [name]: value
        }))

    }

   async function handleFormSubmit(e) {
        e.preventDefault()

        try{
            const response = await instance.post("/login", matchData);
            console.log(response.data);  
            alert("your login successfully")
             setMetchData({
                email: "",
                password: "",
             })
             navigate("/profile")
            }
            catch(error){
                console.log("error is :" +error);  
            }
            console.log(matchData);
            
         
    }

    return (
        <>
            <h2 className="text-5xl font-bold text-center text-blue-900 py-4"> Sign-In </h2>

            <form onSubmit={handleFormSubmit} className="mx-auto my-16 rounded-xl shadow-black/70 
            bg-amber-200  py-8 text-center  w-[30%]"  >
                <h2 className="text-center text-2xl font-medium mb-4 text-blue-900"> E-mail & Password</h2>
                <input type="email"
                    name="email"
                    placeholder="Enter Your E-mail"
                    className="border-b pl-2 w-[20rem] font-medium my-4  text-black"
                    value={matchData.email}
                    required
                    onChange={handleInputchange}
                />
                <input type="password"
                    name="password"
                    placeholder="Enter Your Password"
                    className="border-b pl-2 w-[20rem] font-medium my-4 text-black"
                    value={matchData.password}
                    required
                    onChange={handleInputchange}
                /> <br />
                <button type="submit"   className="bg-green-600 mr-4 text-white text-xl rounded font-medium py-2 px-8 mt-4"> Submit</button>
                <button><Link to="/" className="bg-blue-900 ml-4 text-white text-xl rounded font-medium py-2 px-8 mt-4"> Register</Link> </button>

            </form>
        </>
    )
}

export default Login