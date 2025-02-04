
// import {BrowserRouter, Route,Routes} from "react-router-dom"
import { createBrowserRouter ,RouterProvider } from "react-router"
import Home from "./Home"
import Login from "./Login"
import Register from "./Register"

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