import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

const Category = () => {

    
  return (
    <Box w={"80%"} margin={"auto"} mt={50}>
      <Heading>Categories</Heading>

      <SimpleGrid columns={[2, null, 4]} spacing="40px" mt={15}>
        <Box w={250} h={300}  border={"1px solid #ccc"} borderRadius={5} _hover={{scaleX:"10px"}} >
          <Image src="https://images.meesho.com/images/marketing/1632063921655.png" w={"100%"} borderRadius={5} h={"80%"}/>
          <Text fontSize={20} textAlign={"center"}
          mt={5}
          >Women's clothing</Text>
        </Box>
        <Box w={250} h={300}  border={"1px solid #ccc"} borderRadius={5} >
          <Image src="https://images.meesho.com/images/products/75970557/6kmep_400.webp" w={"100%"} borderRadiusTop={5} h={"80%"}/>
          <Text fontSize={20} textAlign={"center"} mt={5}>Men's clothing</Text>
        </Box>
        <Box w={250} h={300}  border={"1px solid #ccc"} borderRadius={5} >
          <Image src="https://images.meesho.com/images/products/354770390/rbrf2_400.webp" w={"100%"} borderRadius={5} h={"80%"}/>
          <Text fontSize={20} textAlign={"center"} mt={5}>Electronics</Text>
        </Box>
        <Box w={250} h={300}  border={"1px solid #ccc"} borderRadius={5} >
          <Image src="https://images.meesho.com/images/products/3145241/1_400.webp" w={"100%"} borderRadius={5} h={"80%"}/>
          <Text fontSize={20} textAlign={"center"} mt={5}>Kids</Text>
        </Box>
        <Box w={250} h={300}  border={"1px solid #ccc"} borderRadius={5} mt={5} >
          <Image src="https://images.meesho.com/images/products/83662980/cakqy_400.webp" w={"100%"} borderRadiusTop={5} h={"80%"}/>
          <Text fontSize={20} textAlign={"center"}>Jewellery</Text>
        </Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </SimpleGrid>
    </Box>
  );
};

export default Category;
