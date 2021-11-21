import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import ToggleColorMode from '../components/ToggleColorMode'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <ToggleColorMode />
      <Component {...pageProps} />
    </ChakraProvider>
    )
}

export default MyApp
