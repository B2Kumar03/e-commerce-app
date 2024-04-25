import { Box, Button, Flex, Heading, Image, Select, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";

const Cart = () => {
  const [data, setData] = useState([]);
  const {cart,setCartM}=useContext(AuthContext)
  const [price,setPrice]=useState(0)
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cartData")) || [];
    setData(data);
    console.log(data);
    data.map((ele)=>{
      setPrice((prev)=>prev+ele.price)
    })
    
  }, []);
  
  const count1=(id)=>{
    data.map((ele)=>{
      if(ele.id==id){
        setPrice((prev)=>prev-ele.price)
      }
      
    })
  }
 
  const handleRemocve=(id)=>{
    const newData=data.filter((item)=> item.id!==id)
    localStorage.setItem('cartData',JSON.stringify(newData))
    setData([...newData])
    setCartM()
    count1(id)
    
  }

  return (<Box w={"80%"} margin={"auto"} mt={50} mb={100}>
       {data.map((ele)=>{
        
        return  <Flex key={ele.id} alignItems={"center"} borderBottom={"1px solid #ccc"} p={2}  justifyContent="space-between">
        <Image src={ele.image} w={"10%"}/>
        <Text fontSize={20} fontWeight={700}>{ele.title}</Text>
        <Text w={300} fontSize={20}>{ele.description}</Text>
        <Text fontSize={20} fontWeight={700}> ₹ {ele.price}</Text>
        <Box display={"flex"}><label style={{fontSize:"20px",fontWeight:"700"}}>Quantity :</label>
        <Select w={40}  >
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">4</option>
        </Select></Box>
        <Button onClick={()=>handleRemocve(ele.id)}>REMOVE TO CART</Button>
        
      </Flex>
       })}
       <Heading>Total item: ({cart}) </Heading>
       <Heading>Total Price : ₹{price}</Heading>
  </Box>)
};

export default Cart;
