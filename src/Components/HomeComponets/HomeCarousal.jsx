import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';

import Slider from 'react-slick';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function HomeCarousal() {
  const offers = useSelector((store)=>store.offers.list)

  const [slider, setSlider] = React.useState()
  const navigate = useNavigate()

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  console.log(offers,"offers");


  


  return (
    <Box
      position={'relative'}
      height={'260px'}
      width={'full'}
      overflow={'hidden'}
      borderRadius="0"
        zIndex="0">
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={0}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        color="white"
        paddingRight="5rem"
        height="100%"
        borderRadius="0"
        bg=" linear-gradient(-90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))"
        _hover={{bg:" linear-gradient(-90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))"}}
        _active={{bg:" linear-gradient(-90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))"}}
        onClick={() => slider?.slickPrev()}>
        <ChevronLeftIcon fontSize="60px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        borderRadius="0"
        right={0}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        color="white"
        paddingLeft="5rem"
        height="100%"
        bg=" linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))"
        _hover={{bg:" linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))"}}
        _active={{bg:" linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))"}}
        onClick={() => slider?.slickNext()}>
        <ChevronRightIcon fontSize="60px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {offers && offers.length!==0 && offers.map((offer, index) => (
          <Box
            onClick={()=>{navigate(offer.action_link)}}
            key={index}
            height={"260px"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={offer.desktop_view_image}>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}