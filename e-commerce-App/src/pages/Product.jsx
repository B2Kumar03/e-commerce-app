import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { RiArrowDropDownLine, RiXingLine } from "react-icons/ri";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { calcLength } from "framer-motion";
import { Link, json, useSearchParams } from "react-router-dom";
import { AuthContext } from "../AuthContext/AuthProvider";
import Error from "../components/Error";

const Product = () => {
  const [data, setData] = useState([]);
  const toast = useToast();
  const [isLoading, setLoading] = useState(false);
  const [err,setError]=useState(false)
  const { setCartM } = useContext(AuthContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState("all");
  const [search,setSearchValue]=useState("")
  const timeOutId = useRef();
  const debounce=(fun)=>{
    let timer;
    return function(...args){
      const context=this;
      if(timer){
        clearTimeout(timer)
      }
      timer=setTimeout(()=>{
        timer=null
        fun.apply(context,args)
      },1000)
    }

  }
  

function handlechange(event){
  setLoading((prev) => !prev);
  if(!isNaN(event.target.value)){
     
    console.log(event.target.value);
    setSearchValue(event.target.value)
    axios.get(`http://localhost:8080/products?price_like=${event.target.value}`)
    .then((res)=>{
      setData(res.data)
      setLoading((prev) => !prev);
    })
  }
  else{
    console.log(event.target.value);
    setSearchValue(event.target.value)
    axios.get(`http://localhost:8080/products?title_like=${event.target.value}`)
    .then((res)=>{
      setData(res.data)
      setLoading((prev) => !prev);
    })

  }
  
}

const optVersion=useCallback(debounce(handlechange),[])




  console.log(searchParams.get("category"));
  async function fetData() {
    if(searchParams.get('category')==null){
      f()
      return
    }
    if (searchParams.get("category") == "all") {
      setLoading((prev) => !prev);
      try {
        const { data } = await axios.get("http://localhost:8080/products");
        setData(data);
        setLoading((prev) => !prev);
      } catch (error) {
        setLoading((prev) => !prev);
        console.log(error);
        setError((prev)=>!prev)
        setLoading((prev)=>!prev)
      }
      return;
    }
    setLoading((prev) => !prev);
    console.log(searchParams.get("category"));
    try {
      const { data } = await axios.get(
        `http://localhost:8080/products?category=${searchParams.get(
          "category"
        )}`
      );
      setData(data);
      setCategory(searchParams.get("category"));
      setLoading((prev) => !prev);
    } catch (error) {
      setLoading((prev) => !prev);
      console.log(error);
    }
  }
  useEffect(() => {
    
    fetData();
  }, [category]);

   async function f(){
    if(searchParams.get("category")!=null){
      console.log("ad",searchParams.get("category"));
      return
    }
    setLoading((prev) => !prev);
    console.log(searchParams.get("category"));
    try {
      const { data } = await axios.get(
        `http://localhost:8080/products`
      );
      setData(data);
     
      setLoading((prev) => !prev);
    } catch (error) {
      setLoading((prev) => !prev);
      setError((prev)=>!prev)
      console.log(error);
    }
   }


  function cartHandler(id, image, title, price, description) {
    const data = JSON.parse(localStorage.getItem("cartData")) || [];
    let cartCount = JSON.parse(localStorage.getItem("cart_count")) || 0;
    const obj = {
      id: id,
      title: title,
      image: image,
      price: price,
      description: description,
    };
    let f = false;
    data.map((ele) => {
      if (ele.id === obj.id) {
        f = true;
        return;
      }
    });
    if (f) {
      showToast();
      return;
    }
    data.push(obj);
    localStorage.setItem("cartData", JSON.stringify(data));
    cartCount += 1;
    localStorage.setItem("cart_count", JSON.stringify(cartCount));
    setCartM();
  }
  const showToast = () => {
    toast({
      title: "Product Already in Cart",
      status: "warning",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

  const sort=async(sortValue)=>{
    if(searchParams.get('category')==null)
    {if(sortValue=="p_l_to_h"){
      setLoading((prev) => !prev);
      try {
        const { data } = await axios.get(
          `http://localhost:8080/products?_sort=price&&_order=asc`
        );
        setData(data);
        setCategory(searchParams.get("category"));
        setLoading((prev) => !prev);
      } catch (error) {
        setLoading((prev) => !prev);
        console.log(error);
      }
       
    }
    else if(sortValue=="p_h_to_l"){
      setLoading((prev) => !prev);
      try {
        const { data } = await axios.get(
          `http://localhost:8080/products?_sort=price&&_order=desc`
        );
        setData(data);
        setCategory(searchParams.get("category"));
        setLoading((prev) => !prev);
      } catch (error) {
        setLoading((prev) => !prev);
        console.log(error);
      }

    }
     return
    }
   if(searchParams.get("category")=="all"){
    if(sortValue=="p_l_to_h"){
      setLoading((prev) => !prev);
      try {
        const { data } = await axios.get(
          `http://localhost:8080/products?_sort=price&&_order=asc`
        );
        setData(data);
        setCategory(searchParams.get("category"));
        setLoading((prev) => !prev);
      } catch (error) {
        setLoading((prev) => !prev);
        console.log(error);
      }
       
    }
    else if(sortValue=="p_h_to_l"){
      setLoading((prev) => !prev);
      try {
        const { data } = await axios.get(
          `http://localhost:8080/products?_sort=price&&_order=desc`
        );
        setData(data);
        setCategory(searchParams.get("category"));
        setLoading((prev) => !prev);
      } catch (error) {
        setLoading((prev) => !prev);
        console.log(error);
      }

    }
   }
   else{
    if(sortValue=="p_l_to_h"){
      setLoading((prev) => !prev);
      try {
        const { data } = await axios.get(
          `http://localhost:8080/products?category=${searchParams.get(
            "category"
          )}&&_sort=price&&_order=asc`
        );
        setData(data);
        setCategory(searchParams.get("category"));
        setLoading((prev) => !prev);
      } catch (error) {
        setLoading((prev) => !prev);
        console.log(error);
      }
       
    }
    else if(sortValue=="p_h_to_l"){
      setLoading((prev) => !prev);
      try {
        const { data } = await axios.get(
          `http://localhost:8080/products?category=${searchParams.get(
            "category"
          )}&&_sort=price&&_order=desc`
        );
        setData(data);
        setCategory(searchParams.get("category"));
        setLoading((prev) => !prev);
      } catch (error) {
        setLoading((prev) => !prev);
        console.log(error);
      }

    }
   }
   
}





  if (isLoading) {
    return (
      <Stack mt={50}>
        <Flex>
          <Skeleton height="" w={40} ml={195} />
          <Skeleton height="40px" w={40} ml={10} />
          <Skeleton height="40px" w={100} ml={10} />
          <Skeleton height="40px" w={40} ml={10} />
        </Flex>
        <SimpleGrid
          columns={[2, null, 4]}
          spacing="40px"
          w={"80%"}
          margin={"auto"}
          mt={50}
        >
          <Skeleton height={450} w={300} />
          <Skeleton height={450} w={300} />
          <Skeleton height={450} w={300} />
          <Skeleton height={450} w={300} />
          <Skeleton height={450} w={300} />
          <Skeleton height={450} w={300} />
          <Skeleton height={450} w={300} />
          <Skeleton height={450} w={300} />
          <Skeleton height={450} w={300} />
          <Skeleton height={450} w={300} />
          <Skeleton height={450} w={300} />
          <Skeleton height={450} w={300} />
          <Skeleton height={450} w={300} />
          <Skeleton height={450} w={300} />
          <Skeleton height={450} w={300} />
          <Skeleton height={450} w={300} />
          <Skeleton height={450} w={300} />
          <Skeleton height={450} w={300} />
          <Skeleton height={450} w={300} />
        </SimpleGrid>
      </Stack>
    );
  }
  if(err){
    return <Error/>
  }

  return (
    <>
      <Flex mb={50} w={"80%"} ml={200}>
        <Box display={"flex"} alignItems={"center"}>
          <label style={{ fontSize: "20px" }}>Categories:</label>
          <Select
            ml={2}
            onChange={(e) => {
              setCategory(e.target.value);
              const obj = { category: e.target.value };
              setSearchParams(obj);
            }}
            value={category}
          >
            <option value="all">All</option>
            <option value="men-clothing">Men-clothing</option>
            <option value="women-clothing">Women-clothing</option>
            <option value="jewellery">Jewellery</option>
            <option value="electronics">Electronics</option>
          </Select>
        </Box>
        <Box>
          <InputGroup>
            <Input placeholder="Search product" w={500} ml={10}  onChange={optVersion} />
            <InputRightElement>
              <CiSearch color={"gray.300"} fontSize={20} />
            </InputRightElement>
          </InputGroup>
        </Box>
        <Box ml={10}>
          <Menu>
            <MenuButton
              px={4}
              py={2}
              transition="all 0.2s"
              // borderRadius="md"
              // borderWidth="1px"
              _hover={{ bg: "white" }}
              _expanded={{ bg: "#5356FF" }}
              // _focus={{ boxShadow: "outline" }}

              as={Button}
              rightIcon={<RiArrowDropDownLine />}
              bg={"white"}
              border={"1px solid #ccc"}
            >
              Sort
            </MenuButton>
            <MenuList p={2}>
            
              <hr />
              <MenuItem
                _hover={{ bg: "#5356FF", color: "white" }}
                // onClick={() => sortNerestDateAssendingOrder("asc")}
                onClick={()=>sort("p_l_to_h")}
              >
                Price(Low to High)
              </MenuItem>
              <hr />
              <MenuItem
                _hover={{ bg: "#5356FF", color: "white" }}
                // onClick={() => sortNerestDateAssendingOrder("asc")}
                onClick={()=>sort("p_h_to_l")}
              >
                Price(High to Low)
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
      <SimpleGrid
        columns={[2, null, 4]}
        spacing="40px"
        mt={50}
        w={"80%"}
        margin={"auto"}
        mb={100}
      >
        {data.map((ele) => {
          let t = "";
          if (ele.title.length > 20) {
            t = ele.title.slice(0, 20) + "...";
          } else {
            t = ele.title;
          }
          let d = ele.description.slice(0, 40) + "...";
          return (
            <Box
              w={300}
              h={450}
              border={"1px solid #ccc"}
              borderRadius={5}
              _hover={{ scaleX: "10px" }}
              key={ele.id}
              p={2}
              className="shadow"
            >
              <Image src={ele.image} w={"100%"} borderRadius={5} h={"58%"} />
              <Text fontSize={20} mt={2} fontWeight={700}>
                {t}
              </Text>
              <Text>{d}</Text>
              <Text fontSize={20} fontWeight={600} color={"#5356FF"}>
                ₹{ele.price}{" "}
              </Text>
              <hr />
              <Box
                display={"flex"}
                justifyContent="flex-start"
                flexDirection={"column"}
                mt={5}
              >
                <Box>
                  <Link to={`/product/${ele.id}`}>
                    <Button
                      bg={"#5356FF"}
                      color={"white"}
                      _hover={{ color: "black" }}
                    >
                      View details
                    </Button>
                  </Link>
                  <Button
                    bg={"white"}
                    color={"#5356FF"}
                    ml={5}
                    onClick={() =>
                      cartHandler(
                        ele.id,
                        ele.image,
                        ele.title,
                        ele.price,
                        ele.description
                      )
                    }
                  >
                    Add to cart
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default Product;
