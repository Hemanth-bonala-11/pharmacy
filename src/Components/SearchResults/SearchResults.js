import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Center, Text, Flex } from "@chakra-ui/react";
import ProductCard from "../ProductsComponents/ProductCard";

const SearchResults = (props) => {
  const ref = useRef();

  useEffect(() => {
    if (props.isVisible) {
      props.fetchMoreItems();
    }
  }, [props.isVisible]);

  return (
    <Flex
      className="search-result-container"
      position="fixed"
      margin="auto"
      zIndex="999"
      width="60%" // Adjust the width as needed
      textAlign="center"
      backgroundColor="white"
      boxShadow="0 4px 16px rgba(31, 38, 135, 0.1)"
      padding="1rem"
      maxHeight="80vh" // Adjust the height as needed
      overflowY="scroll"
      left="0"
      right="0"
      direction="column" // Set the direction to column
    >
      <Text as="h3">Results</Text>
      {props.data && props.data.length > 0 ? (
        <Flex wrap="wrap" justify="space-between">
          {props.data.map((item) => (
            <Box key={item.id} width={['100%', '48%', '32%']} marginBottom="1rem">
              <ProductCard
                title={item.product_name}
                quantity={item.description}
                price={item.price_variation?.price || item.price}
                image={item.photo}
                id={item.id}
                description={item.description}
                category={item.category?.name || ""}
                oldprice={item.price_variation?.market_price || item.market_price}
                outofstock={item.out_of_stock}
                quantity_remaining={item.quantity_remaining}
                height="15rem" // Adjust the height as needed
              />
            </Box>
          ))}
        </Flex>
      ) : null}
      {props.searchTerm.length > 0 && props.data.length === 0 ? (
        <Text className="everything-delivery-message">
          Can't find what you're looking for? Try
          <Link
            style={{ textDecoration: "none" }}
            to="/everythingdelivery"
            onClick={() => {
              props.overlayHandler(false);
              props.resultsHandler(false);
            }}
          >
            {" "}
            <strong className="everything-delivery-message">
              Make Your Own List
            </strong>
          </Link>
        </Text>
      ) : null}
      <Center>
        {props.loadMore && props.data.length % 10 === 0 && props.data.length > 0 ? (
          <Button
            ref={ref}
            onClick={props.fetchMoreItems}
            className="btn load-more"
            backgroundColor="#ff9b9b"
            fontSize="0.8rem"
            padding="0.3rem 0.8rem"
            borderRadius="0.3rem"
            marginTop="1rem"
            _hover={{ backgroundColor: "#e97979" }}
          >
            Load More
          </Button>
        ) : null}
      </Center>
    </Flex>
  );
};

export default SearchResults;
