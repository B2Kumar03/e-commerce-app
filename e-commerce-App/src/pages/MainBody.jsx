import React, { useEffect, useState } from 'react'
import Home from './Home'
import { Box, Button, Flex, Heading, Image, SimpleGrid, Skeleton, Stack } from "@chakra-ui/react";

import Category from '../components/Category'

const MainBody = () => {
    const [isLoading,setLoading]=useState(true)
  useEffect(()=>{
    setTimeout(()=>{
         setLoading((prev)=>!prev)
    },2000)
  },[])

  if(isLoading){
    return <>
    <Stack mt={50}>

<Skeleton w={"80%"} margin={"auto"} bg={"#a2d2ff"} p={20 } pb={0} borderRadius={5} h={500}  /> 


<Skeleton height='20px' w={40} ml={195}/>

<SimpleGrid columns={[2, null, 4]} spacing="40px" mt={15} w={"80%"} margin={"auto"}>
<Skeleton height={300} w={250} />
 <Skeleton height={300} w={250} />
 <Skeleton height={300} w={250} />
 <Skeleton height={300} w={250} />
 <Skeleton height={300} w={250} />
</SimpleGrid>



</Stack>
    </>

  }
  return (
    <>
     <Home/>
     <Category/>
    </>
  )
}

export default MainBody