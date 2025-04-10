// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import instance from "./axiosConfig";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [matchData, setMetchData] = useState({
    email: "",
    password: "",
  });

  function handleInputchange(e) {
    const { name, value } = e.target;

    setMetchData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    try {
      const response = await instance.post("/login", matchData);
      console.log(response.data);
      alert("your login successfully");
      setMetchData({
        email: "",
        password: "",
      });
      navigate("/profile");
    } catch (error) {
      console.log("error is :" + error);
    }
    console.log(matchData);
  }

  return (
    <>
      <h2 className="text-5xl font-bold text-center text-blue-900 py-4">
        {" "}
        Sign-In{" "}
      </h2>
      <form
        onSubmit={handleFormSubmit}
        className="w-full max-w-md mx-auto my-16 bg-amber-200 rounded-xl shadow-lg shadow-black/70 px-6 py-8 text-center"
      >
        <h2 className="text-2xl font-medium mb-6 text-blue-900">
          E-mail & Password
        </h2>

        <div className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Enter Your E-mail"
            className="border-b px-3 py-2 font-medium text-black bg-amber-200"
            value={matchData.email}
            required
            onChange={handleInputchange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            className="border-b px-3 py-2 font-medium text-black"
            value={matchData.password}
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
            to="/"
            className="bg-blue-900 text-white text-xl rounded font-medium py-2 px-8 text-center"
          >
            Register
          </Link>
        </div>
      </form>
    </>
  );
}

export default Login;
