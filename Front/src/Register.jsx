import {useState } from "react"
// import axios from "axios"
import { Link } from "react-router-dom"
import instance from "./axiosConfig"

function Register() {
    // const [isLogin ,setIsLogin]=useState(false)
    const [formValues, setFormValues] = useState({
        name: "",
        fName: "",
        email: "",
        password: "",
        address: "",
        phone: "",
    })

    function handleInputchange(e) {
        const { name, value } = e.target
        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
    
    async function handleSubmit(e) {
    e.preventDefault();

    try {
        const response = await instance.post("/add", formValues);

        if (response.status === 201 && response.data.message === "Data Saved Successfully") {
            alert("Your registration was successful!");
            
            // Reset form only after successful registration
            setFormValues({
                name: "",
                fName: "",
                email: "",
                password: "",
                address: "",
                phone: "",
            });
        }
    } catch (error) {
        console.log("Error code: " + error);
        alert("Error submitting data. Please try again.");
    }

    console.log(formValues);  // You can log it for debugging purposes
}




    return (
        <>
        
            <div className="page h-[80vh] ">

                <h2 className="text-5xl font-bold text-center text-blue-900 py-4"> Registration-Form </h2>

                <form action="" onSubmit={handleSubmit} className="mx-auto mt-8  shadow-lg shadow-black/50 rounded-xl  py-4 text-center bg-amber-100 w-[25%]">
                    <h2 className="text-center text-2xl font-medium mb-4 text-blue-900">Basic - Details</h2>

                    <input type="name"
                        name="name"
                        placeholder="Enter Your Name"
                        className="border-b pl-2 w-[20rem] font-medium my-2 shadow-black/50 bg-amber-100 text-black"
                        value={formValues.name}
                        required
                        onChange={handleInputchange}
                    />
                    <input type="fname"
                        name="fName"
                        placeholder="Enter Your Father Name"
                        className="border-b pl-2 w-[20rem] font-medium my-2 text-black"
                        value={formValues.fName}
                        required
                        onChange={handleInputchange}
                    />
                    <input type="email"
                        name="email"
                        placeholder="Enter Your E-mail"
                        className="border-b pl-2 w-[20rem] font-medium my-2 text-black"
                        value={formValues.email}
                        required
                        onChange={handleInputchange}
                    />
                    <input type="password"
                        name="password"
                        placeholder="Enter Your Password"
                        className="border-b pl-2 w-[20rem] font-medium my-2 text-black"
                        value={formValues.password}
                        required
                        onChange={handleInputchange}
                    />
                    <input type="phone"
                        name="phone"
                        placeholder="Enter Your Number"
                        className="border-b pl-2 w-[20rem] font-medium my-2 text-black"
                        value={formValues.phone}
                        required
                        onChange={handleInputchange}
                    />

                    <input type="address"
                        name="address"
                        placeholder="Enter Your Address"
                        className="border-b pl-2 w-[20rem] font-medium my-2 text-black"
                        value={formValues.address}
                        required
                        onChange={handleInputchange}
                    /> <br />

                    {/* <input type="file"
                        className="border-b pl-2 w-[20rem] font-medium my-2 text-black"
                      name="aadhar1"
                      
                    /> */}

                    <button type="submit" className="bg-green-600 mr-4 text-white text-xl rounded font-medium py-1 px-8 mt-8"> Register</button>
                    <button > <Link to="/login" className="bg-blue-900 ml-4 text-white text-xl rounded font-medium py-1 px-8 mt-8" > Login</Link> </button>

                </form>
            </div>
        </>
    )
}

export default Register
