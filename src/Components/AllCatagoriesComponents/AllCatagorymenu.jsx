import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { allCatagoryMenu } from "../../Media/allCatagoryMenu";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  console.log(categories,"categories");
  return (
    <Flex
      height={"762px"}
      //  border="2px solid black"
      flexWrap={"wrap"}
      justify="space-between"
    >
      {categories.map((elem) => {
        
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
           <Link to={`/healthcare/products/}`}> <Flex h="112px" w="325px"  p=" 20px">
              {/* <Flex w="28%">
                <Image w="90%" src={elem.img} />
              </Flex> */}
              {/* <Text w="55%" fontSize="16px" fontWeight="500" color="#4f585e">
                {elem.catagory}
              </Text> */}
              <Text
                textAlign="right"
                w="25%"
                fontSize="14px"
                fontWeight="400"
                color="#0f847e"
              >
                &nbsp; Upto % off
              </Text>
            </Flex></Link>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default AllCatagorymenu;
