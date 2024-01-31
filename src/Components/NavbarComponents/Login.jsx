import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Stack,
  Box,
  FormLabel,
  Input,
  Text,
  Flex,
  Image,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";

export function LoginUIComponent({ isOpen, onClose, firstField, handleLogin, setPhoneNumber, setPassword, show, handleClick }) {
  return (
    <div>
      <Drawer
        placement="right"
        initialFocusRef={firstField}
        position="relative"
        size={"sm"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            position="absolute"
            left="-50px"
            top="25px"
            bg="#0f847e"
            p="28px"
            borderRadius="0"
            color="white"
            _hover={{ bg: "#0f847e" }}
            _active={{ bg: "#0f847e" }}
            fontSize="14px"
          />
          <DrawerHeader
            borderBottomWidth="1px"
            bg="#0f847e"
            minH="110px"
            align="end"
            py="0"
            px="40px"
          >
            <Flex justify="space-between" h="100%" w="100%">
              <Flex
                h="80%"
                w="50%"
                justify="center"
                align="end"
              >
                <Image
                  h="62%"
                  src={"Your logo source"}
                />
              </Flex>
              <Flex
                align="end"
                w="50%"
                h="100%"
                justify="end"
              >
                <Image
                  h="75%"
                  src="https://assets.pharmeasy.in/web-assets/dist/1fe1322a.svg"
                />
              </Flex>
            </Flex>
          </DrawerHeader>

          <DrawerBody px="50px">
            <Stack spacing="20px">
              <Box>
                <FormLabel
                  htmlFor="phone"
                  fontWeight="700"
                  py="12px"
                  color="#4f585e"
                >
                  Quick Login
                </FormLabel>
                <Stack spacing="20px">
                  <Input
                    h="2.8rem"
                    ref={firstField}
                    type="number"
                    pattern="^\+?[1-9]\d{1,14}$"
                    letterSpacing=".2px"
                    outline=".1px solid black"
                    focusBorderColor="none"
                    placeholder="Enter your mobile number"
                    onChange={(e) => {
                      setPhoneNumber(e.target.value)
                    }}
                  />

                  <InputGroup h="2.8rem">
                    <Input
                      h="2.8rem"
                      letterSpacing=".2px"
                      outline=".1px solid black"
                      focusBorderColor="none"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="2rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                 
                </Stack>
              </Box>
              <Button
                h="2.8rem"
                variant="#0f847e"
                bg="#0f847e"
                color="#fff"
                _hover={{ bg: "#159a94" }}
                onClick={handleLogin}
              >
                Login
              </Button>
            </Stack>
            <Text fontSize="12px" color="#4f585e" py="20px">
              By clicking continue, you agree with our{" "}
              <span style={{ color: "#159a94", cursor: "pointer" }}>
                {" "}
                Privacy Policy
              </span>
            </Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
