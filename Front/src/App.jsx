
// import {BrowserRouter, Route,Routes} from "react-router-dom"
import { createBrowserRouter ,RouterProvider } from "react-router"
import Home from "./Home"
import Login from "./Login"
import Register from "./Register"
import Profile from "./Profile"

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    children:[
      {
        index:true,
        element:<Register/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      
      {
        path:"/profile",
        element:<Profile/>
      },
      
    ]
  }
])

function App() {


  return (
    <>
   <RouterProvider router={router}/>
    </>
  )
}

export default App