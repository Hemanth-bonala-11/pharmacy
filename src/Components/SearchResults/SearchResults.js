import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Center, Text } from "@chakra-ui/react";
import ProductCard from "../ProductsComponents/ProductCard";

const SearchResults = (props) => {
  const ref = useRef();

  useEffect(() => {
    if (props.isVisible) {
      props.fetchMoreItems();
    }
  }, [props.isVisible]);

  return (
    <Box
      className="search-result-container"
      position="fixed"
      margin="auto"
      zIndex="999"
      width="100%"
      textAlign="center"
      backgroundColor="white"
      maxWidth="90vw"
      boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
      padding="1rem 0rem 8rem 0rem"
      maxHeight="calc(100vh - 6rem)"
      overflowY="scroll"
      left="0"
      right="0"
    >
      <Text as="h3">Results</Text>
      {props.data && props.data.length > 0
        ? props.data.map((item) => (
            <ProductCard
              key={item.id}
              title={item.product_name}
              quantity={item.description}
              price={
                item.hasOwnProperty("price_variation")
                  ? item.price_variation["price"]
                  : item.price
              }
              image={item.photo}
              id={item.id}
              description={item.description}
              category={item.category ? item.category.name : ""}
              oldprice={
                item.hasOwnProperty("price_variation")
                  ? item.price_variation["market_price"]
                  : item.market_price
              }
              outofstock={item.out_of_stock}
              quantity_remaining={item.quantity_remaining}
            />
          ))
        : null}
      {props.searchTerm.length > 0 && props.data.length === 0 ? (
        <Text className="everything-delivery-message">
          Can't find what you're looking for, try
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
        {props.loadMore &&
          props.data.length % 10 === 0 &&
          props.data.length > 0 ? (
          <Button
            ref={ref}
            onClick={props.fetchMoreItems}
            className="btn load-more"
            backgroundColor="#ff9b9b"
            fontSize="0.9rem"
            padding="0.5rem 1rem"
            borderRadius="0.3rem"
            marginTop="1rem"
            _hover={{ backgroundColor: "#e97979" }}
          >
            Load More
          </Button>
        ) : null}
      </Center>
    </Box>
  );
};

export default SearchResults;