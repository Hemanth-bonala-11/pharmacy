import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomeCategoryCards = () => {
  const categories = useSelector((state) => state.categories.list);
  const navigate = useNavigate();

  const selectCategory = (categoryName) => {
    navigate(`/categories/${categoryName}`);
  };

  return (
    <Flex h="12rem" gap="50px" marginBottom="30px">
      {categories.length !== 0 &&
        categories.map((category) => (
          <Flex
            key={category.id}
            direction="row"
            w="100%"
            position="relative"
            transition="all 0.4s ease"
            _hover={{
              boxShadow:
                "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.181) 0px 2px 26px 0px",
              transition: "all 0.4s ease",
            }}
            onClick={() => {
              selectCategory(category.name);
            }}
            cursor="pointer"
          >
            {/* Single box with image and text overlay */}
            <Box
              w="100%"
              position="relative"
              color="green"
              overflow="hidden"
              borderRadius="md"
              bgImage={`url(${category.image})`}
              bgSize="cover"
              bgPosition="center"
            >
              {/* Lighter, semi-transparent background behind text */}
              <Box
                bg="rgba(255, 255, 255, 0.7)"
                p="20px"
                borderRadius="md"
                textAlign="center"
                width="100%"
                position="absolute"
                bottom="0"
                left="0"
              >
                <Text fontSize="20px" fontWeight="700" mb="2">
                  {category.name}
                </Text>
                {/* Add any additional text or elements as needed */}
              </Box>
            </Box>
          </Flex>
        ))}
    </Flex>
  );
};

export default HomeCategoryCards;
