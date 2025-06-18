import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Button,
  Image,
  Flex,
  IconButton,
  Divider,
  useToast
} from '@chakra-ui/react';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleRemoveItem = (item) => {
    removeFromCart(item);
    toast({
      title: "Producto eliminado",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <Container maxW="container.xl" py={8}>
      <Text fontSize="2xl" fontWeight="bold" mb={6} color="#0B2545">
        Tu Carrito
      </Text>

      {cart.length === 0 ? (
        <Box textAlign="center" py={10}>
          <Text fontSize="xl" color="gray.500">
            Tu carrito está vacío
          </Text>
          <Button
            mt={4}
            colorScheme="teal"
            onClick={() => navigate('/')}
          >
            Seguir Comprando
          </Button>
        </Box>
      ) : (
        <VStack spacing={4} align="stretch">
          {cart.map((item) => (
            <Box
              key={item.id}
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              bg="white"
              shadow="sm"
            >
              <Flex gap={4}>
                <Image
                  src={item.images?.[0]}
                  alt={item.name}
                  boxSize="100px"
                  objectFit="cover"
                  borderRadius="md"
                />
                
                <VStack align="stretch" flex={1}>
                  <Flex justify="space-between" align="start">
                    <Box>
                      <Text fontSize="lg" fontWeight="semibold">
                        {item.name}
                      </Text>
                      <Text color="gray.600" fontSize="sm">
                        {item.description}
                      </Text>
                    </Box>
                    <IconButton
                      icon={<FaTrash />}
                      colorScheme="red"
                      variant="ghost"
                      onClick={() => handleRemoveItem(item)}
                      aria-label="Eliminar producto"
                    />
                  </Flex>

                  <Flex justify="space-between" align="center" mt={2}>
                    <HStack>
                      <IconButton
                        icon={<FaMinus />}
                        size="sm"
                        onClick={() => updateQuantity(item.id, -1)}
                        aria-label="Reducir cantidad"
                        colorScheme="teal"
                        variant="outline"
                      />
                      <Text px={3}>{item.quantity}</Text>
                      <IconButton
                        icon={<FaPlus />}
                        size="sm"
                        onClick={() => updateQuantity(item.id, 1)}
                        aria-label="Aumentar cantidad"
                        colorScheme="teal"
                        variant="outline"
                      />
                    </HStack>
                    <Text fontWeight="bold" color="#0B2545">
                      ${(item.price * item.quantity).toLocaleString()}
                    </Text>
                  </Flex>
                </VStack>
              </Flex>
            </Box>
          ))}

          <Divider my={4} />

          <Box bg="gray.50" p={6} borderRadius="lg">
            <Flex justify="space-between" align="center">
              <Text fontSize="xl" fontWeight="bold">
                Total:
              </Text>
              <Text fontSize="xl" fontWeight="bold" color="#0B2545">
                ${calculateTotal().toLocaleString()}
              </Text>
            </Flex>

            <Button
              w="full"
              mt={4}
              size="lg"
              bg="#0B2545"
              color="white"
              _hover={{ bg: '#66E3D9', color: '#0B2545' }}
              onClick={handleCheckout}
            >
              Finalizar Compra
            </Button>
          </Box>
        </VStack>
      )}
    </Container>
  );
};

export default Cart;