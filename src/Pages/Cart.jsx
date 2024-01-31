import React, { useState, useEffect } from 'react';
import { fetchCartDetails } from '../api/cartApi';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
  Image,
  Text,
  Select,
  Button,
} from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartPage = () => {
  const [cartData, setCartData] = useState(null);
  const isLoggedIn = localStorage.getItem("auth_token");

  useEffect(() => {
    if (isLoggedIn) {
      getCart();
    }
  }, [isLoggedIn]);

  const getCart = () => {
    fetchCartDetails()
      .then(response => {
        setCartData(response.data);
      })
      .catch(error => {
        console.error('Error fetching cart data:', error);
      });
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    // Implement the logic to update the quantity in the backend (e.g., API call)
    // For demonstration purposes, we'll update the local state directly
    setCartData(prevData => {
      const updatedCart = prevData.cartitem.map(item => {
        if (item.id === itemId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      return { ...prevData, cartitem: updatedCart };
    });
  };

  const handlePlaceOrder = () => {
    // Implement the logic to place the order
  
    // Display a toast notification
    // toast.success('Your order has been placed!', {
    //   position: toast.POSITION.TOP_CENTER,
    // });
    alert('order placed')
  };
  

  return (
    <Box maxW={{ base: '3xl', lg: '7xl' }} mx="auto" px={{ base: '4', md: '8', lg: '12' }} py={{ base: '6', md: '8', lg: '12' }}>
      <Stack direction={{ base: 'column', lg: 'row' }} align={{ lg: 'flex-start' }} spacing={{ base: '8', md: '16' }}>
        <Stack spacing={{ base: '8', md: '10' }} flex="2">
          <Heading fontSize="2xl" fontWeight="extrabold">
            Your Cart ({cartData?.cartitem?.length} items)
          </Heading>

          <Stack spacing="6">
            {cartData?.cartitem?.map(item => (
              <Box key={item.id} borderWidth="1px" borderRadius="md" p={4} width="100%">
                <Image src={item.photo} alt={item.product_name} maxH="150px" objectFit="cover" />
                <Text fontWeight="bold" fontSize="lg" mt={2}>{item.product_name}</Text>
                <Text color="gray.500" fontSize="sm">{item.product_description}</Text>
                <Text fontWeight="bold" fontSize="lg" mt={2}>${item.final_price}</Text>

                {/* Quantity dropdown */}
                <Text mt={2}>Quantity</Text>
                <Select
                  mt={2}
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                >
                  {[...Array(10)].map((_, index) => (
                    <option key={index} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </Select>

                {/* Add any other details you want to display */}
                {/* Example: Remove button, etc. */}
              </Box>
            ))}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          {/* Add your CartOrderSummary component or code here */}
          {/* Example: <CartOrderSummary /> */}

          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
          </HStack>

          {/* Place Order button (centered) */}
          <Button mt="auto" colorScheme="blue" onClick={handlePlaceOrder}>
            Place Order
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};

export default CartPage;
