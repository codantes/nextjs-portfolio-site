import {VStack, Box, Image, Flex, Text, Heading, Link, Grid, GridItem, Button} from '@chakra-ui/react';
import {motion, useAnimation} from 'framer-motion';
import ModeToggle from '../components/ModeToggle';

const Homepage = () => {
  const controls = useAnimation();

  return ( 
    <VStack
    bg='secondary' 
    bgGradient='linear(to-tr, primaryDark , secondaryDark)'
    bgAttachment='fixed'
    spacing={['1rem','1rem', '1.5rem', '1.5rem']}
    >
      {/* Navbar*/}
      <Flex 
      w='100%' 
      h='100px' 
      py='1rem'
      px={['1rem', '1rem', '3rem', '3rem']} 
      >
        <Link 
        href='https://skillful-hippodraco-962.notion.site/Resume-999a1c60db4e4b1ba7097a659edc6c95'
        variant='menulink'
        fontSize={['2xl', '2xl', '2xl']}
        mx={3}
        >
          Resume
        </Link>
      </Flex >

      //hero banner

      <Grid
      gridTemplateColumns={['1fr', '1fr', 'repeat(2, 1fr)', 'repeat(2, 1fr)']}
      w={['90%', '90%', '75%', '75%']}
      gap='1rem'
      justifyContent={['center','center','baseline', 'baseline']}
      >
        <GridItem 
        variant='regular'
        >
          <Text
            variant='gradientTextHeading'
            fonts='heading'
          >
            Pranav Kumar
          </Text>

          <Text
            variant='regularSubheading'
          >
            I create amazing web experiences for your users
          </Text>
        </GridItem>
        <GridItem>
          <Image 
          src='./man-sitting.png'
          mx='auto'
          />
        </GridItem>
      </Grid>

      //About me section

      <Grid
      gridTemplateColumns={['1fr', '1fr', 'repeat(2,1fr)', 'repeat(2,1fr)']}
      w={['90%', '90%', '75%', '75%']}
      gap='1rem'
      my={['rem', '2rem' , '1rem', '1rem']}
      >
        <GridItem
        w={['90%', '90%', '75%', '75%']}
        >
          <Text
          variant='gradientTextHeading'
          >
            About me
          </Text>
        </GridItem>
        
        <GridItem
        variant='regular'
        >
          <Text
          variant='regularSubheading'
          my='1.5rem'
          >
          I am a frontend developer learning new skills at light-speed
          </Text>
          <Text
          variant='para'
          >
          I make jaw-dropping UI for your web-apps and websites.I specialise in React.js. I am always experimenting with new front-end frameworks to be industry relevant. I am also continously learning about new technologies like Blockchain development, web3, defi etc. to provide best service possible.
          </Text>
        </GridItem>

        <GridItem></GridItem>
      </Grid>
    </VStack>
   );
}
 
export default Homepage;