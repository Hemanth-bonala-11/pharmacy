import { Box, Flex, Text } from '@chakra-ui/react';
import ReviewCarouselElements from './ReviewCarousalElements';

const ReviewCarousel = () => {
  return (
    <Box
      h={['auto', '24rem']}
      w="100%"
      position={'relative'}
      // border={'1px solid red'}
    >
      <Flex
        flexDirection={['column', 'row']}
        align={['flex-start', 'center']}
        justify={['center', 'space-between']}
        // py={['10px', '20px']}
        mb={['20px', 0]}
      >
        <Flex className="left" align="center" mb={['10px', 0]} pr={[0, '20px']}>
          <Text fontSize={['18px', '20px']} fontWeight="700" color="#4f585e">
            What our customers have to say
          </Text>
        </Flex>
        <Flex className="right" align="center">
          <Flex className="arrow" w={['80%', '9rem']} h={['1px', '100%']} bg="#4f585e"></Flex>
        </Flex>
      </Flex>
      <ReviewCarouselElements />
    </Box>
  );
};

export default ReviewCarousel;
