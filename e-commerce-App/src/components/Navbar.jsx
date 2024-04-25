import React, { useContext, useEffect, useState } from "react";
import { Flex, Spacer, Box, Heading, Button } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import {useNavigate} from 'react-router-dom'
import { AuthContext } from "../AuthContext/AuthProvider";

const Navbar = () => {
  const navigate=useNavigate()
  const {logout,auth,cart,setCartM}=useContext(AuthContext)
  // const [cart ,setCart]=useState()
  useEffect(()=>{
    let cartCount=JSON.parse(localStorage.getItem('cart_count'))||0
    setCartM()
  },[])
  
  return (
    <Flex justifyContent={"center"} alignItems={"center"} bg={"#5356FF"} mb={50} position={"sticky"} top={0} zIndex={1000} >
      <Box p="4" className="roboto-light-italic" color={"white"} marginLeft={40}>
        <Heading>e-commerce App</Heading>
      </Box>
      <Spacer />
      <Box  fontSize={22} fontWeight={600}   >
      <Box display={"flex"} flexDirection={"row"} p={2} justifyContent={"center"} >
      <Box mr={100} _hover={{bg:"#5380FF",cursor:"pointer"}} p={3} borderRadius={5} onClick={()=>navigate('/')} >Home</Box>
      <Box mr={100} p={3} _hover={{bg:"#5380FF",cursor:"pointer"}} borderRadius={5} onClick={()=>navigate('/product')} >Products</Box>
      <Box mr={100} p={3} _hover={{bg:"#5380FF",cursor:"pointer"}} borderRadius={5} onClick={()=>navigate('/cart')}>Cart <sup style={{color:"red",fontSize:"20px"}}>{cart}</sup></Box>
      <Box mr={100} p={3}><Button  _hover={{}} onClick={()=>auth?logout():navigate('/login')} bg={!auth?"white":"red"} >{auth?"LOGOUT":"LOGIN"}</Button></Box>
      </Box>

      </Box>
    </Flex>
  );
};

export default Navbar;
