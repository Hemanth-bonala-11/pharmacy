import {
  // ... other imports
  Input,
  Button,
  Box,
  Text,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  Image,
  Center,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAuthUser } from "../../Redux/Auth/action";
import LoginIndivisualSlider from "./LoginIndivisualSlider";
// import { LoginSLider } from "./LoginSlider";
import { placeOrder } from "../../api/OrdersApi";
import {LoginUIComponent} from "./Login";

export default function UploadSlider() {
  const [file, setFile] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const tenant = useSelector((store) => store.tenant.details);
  const isLoggedIn = localStorage.getItem("auth_token");
  const [showLogin, setShowLogin] = useState(!isLoggedIn); // Initially show the slider if not logged in

  // useEffect(() => {
  //   setShowLogin(!isLoggedIn); // Update showLogin when isLoggedIn changes
  // }, [isLoggedIn]);
  console.log(showLogin,"show login");
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const placeOrderWithPrescription = async (data) => {
    try {
      const response = await placeOrder(data);
      console.log(response, "response");
      // Additional logic or feedback for a successful order placement
    } catch (error) {
      console.error("Error placing order:", error);
      // Handle the error appropriately
    }
  };

  const handleUpload = async () => {
    if (!isLoggedIn) {
      setShowLogin(true);
      return; // Stop execution if the user is not logged in
    }

    if (file) {
      let formData = new FormData();
      formData.append("itemsList", file);

      placeOrderWithPrescription(formData);
    } else {
      // Handle case when no file is selected
      console.log("Please select a file.");
    }

    // Close the drawer
    setIsOpen(false);
  };

  return (
    <div>
      {/* Upload Section */}
      
        <Box>
          <Text
            transition="all .4s ease"
            borderBottom="2px solid rgba(16, 132, 126, 0) "
            paddding="2px"
            color="white"
            onClick={() => setIsOpen(true)}
            cursor="pointer"
            _hover={{
              borderBottom: "2px solid white",
              transition: "all .4s ease",
            }}
          >
            Upload
          </Text>
        </Box>
     
      {/* Upload Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={() => setIsOpen(false)} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          {!isLoggedIn ? (
            <>
            <LoginUIComponent />
            </>
          ) : (
            <>
              <DrawerHeader borderBottomWidth="1px" bg="#0f847e" color="white">
                <Center>
                  <Box>
                    <Image h="62px" src={tenant.logo} alt="logo" />
                  </Box>
                </Center>

                {/* Margin below the banner */}
                <Box pt={6}>
                  <Text fontSize="lg" fontWeight="bold" color="white">
                    Upload Prescription
                  </Text>
                </Box>
              </DrawerHeader>

              <DrawerBody>
                <Box>
                  <Input type="file" onChange={handleFileChange} accept=".jpg, .jpeg, .png, .pdf" />
                </Box>
                <Center mt={4}>
                  <Text fontSize="sm" color="gray.500">
                    Allowed formats: PDF, PNG, JPG
                  </Text>
                </Center>
                <Center mt={4}>
                  <Button
                    onClick={() => {
                      if (isLoggedIn) {
                        handleUpload();
                      } else {
                        setShowLogin(true);
                      }
                    }}
                    colorScheme="teal"
                    size="md"
                  >
                    Upload
                  </Button>
                </Center>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}
