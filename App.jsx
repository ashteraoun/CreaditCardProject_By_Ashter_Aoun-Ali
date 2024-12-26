import "./App.css"
import { Flex } from "@chakra-ui/layout"
import { useColorModeValue } from "@chakra-ui/react"
import Form from "./components/Form"
import { ColorModeSwitcher } from "./ColorModeSwitcher"


function App() {
  const bgGradient = useColorModeValue(
    "linear(to-tr, #f7c8d1, #e6a3b1, #d07a9d)", // Light mode colors (soft rose tones)
"linear(to-tr, blue.900, black , gray.700)"  )

  return (
    <Flex flexDirection={'column'} bgGradient={bgGradient} height={"100vh"}>
      <Flex gap={2} justifyContent={'flex-end'} p={2} >
      <ColorModeSwitcher/>
      </Flex>
      <Flex
      justifyContent={"center"}
      pt={"5%"}
      
      

    >
      <Form/>
    </Flex>
    </Flex>
    
    
  )
}

export default App
