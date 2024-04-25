import { Box, Button, Flex, Heading, Image, SimpleGrid, Skeleton, Stack } from "@chakra-ui/react";
import React from "react";
import girl from '../assets/girl.png'
import { useNavigate } from "react-router-dom";
// import {Image} from '@chakra-ui/react '

const Home = () => {
  const navigate=useNavigate()
  return (
    <Flex w={"80%"} margin={"auto"} bg={"#a2d2ff"} p={20 } pb={0} borderRadius={5}>
      <Box fontSize={25} fontWeight={700}>
        Welcome to e-commerce app - Where Every Click Sparks Joy! Discover
        endless possibilities right at your fingertips. Shop smarter, live
        better. Start exploring now!
        <Button mt={100} fontSize={30} w={200} h={20} className="shadow" onClick={()=>navigate('/product')}>Shop now</Button>

      </Box>
      <Box>
        {" "}
        <Image src={girl} w={700} h={500}/>
      </Box>
    </Flex>
  );
};

export default Home;
