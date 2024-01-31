import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { allCatagoryMenu } from "../../Media/allCatagoryMenu";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, fetchPagedProducts, fetchProducts } from "../../api/productAPi";
import { HomeApi } from "../../api";
import { fetchHomeCategories } from "../../Redux/categories/action";

const AllCatagorymenu = () => {
  const [categoryName, setCategory] = useState("");
  const [categoryId, setCategoryId] = useState(null)
  const [subCategoryName, setSubCategoryName] = useState("");
  const [subCategoryId, setSubcategoryId] = useState(null)
  const [productsList, setProductsList] = useState(null);
  const [page, setPage]=useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [showLoadingCards, SetShowLoadingCards] = useState(false)
  const dispatch = useDispatch();
  
  const [loadingMore, setLoadingMore] = useState(false);
  const categories = useSelector(state => state.categories.list);
  const fetchProducts = async (page) => {
    try {
      SetShowLoadingCards(true)
      const response = await fetchAllProducts({ subCategoryName, subCategoryId, page });
      setProductsList(response.data.data);
      SetShowLoadingCards(false);
      if (response.data.data.length === 0) {
        setHasMore(false)
      }
    } catch (error) { }
  };
  console.log(categoryId,"category id");
  useEffect(() => {
    // setCategory(categoryName);
    
    categories && categories.map((item) => {
        if(item.name===categoryName){
          let subcategory_all = {
            id: item.id,
            image: item.image,
            name: item.name,
          }

          // let all_category = item.sub_categories.unshift(subcategory_all)
          
          
          if (item.sub_categories.length>0){
            setSubCategoryName(item.name)
            setSubcategoryId(item.id)
            setCategoryId(null)
          } 
          else{
            setCategory(categoryName);
            setSubCategoryName(categoryName)
            setCategoryId(item.id)
            setSubcategoryId(item.id)
            

          }
        }
        return 0
      })
        
  }, [categoryName]);
  useEffect(() => {
    if (categories && categories.length > 0) {

      if (categoryName) {
        setCategory(categoryName);

        const descOfCategory = categories.filter(item => {
          return (
            item.name === categoryName
          )
        })

//        setCategoryDescription(descOfCategory[0].desc);

      } else {
        let firstCategory = categories[0]["name"];
        let firstCategoryDesc = categories[0]["description"]
        setCategory(firstCategory);
        // setCategoryDescription(firstCategoryDesc);
        setCategoryId(categories[0]["id"])
      }
    }
  }, [categories]);
  console.log(categories,"categories");
  useEffect(() => {
    setHasMore(true);
    setPage(1);
    if (subCategoryName && subCategoryId && page) {
      setProductsList([]);
      fetchProducts(1)
      
    }
    setSubCategoryName(subCategoryName);
  }, [subCategoryName]);
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
            ...new Map([...prevProducts, ...response.data.data].map((item) => [item.id, item])).values(),
          ];
          setPage(newPage);
          return uniqueProducts;
        });
      }
    } catch (error) {
      console.log("Api error")
    }
  };
  useEffect( ()=>{
    async function getCategories(){
    const response =await HomeApi.fetchCategories();
    dispatch(fetchHomeCategories(response.data.data))

    }
    getCategories()
    
  },[])
  return (
    <Flex
      height={"762px"}
      //  border="2px solid black"
      flexWrap={"wrap"}
      justify="space-between"
    >
      {productsList?.map((elem) => {
        
        return (
           <Flex
            border="1.5px solid #dfe3e6"
            w="32%"
            h="112px"
            borderRadius="md"
            align="center"
            textAlign="left"
            cursor="pointer"
            transition="all 0.4s ease"
            _hover={{boxShadow:"rgba(22, 135, 110, 1) 0px 0px 5px 2px ",transition:"all 0.4s ease", transform:"scale(1.02)"}}
          >
            <Flex h="112px" w="325px"  p=" 20px">
              <Flex w="28%">
                <Image w="90%" src={elem.photo} />
              </Flex>
              <Text w="55%" fontSize="16px" fontWeight="500" color="#4f585e">
                {elem.product_name}
              </Text>
              <Text w="55%" fontSize="16px" fontWeight="500" color="#4f585e">
              ₹{elem.price}
              </Text>
              <Text w="55%" fontSize="16px" fontWeight="500" color="#4f585e">
                {elem.product_name}
              </Text>
              <Button
                textAlign="right"
                w="25%"
                fontSize="14px"
                fontWeight="400"
                color="#0f847e"
              >
                Add to cart
              </Button>
            </Flex>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default AllCatagorymenu;
