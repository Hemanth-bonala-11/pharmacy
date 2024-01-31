import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { allCatagoryMenu } from "../../Media/allCatagoryMenu";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, fetchPagedProducts, fetchProducts } from "../../api/productAPi";
import { HomeApi } from "../../api";
import { fetchHomeCategories } from "../../Redux/categories/action";

const AllCatagorymenu = () => {
  const [categoryName, setCategory] = useState("");
  const [categoryId, setCategoryId] = useState(null);
  const [subCategoryName, setSubCategoryName] = useState("");
  const [subCategoryId, setSubcategoryId] = useState(null);
  const [productsList, setProductsList] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [showLoadingCards, SetShowLoadingCards] = useState(false);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.list);

  const fetchProducts = async (page) => {
    try {
      SetShowLoadingCards(true);
      const response = await fetchAllProducts({
        subCategoryName,
        subCategoryId,
        page,
      });
      setProductsList(response.data.data);
      SetShowLoadingCards(false);
      if (response.data.data.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    categories &&
      categories.map((item) => {
        if (item.name === categoryName) {
          let subcategory_all = {
            id: item.id,
            image: item.image,
            name: item.name,
          };

          if (item.sub_categories.length > 0) {
            setSubCategoryName(item.name);
            setSubcategoryId(item.id);
            setCategoryId(null);
          } else {
            setCategory(categoryName);
            setSubCategoryName(categoryName);
            setCategoryId(item.id);
            setSubcategoryId(item.id);
          }
        }
        return 0;
      });
  }, [categoryName, categories]);

  useEffect(() => {
    if (categories && categories.length > 0) {
      if (categoryName) {
        setCategory(categoryName);
      } else {
        let firstCategory = categories[0]["name"];
        setCategory(firstCategory);
        setCategoryId(categories[0]["id"]);
      }
    }
  }, [categories, categoryName]);

  useEffect(() => {
    setHasMore(true);
    setPage(1);
    if (subCategoryName && subCategoryId && page) {
      setProductsList([]);
      fetchProducts(1);
    }
    setSubCategoryName(subCategoryName);
  }, [subCategoryName, subCategoryId, page]);

  const fetchMoreProducts = async (newPage) => {
    try {
      const response = await fetchPagedProducts({
        subCategoryName,
        subCategoryId,
        page: newPage,
      });

      if (response.data.data.length === 0) {
        setHasMore(false);
      } else {
        setProductsList((prevProducts) => {
          const uniqueProducts = [
            ...new Map(
              [...prevProducts, ...response.data.data].map((item) => [
                item.id,
                item,
              ])
            ).values(),
          ];
          setPage(newPage);
          return uniqueProducts;
        });
      }
    } catch (error) {
      console.error("Error fetching more products:", error);
    }
  };

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await HomeApi.fetchCategories();
        dispatch(fetchHomeCategories(response.data.data));
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
    getCategories();
  }, [dispatch]);

  return (
    <Flex
      minHeight="100%"
      marginY="4"
      flexWrap="wrap"
      justify="space-between"
    >
      {productsList?.map((elem) => (
        <Flex
          key={elem.id}
          border="1.5px solid #dfe3e6"
          w={['100%', '48%', '32%']}
          h="112px"
          borderRadius="md"
          align="center"
          textAlign="left"
          cursor="pointer"
          transition="all 0.4s ease"
          _hover={{
            boxShadow: "rgba(22, 135, 110, 1) 0px 0px 5px 2px ",
            transition: "all 0.4s ease",
            transform: "scale(1.02)",
          }}
          marginBottom="4"
        >
          <Flex h="112px" w="100%" p="20px">
            <Flex
              w="28%"
              transition="transform 0.4s ease-in-out"
              borderRadius="md"
              overflow="hidden"
            >
              <Image
                w="90%"
                src={elem.photo}
                _hover={{ transform: "scale(1.1)" }}
                transition="transform 0.4s ease-in-out"
                borderRadius="md"
              />
            </Flex>
            <Flex
              w="70%"
              direction="column"
              justify="space-between"
              paddingLeft="4"
            >
              <Text fontSize="16px" fontWeight="500" color="#4f585e">
                {elem.product_name}
              </Text>
              <Text fontSize="16px" fontWeight="500" color="#4f585e">
                ₹{elem.price}
              </Text>
              <Button
                colorScheme="teal"
                variant="outline"
                size="md" // Adjusted button size
                mt="2"
                width="70%" // Decreased button width
                onClick={() => {
                  // Add to cart functionality
                }}
              >
                Add to Cart
              </Button>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default AllCatagorymenu;
