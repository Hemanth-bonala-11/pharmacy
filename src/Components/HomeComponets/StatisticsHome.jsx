import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';

const StatisticsHome = () => {
  const tenant = useSelector((store) => store.tenant.details);

  return (
    <Box
      height={['auto', '18rem']}
      marginY={['20px', '60px']}
      color="#4f585e"
      textAlign="left"
    >
      <Flex
        flexDirection={['column', 'row']}
        align="center"
        justify="space-around"
        height="100%"
      >
        <Box w={['100%', '25%']} mb={['20px', 0]}>
          <Image src="https://assets.pharmeasy.in/web-assets/dist/4d2f7c48.svg" />
          <Heading
            letterSpacing=".8px"
            py={['15px', '25px']}
            fontSize={['35px', '45px']}
            fontWeight="700"
          >
            25 Million
          </Heading>
          <Text
            wordSpacing=".5px"
            fontSize={['14px', '18px']}
            fontWeight="600"
          >
            Registered Users as of Jun 30, 2021
          </Text>
        </Box>
        <Box w={['100%', '25%']} mb={['20px', 0]}>
          <Image src="https://assets.pharmeasy.in/web-assets/dist/92c372bb.svg" />
          <Heading
            letterSpacing=".8px"
            py={['15px', '25px']}
            fontSize={['35px', '45px']}
            fontWeight="700"
          >
            8.8 Million
          </Heading>
          <Text
            wordSpacing=".5px"
            fontSize={['14px', '18px']}
            fontWeight="600"
          >
            {tenant.title} Orders as of FY21
          </Text>
        </Box>
        <Box w={['100%', '25%']} mb={['20px', 0]}>
          <Image src="https://assets.pharmeasy.in/web-assets/dist/773ae9c5.svg" />
          <Heading
            letterSpacing=".8px"
            py={['15px', '25px']}
            fontSize={['35px', '45px']}
            fontWeight="700"
          >
            50K+
          </Heading>
          <Text
            wordSpacing=".5px"
            fontSize={['14px', '18px']}
            fontWeight="600"
          >
            SKUs sold in Q1FY22
          </Text>
        </Box>
        <Box w={['100%', '25%']} mb={['20px', 0]}>
          <Image src="https://assets.pharmeasy.in/web-assets/dist/f2d557d3.svg" />
          <Heading
            letterSpacing=".8px"
            py={['15px', '25px']}
            fontSize={['35px', '45px']}
            fontWeight="700"
          >
            18K+
          </Heading>
          <Text
            wordSpacing=".5px"
            fontSize={['14px', '18px']}
            fontWeight="600"
          >
            Pin-Codes Serviced for the month of June 2021
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default StatisticsHome;
