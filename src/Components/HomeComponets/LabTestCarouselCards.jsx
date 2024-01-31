import React, { useState } from "react";
import { Box, Center, Flex, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";
import {add_to_cart} from '../../api/cartApi'

export default function LabTestCarousalCards({ elem }) {
  console.log(elem)
  const isLoggedIn = localStorage.getItem("auth_token")
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(isLoggedIn);
  
  const handleAddToCart = () => {
    if (isLoggedIn) {
   
      sendToBackend();
    } else {
     
      storeInLocalStorage();
    }
  };

  const storeInLocalStorage = () => {
    const existingCartData = JSON.parse(localStorage.getItem("cart")) || [];
  
 
    const existingProductIndex = existingCartData.findIndex(item => item.product_id === elem.product_id);
  
    if (existingProductIndex !== -1) {
  
      existingCartData[existingProductIndex].quantity += 1;
    } else {
 
      existingCartData.push({
        product_id: elem.product_id,
        product_name: elem.product_name,
        quantity: 1,
      });
    }
  
    localStorage.setItem("cart", JSON.stringify(existingCartData));
  
    console.log("Product added to local storage!");
  };
  

  const sendToBackend = () => {
   
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
  
   
    let payload = cartData.map(item => ({ id: item.id, quantity: item.quantity }));
    if(payload.length===0){
    payload = {items: [{ product: elem.id, quantity: elem.quantity || 1 }]}  
    }
  
    add_to_cart(payload)
      .then(response => {
        if (!response.ok) {
          
        }
        return response.json();
      })
      .then(data => {
        
        console.log("Cart data sent to backend!");
     
        localStorage.removeItem("cart");
      })
      .catch(error => {
      
        console.error("Error sending cart data to backend:", error);
      });
  };
  

  return (
    <Center height={"15rem"} marginX="8px">
      <Stack
        w={{ sm: "100%", md: "600px" }}
        height={{ sm: "476px", md: "15rem" }}
        direction={{ base: "column", md: "row" }}
      >
        <Flex
          borderWidth="2px"
          position="relative"
          height="99%"
          w="100%"
          direction="column"
          bg={useColorModeValue("white", "gray.900")}
          padding={"16px"}
          transition="all 0.4s ease"
          _hover={{
            boxShadow:
              " rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 4px 32px",
            transition: "all 0.4s ease",
            border: "2px solid #0f847e",
          }}
          borderRadius="8px"
          overflow="hidden"
        >
          <Flex w="25%" align="center">
            <Image
              objectFit="cover"
              w="90%"
              h="90%"
              src={elem.photo}
            />
          </Flex>
          <Flex direction="column" w="100%" px="8px" h="45%" color="#4f585e">
            <Text
              fontSize="15px"
              fontWeight="600"
              textAlign="left"
              height="30px"
              istruncated="true"
              noOfLines={1}
              w="100%"
              padding="8px 0"
            >
              {elem.product_name}
            </Text>
            <Text textAlign="left" fontSize="14px" fontWeight="400" py="5px">
              {" "}
              {elem.description}{" "}
            </Text>
            <Text
              textAlign="left"
              fontSize="12px"
              fontWeight="400"
              color="silver"
            >
              {" "}
              {elem.tests}{" "}
            </Text>
          </Flex>
          <Flex
            bottom="0"
            w="100%"
            h="30%"
            justify="space-between"
            align="center"
          >
            <Box color="#4f585e">
              <Text fontWeight="700">
                ₹{elem.price} &nbsp;
              </Text>
            </Box>
            <Flex
              bg="#ffffff"
              position="absolute"
              color="#0f847e"
              fontWeight="700"
              h="18%"
              right="0"
              align="center"
              transition="all 0.4s ease"
              w="40%"
              cursor="pointer"
              borderLeftRadius="md"
              justify="center"
              className="bookNow"
              _hover={{
                bg:"#0f847e",
                color:"white",
                transition:"all 0.4s ease"
              }}
              onClick={handleAddToCart}
            >
              <Text fontSize="15px">Add to cart</Text>
              <FiChevronRight style={{ fontSize: "22px" }} />
            </Flex>
          </Flex>
        </Flex>
      </Stack>
    </Center>
  );
}