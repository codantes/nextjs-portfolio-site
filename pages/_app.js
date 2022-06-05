import '../styles/globals.css'
import {extendTheme,ChakraProvider} from '@chakra-ui/react';


const theme = extendTheme({
  colors: { 
    primaryLight : 'rgb(221, 239, 169)',
    primaryDark : 'rgb(33, 39, 56)',
    secondaryLight : 'rgb(255, 112, 138)',
    secondaryDark : 'rgb(184, 0, 34)',
    tertiary : 'rgb(251, 139, 36)'
  }
})

function MyApp({ Component, pageProps }) {
  return(
  < ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
