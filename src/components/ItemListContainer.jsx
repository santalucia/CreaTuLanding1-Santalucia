import { Box, Heading, Button, Text, ButtonGroup, Image, Stack, Divider, SimpleGrid } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ItemCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <Box
      bg="white"
      borderRadius="2xl"
      boxShadow="xl"
      w="100%"
      maxW="sm"
      mx="auto"
      mb={4}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      minH="400px"
      p={4}
    >
      <Box>
        <Image
          src={product?.thumbnail}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
          mx="auto"
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md' noOfLines={1} color="#0B2545">{product?.title}</Heading>
          <Text>
            {product?.description}
          </Text>
          <Text color="#0B2545" fontSize='2xl'>
            ${product?.price}
          </Text>
        </Stack>
      </Box>
      <Divider my={4} />
      <Box>
        <ButtonGroup spacing='2'>
          <Button
            bg="#E76F51"
            color="white"
            _hover={{ bg: '#E76F51', opacity: 0.8, transform: 'scale(1.04)', transition: 'all 0.2s' }}
            borderRadius="3xl"
            fontWeight="normal"
            onClick={() => navigate(`/productos/${product?.id}`)}
          >
            Ver detalle
          </Button>

          <Button
            bg="#E76F51"
            color="white"
            _hover={{ bg: '#E76F51', opacity: 0.8, transform: 'scale(1.04)', transition: 'all 0.2s' }}
            borderRadius="3xl"
            fontWeight="normal"
            onClick={() => addToCart(product)}
          >
            Agregar item
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

const ItemListContainer = ({ products }) => {
  return (
    <Box
      w="100%"
      maxW="1200px"
      mx="auto"
      px={4}
      py={8}
      overflow="visible"
    >
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing={6}
        overflow="visible"
      >
        {products.map((product) => (
          <ItemCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ItemListContainer; 