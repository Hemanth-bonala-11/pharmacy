import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import LabTestCarouselElements from "./LabTestCarouselElements";
import { fetchHomePageProducts } from "../../api/HomeAPi";

const LabTestCarousal = ({category}) => {
  const [products, setProducts] = useState([])
  const getProducts = async ()=>{
    const data = {
      name: category.name,
      id: category.id
    }
    const response = await fetchHomePageProducts(data);
    console.log(response,"response products");
    setProducts(response.data.data)
  }
  useEffect(()=>{
    getProducts()
  },[])
  return (
      <Flex h="22rem"  align="end" position="relative">
        <Box
        //   border={"2px solid black"}
          height="19rem"
          w="100%"
          position="absolute"
          top="0"
          bg="#d4e2fa"
          zIndex="-2"
          left="-40"
          width="1550px"
        ></Box>
      <Box
        h="19rem"
        w="100%"
        position="relative"
        // marginY={"50px"}
      >
        <Flex h="25%" justify="space-between" >
          <Flex className="left" align="center" h="45%">
            <Text fontSize="20px" fontWeight="700" color="#4f585e"  >
            {category.name}
            </Text>
          </Flex>
          {/* <Flex className="right" align="center">
            <Text fontSize="18px" fontWeight="600" color="#0f847e">
              See All Offers
            </Text>
            <Flex className="arrow" w="9rem" h="100%"></Flex>
          </Flex> */}
        </Flex>
        <LabTestCarouselElements products={products}/>
      </Box>
    </Flex>
  );
};

export default LabTestCarousal;
