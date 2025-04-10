import { useState } from "react";
// import axios from "axios"
import { Link } from "react-router-dom";
import instance from "./axiosConfig";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  // const [isLogin ,setIsLogin]=useState(false)
  const [formValues, setFormValues] = useState({
    name: "",
    fName: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  function handleInputchange(e) {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await instance.post("/add", formValues);

      if (
        response.status === 201 &&
        response.data.message === "Data Saved Successfully"
      ) {
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
        navigate("/login");
      }
    } catch (error) {
      console.log("Error code: " + error);
      alert("Error submitting data. Please try again.");
    }

    console.log(formValues); // You can log it for debugging purposes
  }

  return (
    <>
      <div className="page h-[80vh] ">
        <h2 className="text-5xl font-bold text-center text-blue-900 py-2">
 
          Registration-Form
        </h2>

        <form
          action=""
          onSubmit={handleSubmit}
          className="mx-auto mt-5 shadow-lg shadow-black/50 rounded-xl py-6 px-6 sm:px-10 text-center bg-amber-100 w-full max-w-md"
        >
          <h2 className="text-center text-2xl font-medium mb-6 text-blue-900">
            Basic - Details
          </h2>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="border-b px-3 py-2 bg-amber-100 text-black font-medium"
              value={formValues.name}
              required
              onChange={handleInputchange}
            />
            <input
              type="text"
              name="fName"
              placeholder="Enter Your Father Name"
              className="border-b px-3 py-2 text-black font-medium"
              value={formValues.fName}
              required
              onChange={handleInputchange}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your E-mail"
              className="border-b px-3 py-2 text-black font-medium"
              value={formValues.email}
              required
              onChange={handleInputchange}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              className="border-b px-3 py-2 text-black font-medium"
              value={formValues.password}
              required
              onChange={handleInputchange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Enter Your Number"
              className="border-b px-3 py-2 text-black font-medium"
              value={formValues.phone}
              required
              onChange={handleInputchange}
            />
            <input
              type="text"
              name="address"
              placeholder="Enter Your Address"
              className="border-b px-3 py-2 text-black font-medium"
              value={formValues.address}
              required
              onChange={handleInputchange}
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button
              type="submit"
              className="bg-green-600 text-white text-xl rounded font-medium py-2 px-8"
            >
              Submit
            </button>
            <Link
              to="/login"
              className="bg-blue-900 text-white text-xl rounded font-medium py-2 px-8 text-center"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
