import {VStack, Box, Image, Flex, Text, Heading, Link, Grid, GridItem} from '@chakra-ui/react';
import {motion, useAnimation} from 'framer-motion'

const Homepage = () => {
  const controls = useAnimation();

  return ( 
    <VStack
    bg='secondary' 
    bgGradient='linear(to-tr, primaryDark , secondaryDark)'
    >
      <Flex 
      w='100%' 
      h='100px' 
      p={2} 
      >
        <Link>Resume</Link>
      </Flex >

      <Grid
      gridTemplateColumns={['1fr', '1fr', 'repeat(2, 1fr)', 'repeat(2, 1fr)']}
      >
        <GridItem>
          <Text
          bgGradient='linear(to-r, primaryLight, secondaryLight)'
          bgClip='text'
          textAlign='center'
          fontSize='4xl'
          fontWeight='bold'
          my={3}
          >
            Pranav Kumar
          </Text>
        </GridItem>
        <GridItem>
          <Image src='./man-sitting.png'/>
        </GridItem>
      </Grid>
    </VStack>
   );
}
 
export default Homepage;