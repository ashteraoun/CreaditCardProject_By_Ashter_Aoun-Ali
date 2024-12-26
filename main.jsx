
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/oxanium';
import '@fontsource/roboto';


// import * as ReactDOM from 'react-dom/client'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const fonts = {
  main: `'Roboto', sans-serif`,
  numbers: `'Oxanium Variable', system-ui`,
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ config, colors, fonts })

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    
  // </React.StrictMode>,
)
