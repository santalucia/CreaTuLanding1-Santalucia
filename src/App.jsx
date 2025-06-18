import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <ChakraProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ChakraProvider>
  )
}

export default App
