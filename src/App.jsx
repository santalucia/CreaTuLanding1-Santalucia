import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer 
        greeting="Bienvenido a Lúmina!"
        subgreeting="Elegí tu botella ideal"
        buttonText="Elegir ahora"
      />
    </ChakraProvider>
  )
}

export default App
