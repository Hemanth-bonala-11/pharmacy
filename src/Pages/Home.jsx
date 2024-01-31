import React from 'react'
import BrandsCarousel from '../Components/HomeComponets/BrandsCarousel'
import HomeCarousal from '../Components/HomeComponets/HomeCarousal'
import DealsOfTheDayCarousel from '../Components/HomeComponets/DealsOfTheDayCarousel'
import HomeBanner from '../Components/HomeComponets/HomeBanner'
import HomeCatagoryCards from '../Components/HomeComponets/HomeCatagoryCards'
import HomeDescription from '../Components/HomeComponets/HomeDescription'
import LabTestCarousal from '../Components/HomeComponets/LabTestCarousal'
import OffersCarousels from '../Components/HomeComponets/OffersCarousels'
import PharmEasyPlusBanner from '../Components/HomeComponets/PharmEasyPlusBanner'
import ReviewCarousel from '../Components/HomeComponets/ReviewCarousel'
import StatisticsHome from '../Components/HomeComponets/StatisticsHome'
import { fetchHomeCategories } from '../Redux/categories/action'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { HomeApi } from '../api'
import { fetchTenantOffers } from '../api/HomeAPi'
import { fetchOffers } from '../Redux/Offers/action'


const Home = () => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.list);
  
 
  useEffect( ()=>{
    async function getCategories(){
    const response =await HomeApi.fetchCategories();
    dispatch(fetchHomeCategories(response.data.data))

    }
    getCategories()
    
  },[])
  useEffect( ()=>{
    async function getOffers(){
    const response =await HomeApi.fetchTenantOffers();
    console.log(response,"offers response");
    dispatch(fetchOffers(response.data))
    }
    getOffers()
    
  },[])

  
  

  return (
    <div  >
        <HomeCarousal/>
        <div className="Content" style={{overflowX:"hidden", height:"100%" ,padding:"50px", position:"relative"}}>
            <HomeCatagoryCards />
            {/* <PharmEasyPlusBanner/> */}
            {/* <OffersCarousels/> */}
            
            {/* <BrandsCarousel/> */}
            {
              categories?.length!==0 && categories.map((category, index)=>{
                return category.home_page && (
                  index%2===0?(
                    <LabTestCarousal category={category}/>
                  ):(
                    <DealsOfTheDayCarousel category={category}/>
                  )
                )
              })
            }
            <StatisticsHome/>
            <ReviewCarousel/>
            {/* <HomeBanner/> */}
            {/* <HomeDescription/> */}
        </div>
    </div>
  )
}

export default Home