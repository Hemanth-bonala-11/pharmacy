import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

const AboutUs = () => {
  return (
    <Box>
      {/* Banner */}
      <Flex
        align="center"
        justify="center"
        direction="column"
        bg="teal.500"
        color="white"
        p={10}
        mb={8}
      >
        <Heading as="h1" fontSize="4xl">
          About Us
        </Heading>
        <Text fontSize="lg" mt={4}>
          Get your Grocery Delivered Instantly with Phurti Express
        </Text>
      </Flex>

  

     

     

      {/* Terms and Conditions */}
      <Box mt={8}>
        <Heading fontSize="lg">Terms and Conditions</Heading>
        <Text mt={4}>
          Add your terms and conditions content here...
        </Text>
      </Box>

      {/* Payment Methods */}
      <Box mt={8}>
        <Heading fontSize="lg">Payment Methods</Heading>
        <Text mt={4}>
          Add your payment methods content here...
        </Text>
      </Box>

      {/* Return Policy */}
      <Box mt={8}>
        <Heading fontSize="lg">Return Policy</Heading>
        <Text mt={4}>
          Add your return policy content here...
        </Text>
      </Box>

      {/* Privacy Policy */}
      <Box mt={8}>
        <Heading fontSize="lg">Privacy Policy</Heading>
        <Text mt={4}>
          Add your privacy policy content here...
        </Text>
      </Box>

      {/* Contact Us */}
      <Box mt={8}>
        <Heading fontSize="lg">Contact Us</Heading>
        <Text fontSize="xl" fontWeight="bold" mt={2}>
          Address
        </Text>
        <Text mt={2}>
          No. 37/a, Adjacent to vars carlton court, opposite of vars camelia Bangalore, Karnataka 560048
        </Text>
        <Text fontSize="xl" fontWeight="bold" mt={4}>
          Phone
        </Text>
        <Text mt={2}>
          +918861144646
        </Text>
        <Text fontSize="xl" fontWeight="bold" mt={4}>
          E-mail
        </Text>
        <Text mt={2}>
          ziyuzabi@gmail.com
        </Text>
      </Box>
    </Box>
  );
};

export default AboutUs;
