import { Button, CircularProgress, Heading } from '@chakra-ui/react'
import React from 'react'

const Error = () => {
  return (
    <>
    <Heading m={100}>404 ! Something went wrong try again</Heading>
    <Heading m={100} ml={40}>Site is totally depends on local server so start the local server please !</Heading>
    <Button w={200} h={50} borderRadius={20} ml={40} bg={"#5356FF"}>Reload</Button>
    
    </>
  )
}

export default Error