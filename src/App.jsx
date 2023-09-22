import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { ChakraProvider } from '@chakra-ui/react'
import { BalanceProvider } from "./contexts/BalanceContext";

function App() {
  return (
    <BrowserRouter>
      <BalanceProvider>
        <ChakraProvider>
          <AppRoutes />
        </ChakraProvider>
      </BalanceProvider>
    </BrowserRouter>
  )
}

export default App
