import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  HStack,
  Stack,
  Collapse,
  useDisclosure,
  Input,
  Image,
  Center,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import logo from "../Media/logo.png";
import { useSelector, useDispatch } from "react-redux";

import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { PincodeSlider } from "../Components/NavbarComponents/PincodeSlider.jsx";
import { LoginSignupSlider } from "../Components/NavbarComponents/LoginSignupSlider";
import { Link } from "react-router-dom";
import { LoginIndivisualSlider } from "./NavbarComponents/LoginIndivisualSlider";
import { getCartItems } from "../Redux/Cart/action";
import UploadSlider from "../Components/NavbarComponents/UploadSlider.jsx"; // Import the UploadSlider component
import { fetchTenant } from "../Redux/Company/action.js";
import { fetchTenantDetails } from "../api/HomeAPi.js";
import { debounce } from "../utils/deboundeUtil.js";

const Navbar = (props) => {
  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isUploadOpen, onOpen: onUploadOpen, onClose: onUploadClose } = useDisclosure();
  const tenant = useSelector((store)=>store.tenant.details)

  const [nav, setNav] = useState(false);

  window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      setNav(false);
    } else {
      setNav(true);
    }
  }

  const isAuth = useSelector((store) => store.auth.isAuth);
  console.log(isAuth, "isauth");
  const userId = useSelector((store) => store.auth.id);

  //! total cart items
  const dispatch = useDispatch();
  const [tenantDetails, setTenantDetails] = useState([]);
  const isLoggedIn = localStorage.getItem("auth_token")
  const setTitle = (data)=>{
        const fevicon = data.logo ;
        const title = data.title || 'Aiktech pharmacy Template';

        document.getElementById('websiteFevicon').setAttribute('href', fevicon);
        document.getElementById('websiteTitle').innerText = title;
  }
  const getCompanyDetails =async ()=>{
    const response = await fetchTenantDetails();
    console.log(response.data,"tenant details");
    setTitle(response.data)
    setTenantDetails(response.data)
    dispatch(fetchTenant(response.data))
  }
  useEffect(()=>{
    if(tenant.length === 0){
      getCompanyDetails()  
    }
  },[])
  useEffect(() => {
    if (userId) {
      dispatch(getCartItems(userId));
    }
  }, [dispatch]);

  const cartData = useSelector((store) => store.cart.cart);
  console.log(tenant,"tenant");

  return (
    <Box height={nav ? "123px" : "80px"}>
      <Box
        position="fixed"
        w="100%"
        bg=" rgb(16, 132, 126) none repeat scroll 0% 0% / auto padding-box border-box"
        padding="15px 0px"
        outline="rgb(79, 88, 94) none 0px"
        vertical-align="baseline"
        zIndex={200}
        height={nav ? "123px" : "80px"}
        transition="all 0.4s ease"
      >
        <Flex height={"100px"} px={{ base: 10 }} align={"center"}>
          <Flex flex={{ base: 1, md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
            <IconButton onClick={onToggle} icon={isOpen ? (<CloseIcon w={3} h={3} />) : (<HamburgerIcon w={5} h={5} />)} variant={"ghost"} aria-label={"Toggle Navigation"} />
          </Flex>
          <Flex width="14%" height="100%" align="start" marginRight={"10px"}>
            <Link to="/">
              <Image box-sizing="border-box " maxWidth="100%" maxHeight="4rem" margin="0px " padding="0px " vertical-align="baseline" src={tenant?.logo} />
            </Link>
          </Flex>
          <Box height="100%" w="100%">
            <Box display={{ base: "none", md: "flex" }} ml={10} height="50%">
              <Flex className="Searchbox" height="100%" w="77%" align="center">
                <HStack className="pincode" w="18%" height="99.8%" fontWeight="400">
                  <PincodeSlider />
                </HStack>
                <Input
                  className="searchInput"
                  w="56%"
                  h="100%"
                  placeholder="Search medicines/Healthcare products"
                  color="#97a6b1"
                  bg="white"
                  border=".1px solid silver"
                  borderRadius="0"
                  focusBorderColor="none"
                  letterSpacing=".1px"
                  fontWeight="400"
                  onChange={debounce((event) => {
                    props.search(event.target.value);
                  }, 400)}
                />
                <Box className="searchBtn" w="6%" height="99.8%">
                  <Button w="100%" height="100%" borderLeftRadius="0">
                    <SearchIcon color="#8897a2" size="3rem" fontWeight="bold" />
                  </Button>
                </Box>
                
              
                  
                    {/* <Button w="100%" height="100%" color="green">
                      UPLOAD
                    </Button> */}
                 <UploadSlider/>
                
              </Flex>
              { (
                <HStack w="22%" justify="space-between" px={"2%"}>
                  <Flex>
                    <Image src="https://assets.pharmeasy.in/web-assets/dist/5eb42971.svg" />
                    {
                      isLoggedIn?(
                        <div>continue</div>
                      ):(
                        <LoginSignupSlider />
                      )
                    }


                  </Flex>
                  <Link to="/cart">
                    <Flex position="relative">
                      <Image src="https://assets.pharmeasy.in/web-assets/dist/21b0b5ba.svg" />
                      <Text color="white">Cart</Text>
                      <Center position="absolute" left="-2" top="-2" variant="solid" bg="#f76b6c" colorscheme="#f76b6c" borderRadius="50" w="1.6rem" h="1rem" color="white" fontSize="11" fontWeight="bold">
                        {cartData?.length}
                      </Center>
                    </Flex>
                  </Link>
                </HStack>
              )}
            </Box>
          
          </Box>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify={"flex-end"} direction={"row"} spacing={6}></Stack>

        <Collapse in={isOpen} animateOpacity></Collapse>
      </Box>

      {/* UploadSlider as Drawer */}
      <Drawer isOpen={isUploadOpen} placement="right" size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Upload Prescription</DrawerHeader>
          <DrawerBody>
            {/* Render the UploadSlider component */}
            <UploadSlider />
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onUploadClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
