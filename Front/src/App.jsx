// import React from 'react'
import {BrowserRouter, Route,Routes} from "react-router-dom"
import Register from "./Register"
import Login from "./Login"

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={< Register/>}> </Route>
        <Route path="/login" element={< Login/>}> </Route>
      </Routes>
      </BrowserRouter>

      
    </>
  )
}

export default App