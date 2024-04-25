import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../AuthContext/AuthProvider";
import {
  Form,
  Link,
  Navigate,
  Link as ReactRouterLink,
  useNavigate,
} from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { IoMdLogIn } from "react-icons/io";
import axios from "axios";
import { AuthContext } from "../AuthContext/AuthProvider";

const Login = () => {
  const {auth,login}=useContext(AuthContext)
  const [load,setLoad]=useState(false)
  const toast=useToast()
  const [data,setData]=useState({
    email:"",
    password:""
  })
  const showToast = () => {
    toast({
      title: "Login successfull !",
      status: "warning",
      duration: 3000,
      isClosable: true,
      position: "top",
      style: {
        background: auth ? "green" : "red", // Change background color based on authentication status
        color: "white", // Change text color to white
      },
    });
  };
  const showToast1 = () => {
    toast({
      title: "Email/Password is wrong !",
      status: "warning",
      duration: 3000,
      isClosable: true,
      position: "top",
      style: {
        background: auth ? "green" : "red", // Change background color based on authentication status
        color: "white", // Change text color to white
      },
    });
  };

  const formSubmit=(e)=>{
    e.preventDefault();
    setLoad((prev)=>!prev)
    axios.post("https://reqres.in/api/login",data)
    .then((data)=>{
      login(data.data.token)
      setLoad((prev)=>!prev)
      showToast()
      

    }).catch((err)=>{
      console.log(err);
      setLoad((prev)=>!prev)
      showToast1()

    })
  }
  if(auth){
    return <Navigate to="/"/>
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={15}
      
    >
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"} className="shadow" border="1px solid #ccc" p={10} mt={10}>
      <Box  fontSize={40}><IoMdLogIn /></Box>
        <Text textAlign={"center"} className="roboto-bold" fontSize={20}>
          User Login
        </Text>
        
        <br />
        <br />
        <FormControl>
          <label className="roboto-bold" fontSize={10}>
            Email
          </label>
          <br />

          <InputGroup size="md">
            <Input  pr="4.5rem"
              type="email"
              border="1px solid black"
              onChange={(e)=>setData({...data,email: e.target.value})}
              
              />
              
          </InputGroup>
          <br /><br />
          <label className="roboto-bold" fontSize={10}>
            Password
          </label>
          <br />
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              // type={show ? "text" : "password"}
              border="1px solid black"
              // onChange={(e) => setPassWord(e.target.value)}
              onChange={(e)=>setData({...data,password: e.target.value})}
             
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm"  bg="white">
                {/* {show ? "Hide" : "Show"} */}
              </Button>
            </InputRightElement>
          </InputGroup>
          <br />
          <br />
        
          <Input
            w={40}
            mt={10}
            type="submit"
            value={load?"Loading...":"Login"}
            bg="#004F9A"
            borderRadius={20}
            color={"white"}
            cursor={"pointer"}
            onClick={formSubmit}
           
          />
         


          <br />
          <br />
        </FormControl>
      </Box>
    </Box>
  );
};

export default Login;
