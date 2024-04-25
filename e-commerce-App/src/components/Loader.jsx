import { Box, CircularProgress } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
  return (
    <Box w={"80%"} margin={"auto"} display={"flex"} justifyContent={"center"} mt={300}> <CircularProgress isIndeterminate color='green.300' /></Box>
  )
}

export default Loader