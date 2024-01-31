import {
  Box,
  Center,
  Flex,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function ReviewCarouselCard({ elem }) {
  return (
    <Center
      h={['auto', '23rem']}
      marginX="5px"
    >
      <Stack
        w={{ base: "100%", md: "580px" }}
        height={{ base: "auto", md: "23rem" }}
        direction={{ base: "column", md: "row" }}
        padding={2}
      >
        <Flex
          height={{ base: "auto", md: "70%" }}
          w="100%"
          cursor="pointer"
          transition="all 0.4s ease"
          direction="column"
          overflow="hidden"
          color="#4f585e"
          textAlign="left"
        >
          <Box h={{ base: "auto", md: "25%" }} w="100%">
            <Text fontWeight="700" fontSize="14px">
              {elem.name}
            </Text>
            <Text fontWeight="500" color="silver" fontSize="14px">
              {elem.date}
            </Text>
          </Box>
          <Box h={{ base: "auto", md: "75%" }} w="100%" bg="#f2fff8" p="15px">
            <Image w="7%" py="6px" src="https://assets.pharmeasy.in/web-assets/dist/d29d41d8.svg" />
            <Text fontSize="12px">{elem.body}</Text>
          </Box>
        </Flex>
      </Stack>
    </Center>
  );
}
