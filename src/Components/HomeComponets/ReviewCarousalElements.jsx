import React from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import Slider from 'react-slick';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { reviewData } from '../../Media/reviews';
import ReviewCarouselCard from './ReviewCarousalCard';

// Settings for the slider
const settings = {
  dots: false,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3500,
  slidesToShow: 4,
  slidesToScroll: 1,
};

export default function ReviewCarouselElements() {
  const [slider, setSlider] = React.useState();

  return (
    <Box
      height={['auto', '265px']}
      padding="10px"
      width="100%"
      overflow="hidden"
      borderRadius="0"
      zIndex="0"
    >
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
        position={['absolute', 'absolute']}
        left={[0, 1220]}
        top={[10, 10]}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        color="#5a6369"
        borderRadius="md"
        height="35px"
        transition="all 0.4s ease"
        _hover={{
          bg: 'white',
          transition: 'all 0.4s ease',
          boxShadow:
            'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.12) 0px 2px 16px 0px',
        }}
        _active={{}}
        onClick={() => slider?.slickPrev()}
      >
        <BsArrowLeftShort fontSize="35px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position={['absolute', 'absolute']}
        borderRadius="md"
        transition="all 0.4s ease"
        right={[0, 2]}
        top={[10, 10]}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        color="#5c656b"
        height="35px"
        _hover={{
          bg: 'white',
          transition: 'all 0.4s ease',
          boxShadow:
            'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.12) 0px 2px 16px 0px',
        }}
        _active={{}}
        onClick={() => slider?.slickNext()}
      >
        <BsArrowRightShort fontSize="35px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {reviewData.map((elem, index) => (
          <ReviewCarouselCard key={elem.id} elem={elem} />
        ))}
      </Slider>
    </Box>
  );
}
