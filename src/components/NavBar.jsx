import { Box, Flex, Text, HStack, Link, Container } from '@chakra-ui/react';
import { WiRaindrop } from 'react-icons/wi';
import CardWidget from './CardWidget';
import { useState } from 'react';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('inicio');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Box bg="#0B2545" py={4} color="white">
      <Container maxW="container.xxl" px={8}>
        <Flex align="center" justify="space-between">
          <Flex align="center" gap={2}>
            <WiRaindrop size={80} color="#66E3D9" />
            <Text fontSize="2xl" fontWeight="bold">
              Lúmina
            </Text>
          </Flex>

          <Flex position="absolute" left="50%" transform="translateX(-50%)">
            <HStack spacing={8} fontSize="l">
              <Link 
                href="#inicio" 
                onClick={() => handleClick('inicio')}
                color={activeLink === 'inicio' ? '#66E3D9' : 'white'}
                _hover={{ bg: 'whiteAlpha.200', color: '#66E3D9' }} 
                p={2} 
                borderRadius="md"
              >
                Inicio
              </Link>
              <Link 
                href="#productos" 
                onClick={() => handleClick('productos')}
                color={activeLink === 'productos' ? '#66E3D9' : 'white'}
                _hover={{ bg: 'whiteAlpha.200', color: '#66E3D9' }} 
                p={2} 
                borderRadius="md"
              >
                Productos
              </Link>
              <Link 
                href="#sobre-nosotros" 
                onClick={() => handleClick('sobre-nosotros')}
                color={activeLink === 'sobre-nosotros' ? '#66E3D9' : 'white'}
                _hover={{ bg: 'whiteAlpha.200', color: '#66E3D9' }} 
                p={2} 
                borderRadius="md"
              >
                Sobre nosotros
              </Link>
              <Link 
                href="#contacto" 
                onClick={() => handleClick('contacto')}
                color={activeLink === 'contacto' ? '#66E3D9' : 'white'}
                _hover={{ bg: 'whiteAlpha.200', color: '#66E3D9' }} 
                p={2} 
                borderRadius="md"
              >
                Contacto
              </Link>
            </HStack>
          </Flex>

          <Box>
            <CardWidget />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default NavBar
