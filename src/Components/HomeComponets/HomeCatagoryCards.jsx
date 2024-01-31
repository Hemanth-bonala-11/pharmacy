import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const HomeCatagoryCards = () => {
  const categories = useSelector(state => state.categories.list);
  console.log(categories,"categories");
  const navigate = useNavigate()
  
  const selectCategory = (categoryName)=>{
    navigate(`/categories/${categoryName}`)
  }
  
  return (
    <div>
      <Flex h="12rem" gap="50px" marginBottom="30px">
        {
          categories.length!==0 && categories.map((category)=>(
            <Box
            border="1px solid silver"
            overflow="hidden"
            borderRadius="md"
            w="31%"
            position="relative"
            transition="all 0.4s ease"
            _hover={{boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.181) 0px 2px 26px 0px", transition:"all 0.4s ease"}}
          >
            <Flex h="60%" w="100%" bg="#fcf2d2">
              <Box>
                {/* <Flex
                  h="1.6rem"
                  w="60%"
                  align="center"
                  px="8px"
                  bgImage='url("https://assets.pharmeasy.in/web-assets/dist/1602b4ce.svg")'
                >
                  <Text fontSize="12px" fontWeight="700" color="#fff">
                    UPTO 60% OFF
                  </Text>
                </Flex> */}
                <Flex align="center" padding="30px 25px">
                  <Text fontSize="20px" fontWeight="700" color="#4f585e">
                    {category.name}
                  </Text>
                </Flex>
              </Box>
              <Image
                position="absolute"
                w="45%"
                right="0"
                src={category.image}
              />
            </Flex>
            <Flex align="center" h="40%" px="40px">
            <Button
                h="45px"
                w="135px"
                fontWeight="700"
                fontSize="16px"
                color="white"
                variant="#fc8018"
                cursor="pointer"
                bg="#fc8018"
                _hover={{ bg: "#f79545" }}
                onClick={()=>{selectCategory(category.name)}}
              >
                Order Now
              </Button>
            </Flex>
          </Box>
          ))
        }
        
        {/* <Box
          border="1px solid silver"
          overflow="hidden"
          borderRadius="md"
          w="31%"
          position="relative"
          transition="all 0.4s ease"
          _hover={{boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.181) 0px 2px 26px 0px", transition:"all 0.4s ease"}}
        >
          <Flex h="60%" w="100%" bg="#d6f0ff">
            <Box>
              <Flex
                h="1.7rem"
                w="99%"
                align="center"
                px="8px"
                bgImage='url("https://assets.pharmeasy.in/web-assets/dist/1602b4ce.svg")'
              >
                <Text fontSize="12px" fontWeight="700" color="#fff">
                  UPTO 70% OFF
                </Text>
              </Flex>
              <Flex align="left" padding="30px 25px" direction="column" justify="center">
                <Text fontSize="20px" fontWeight="700" color="#4f585e">
                  Lab Tests
                </Text>
                <Text color="#fff" fontSize="11px" fontWeight="700" w="45%" p=" 1px" borderRadius="lg" className="newTag" bg="rgb(71, 129, 236) linear-gradient(111.54deg, rgb(71, 129, 236) 27.04%, rgba(255, 255, 255, 0.314) 51.42%, rgb(71, 129, 236) 73.38%) repeat scroll 0% 0% / auto padding-box border-box">NEW</Text>
              </Flex>
            </Box>
            <Image
              position="absolute"
              w="45%"
              right="0"
              src="https://assets.pharmeasy.in/web-assets/dist/e1d3ac1c.png?dim=186x0&dpr=2&q=100"
            />
          </Flex>
          <Flex align="center" h="40%" px="40px">
            <Button
              h="45px"
              w="135px"
              fontWeight="700"
              fontSize="16px"
              color="white"
              variant="#01b9e1"
              cursor="pointer"
              bg="#01b9e1"
              _hover={{ bg: "#33d0f3" }}
            >
              Book Now
            </Button>
          </Flex>
        </Box> */}
      </Flex>
    </div>
  );
};

export default HomeCatagoryCards;