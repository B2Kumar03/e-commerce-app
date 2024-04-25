import { Button, Heading } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Category from "./components/Category"
import MainBody from "./pages/MainBody"
import AllRouter from "./Allrout/AllRouter"
import { useSearchParams } from "react-router-dom"


function App() {


  return (
    <>
     <Navbar/>
     {/* <MainBody/> */}
     <AllRouter/>
    
    </>
  )
}

export default App
