import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import {
  Box,
  Button,
  Flex,
  Image,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../AuthContext/AuthProvider";
import Toast from "../components/Toast";

const ProductDetails = () => {
  const toast = useToast();
  const { id } = useParams();
  const section1 = useRef();
  const [reload, setReload] = useState(false);
  const [data1, setData1] = useState([]);
  const [data, setData] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: "",
  });
  const { setCartM } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);
  async function fetData() {
    setLoading((prev) => !prev);
    try {
      const { data } = await axios.get(`http://localhost:8080/products/${id}`);
      setData({ ...data, data });
      console.log(data);
      setLoading((prev) => !prev);
    } catch (error) {
      setLoading((prev) => !prev);
      console.log(error);
    }
  }
  function gotoTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
  // const  scrollhandler=(elmRef)=>{
  //   console.log(elmRef);
  //   window.scrollTo({top:elmRef.current.ofsetWidth,behavior:"smooth"})
  // }
  useEffect(() => {
    fetData();
    axios
      .get("http://localhost:8080/products")
      .then((data) => setData1(data.data));
  }, [reload]);

  console.log(id);
  if (isLoading) {
    return (
      <>
        {/* <Toast toast={toast}/> */}
        <Loader />
        <Stack mt={200}>
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
      </>
    );
  }
  return (
    <div ref={section1}>
      <Flex w={"80%"} margin={"auto"} mb={100} id="top">
        <Box w={"40%"}>
          <Image
            src={data.image}
            w={"60%"}
            border={"1px solid #ccc"}
            scale={0}
            _hover={{ scale: "1px" }}
            className="shadow"
          />
          <Button
            w={"25%"}
            height={20}
            fontSize={20}
            color={"white"}
            bg={"#FF9F00"}
            mt={5}
            onClick={() =>
              cartHandler(
                data.id,
                data.image,
                data.title,
                data.price,
                data.description
              )
            }
          >
            ADD TO CART
          </Button>
          <Button
            w={"25%"}
            ml={"10%"}
            height={20}
            fontSize={20}
            color={"white"}
            bg={"#FB641B"}
            mt={5}
          >
            BUY NOW
          </Button>
        </Box>
        <Box w={"40%"}>
          <Text fontSize={30} fontWeight={700}>
            {data.title}
          </Text>
          <Text fontSize={20}>{data.description}</Text>
          <Text>
            <Button bg={"green"} color={"white"}>
              {data.rating.rate}
              <FaStar bg={"white"} ml={5} />
            </Button>
          </Text>
          <Text fontSize={40} fontWeight={600} color={"black"}>
            ₹{data.price}{" "}
          </Text>
        </Box>
        <hr />
      </Flex>
      <SimpleGrid
        columns={[2, null, 4]}
        spacing="40px"
        w={"80%"}
        margin={"auto"}
        mb={100}
      >
        {data1.map((ele) => {
          if (ele.id == id) {
            return;
          }
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
              className="shadow"
              h={450}
              border={"1px solid #ccc"}
              borderRadius={5}
              _hover={{ scaleX: "10px" }}
              key={ele.id}
              p={2}
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
                      onClick={() => {
                        setReload((prev) => !prev);
                        gotoTop();
                        // scrollhandler(section1)
                      }}
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
    </div>
  );
};

export default ProductDetails;
