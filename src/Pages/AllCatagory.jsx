import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import AllCatagoryCarousel from '../Components/AllCatagoriesComponents/AllCatagoryCarousel'
import AllCatagoryDescription from '../Components/AllCatagoriesComponents/AllCatagoryDescription'
import AllCatagorymenu from '../Components/AllCatagoriesComponents/AllCatagorymenu'
import StatisticsAllCatagory from '../Components/AllCatagoriesComponents/StatisticsAllCatagory'

const AllCatagory = () => {
  return (
    <Box>
      <Box
      //  border={"1px solid red"}
      w="1024px"
      margin="auto"
      //  overflow="hidden"
      >
        {/* <Center   my="30px">
          <AllCatagoryCarousel/>
        </Center> */}
          <AllCatagorymenu/>
          {/* <AllCatagoryDescription/> */}
      </Box>
          {/* <StatisticsAllCatagory/> */}
    </Box>
  )
}

export default AllCatagory