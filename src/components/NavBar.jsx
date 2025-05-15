import { useState, useEffect } from 'react';
import { getAllCategories } from '../services/products.service';
import { Box, Flex, Text, HStack, Link, Container, Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { WiRaindrop } from 'react-icons/wi';
import CardWidget from './CardWidget';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [categories, setCategories] = useState([]); 
  const [activeLink, setActiveLink] = useState('productos');
  const navigate = useNavigate();

  useEffect(() => {
    getAllCategories()
      .then((categories) => {
        setCategories(categories.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Box bg="#0B2545" py={4} color="white">
      <Container maxW="container.xxl" px={8}>
        <Flex align="center" justify="space-between">
          <Flex align="center" gap={2} cursor="pointer" onClick={() => {
            setActiveLink('productos');
            navigate('/')
          }}>
            <WiRaindrop size={80} color="#66E3D9" />
            <Text fontSize="2xl" fontWeight="bold">
              Lúmina
            </Text>
          </Flex>

          <Flex position="absolute" left="50%" transform="translateX(-50%)">
            <HStack spacing={8} fontSize="l">
              <Link 
                href="#productos" 
                onClick={() => {
                  navigate('/');
                  setActiveLink('productos');
                }}
                color={activeLink === 'productos' ? '#66E3D9' : 'white'}
                _hover={{ bg: 'whiteAlpha.200', color: '#66E3D9' }} 
                p={2} 
                borderRadius="md"
              >
                Productos
              </Link>
              <Menu>
                <MenuButton as={Button} variant="ghost" color="white" _hover={{ color: '#66E3D9', bg: 'whiteAlpha.200' }} px={2} borderRadius="md">
                  Categorías
                </MenuButton>
                <MenuList bg="#0B2545" borderColor="whiteAlpha.300" zIndex={3000} maxH="300px" overflowY="auto">
                  {categories.map((category) => (
                    <MenuItem
                      key={category.slug}
                      bg="transparent"
                      color="white"
                      _hover={{ bg: 'whiteAlpha.200', color: '#66E3D9' }}
                      onClick={() => navigate(`/categorias/${category.slug}`)}
                    >
                      {category.name}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
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
