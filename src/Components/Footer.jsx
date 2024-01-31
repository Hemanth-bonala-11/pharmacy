import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  Heading,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { useSelector } from "react-redux";


export default function LargeWithLogoCentered() {
  const tenant = useSelector((store)=>store.tenant.details);
  const categories = useSelector((store)=>store.categories.list);
  
  return (
    <Box bg="#f4f7fb" color={useColorModeValue("gray.700", "gray.200")} py={10}>
      <Container as={Stack} maxW={"100%"}  color="#4f585e" px="50px">
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={15}
        >
          <Stack align={"flex-start"} spacing="22px">
            <Stack align={"flex-start"} spacing="6px">
              <Heading
                marginBottom="8px"
                fontSize="16px"
                fontWeight="700"
                color="#4f585e"
              >
                Company
              </Heading>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                About Us
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                Partner with {tenant.title}
              </Link>
            </Stack>
            {/* ok */}
            {/* <Stack align={"flex-start"} spacing="6px">
              <Heading
                marginBottom="8px"
                fontSize="16px"
                fontWeight="700"
                color="#4f585e"
              >
                Our Services
              </Heading>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                Order Medicine
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                Healthcare Products
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                Lab Tests
              </Link>
            </Stack> */}
          </Stack>
          <Stack align={"flex-start"} spacing="6px">
            <Heading
              marginBottom="8px"
              fontSize="16px"
              fontWeight="700"
              color="#4f585e"
            >
              Featured Categories
            </Heading>
            {
              categories.map((category)=>{
                return(
                  <Link
              style={{ textDecoration: "none" }}
              href={"#"}
            >
              {category.name}
            </Link>
                )
              })
            }
            
            
          </Stack>
          {/* <Stack align={"flex-start"} spacing="22px">
            <Stack align={"flex-start"} spacing="6px">
              <Heading
                marginBottom="8px"
                fontSize="16px"
                fontWeight="700"
                color="#4f585e"
              >
                Need Help
              </Heading>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                Browse All Medicines
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                Browse All Molecules
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                Browse All Cities & Areas
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                FAQs
              </Link>
            </Stack>
            <Stack align={"flex-start"} spacing="6px">
              <Heading
                marginBottom="8px"
                fontSize="16px"
                fontWeight="700"
                color="#4f585e"
              >
                Policy Info
              </Heading>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                Editorial Policy
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                Privacy Policy
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                Vulnerability Disclosure Policy
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                Terms and condition
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                Customer Support Policy
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                Return Policy
              </Link>
            </Stack>
          </Stack> */}
          <Stack
            align="flex-start"
            spacing="6px"
            width="100%"
            // border="1px solid red"
          >
            <Heading
              marginBottom="12px"
              fontSize="16px"
              fontWeight="700"
              color="#4f585e"
            >
              FOLLOW US
            </Heading>
            <Stack direction={"row"} align={"center"} spacing="5">
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                <IconButton
                  colorScheme="#0f847e"
                  bg="#0f847e"
                  aria-label="Call Segun"
                  size="md"
                  isRound={true}
                  icon={<AiOutlineInstagram fontSize="34px" />}
                />
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                <IconButton
                  colorScheme="#0f847e"
                  bg="#0f847e"
                  aria-label="Call Segun"
                  size="md"
                  isRound={true}
                  icon={<FaFacebookF fontSize="24px" />}
                />
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={
                  "#"
                }
              >
                <IconButton
                  colorScheme="#0f847e"
                  bg="#0f847e"
                  aria-label="Call Segun"
                  size="md"
                  isRound={true}
                  icon={<FaYoutube fontSize="24px" />}
                />
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                href={"#"}
              >
                <IconButton
                  colorScheme="#0f847e"
                  bg="#0f847e"
                  aria-label="Call Segun"
                  size="md"
                  isRound={true}
                  icon={<AiOutlineTwitter fontSize="32px" />}
                />
              </Link>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
      <Flex paddingBottom="20px" px={10} justify="space-between" >

            <Flex align="end" width="22%">
              <Text pt={6} fontSize={"md"}  color="#4f585e" textAlign="left" width="100%"  py="6px">
                © {new Date().getFullYear()} {tenant.title} All Rights Reserved
              </Text>
            </Flex>
      </Flex>
    </Box>
  );
}
