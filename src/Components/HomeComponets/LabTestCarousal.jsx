import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import LabTestCarouselElements from "./LabTestCarouselElements";
import { fetchHomePageProducts } from "../../api/HomeAPi";

const LabTestCarousal = ({ category }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const data = {
      name: category.name,
      id: category.id,
    };
    const response = await fetchHomePageProducts(data);
    console.log(response, "response products");
    setProducts(response.data.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Flex
      direction="column"
      align="end"
      position="relative"
      h={{ base: "auto", md: "22rem" }}  // Adjust the height for different screen sizes
    >
      <Box
        height={{ base: "12rem", md: "19rem" }}
        w="100%"
        position="absolute"
        top="0"
        bg="#d4e2fa"
        zIndex="-2"
        left="0"
        right="0"
        mx="auto"
      ></Box>
      <Box
        h={{ base: "auto", md: "19rem" }}
        w="100%"
        position="relative"
        marginY={{ base: "0", md: "50px" }}  // Adjust margin for different screen sizes
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
          h={{ base: "auto", md: "25%" }}
        >
          <Flex
            className="left"
            align={{ base: "flex-start", md: "center" }}
            h={{ base: "45%", md: "100%" }}
            ml={{ base: "10px", md: "0" }}  // Margin from left for different screen sizes
          >
            <Text
              fontSize={{ base: "28px", ml:"12px",md: "20px" }}
              fontWeight="700"
              color="#4f585e"
            >
              {category.name}
            </Text>
          </Flex>
          {/* Uncomment the following code if needed */}
          {/* <Flex className="right" align="center">
            <Text fontSize="18px" fontWeight="600" color="#0f847e">
              See All Offers
            </Text>
            <Flex className="arrow" w="9rem" h="100%"></Flex>
          </Flex> */}
        </Flex>
        <LabTestCarouselElements products={products} />
      </Box>
    </Flex>
  );
};

export default LabTestCarousal;
