import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Radio,
  RadioGroup,
  Stack,
  Divider,
  useToast,
  Grid,
  GridItem,
  Card,
  CardBody,
  Heading,
  Flex,
  Image
} from '@chakra-ui/react';
import { CartContext } from '../context/CartContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../services/config/firebase';

const Checkout = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { cart, removeFromCart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    formaPago: 'tarjeta'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.apellido || !formData.email || !formData.telefono) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos obligatorios",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const pedido = {
        nombre: formData.nombre,
        apellido: formData.apellido,
        email: formData.email,
        telefono: formData.telefono,
        formaPago: formData.formaPago,
        
        productos: cart.map(item => ({
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: item.quantity,
          images: item.images
        })),
        
        total: calculateTotal(),
        cantidadProductos: cart.reduce((total, item) => total + item.quantity, 0),
        
        fechaCreacion: serverTimestamp(),
        estado: 'pendiente'
      };

      const docRef = await addDoc(collection(db, "pedidos"), pedido);
      
      console.log("Pedido guardado con ID: ", docRef.id);

      toast({
        title: "¡Pedido confirmado!",
        description: `Tu pedido #${docRef.id} ha sido procesado exitosamente`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      cart.forEach(item => removeFromCart(item));

      navigate('/');

    } catch (error) {
      console.error("Error al guardar el pedido: ", error);
      toast({
        title: "Error",
        description: "Hubo un problema al procesar tu pedido. Por favor intenta nuevamente.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cart.length === 0) {
    return (
      <Container maxW="container.xl" py={8}>
        <Box textAlign="center" py={10}>
          <Text fontSize="xl" color="gray.500" mb={4}>
            Tu carrito está vacío
          </Text>
          <Button
            colorScheme="teal"
            onClick={() => navigate('/')}
          >
            Volver a la tienda
          </Button>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" py={8}>
      <Heading size="lg" mb={6} color="#0B2545">
        Finalizar Compra
      </Heading>

      <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={8}>
        {/* Formulario */}
        <GridItem>
          <Card>
            <CardBody>
              <form onSubmit={handleSubmit}>
                <VStack spacing={6} align="stretch">
                  <Heading size="md" color="#0B2545">
                    Información Personal
                  </Heading>

                  <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                    <FormControl isRequired>
                      <FormLabel>Nombre</FormLabel>
                      <Input
                        type="text"
                        value={formData.nombre}
                        onChange={(e) => handleInputChange('nombre', e.target.value)}
                        placeholder="Tu nombre"
                        disabled={isSubmitting}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Apellido</FormLabel>
                      <Input
                        type="text"
                        value={formData.apellido}
                        onChange={(e) => handleInputChange('apellido', e.target.value)}
                        placeholder="Tu apellido"
                        disabled={isSubmitting}
                      />
                    </FormControl>
                  </Grid>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="tu@email.com"
                      disabled={isSubmitting}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Número de Contacto</FormLabel>
                    <Input
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => handleInputChange('telefono', e.target.value)}
                      placeholder="+54 9 11 1234-5678"
                      disabled={isSubmitting}
                    />
                  </FormControl>

                  <Divider />

                  <Heading size="md" color="#0B2545">
                    Forma de Pago
                  </Heading>

                  <FormControl>
                    <FormLabel>Selecciona tu método de pago</FormLabel>
                    <RadioGroup 
                      value={formData.formaPago} 
                      onChange={(value) => handleInputChange('formaPago', value)}
                      isDisabled={isSubmitting}
                    >
                      <Stack spacing={3}>
                        <Radio value="tarjeta">Tarjeta de Crédito/Débito</Radio>
                        <Radio value="transferencia">Transferencia Bancaria</Radio>
                        <Radio value="efectivo">Efectivo</Radio>
                        <Radio value="mercadopago">Mercado Pago</Radio>
                      </Stack>
                    </RadioGroup>
                  </FormControl>

                  <Button
                    type="submit"
                    size="lg"
                    bg="#0B2545"
                    color="white"
                    _hover={{ bg: '#66E3D9', color: '#0B2545' }}
                    mt={4}
                    isLoading={isSubmitting}
                    loadingText="Procesando pedido..."
                    disabled={isSubmitting}
                  >
                    Confirmar Pedido
                  </Button>
                </VStack>
              </form>
            </CardBody>
          </Card>
        </GridItem>

        {/* Resumen del pedido */}
        <GridItem>
          <Card>
            <CardBody>
              <VStack spacing={4} align="stretch">
                <Heading size="md" color="#0B2545">
                  Resumen del Pedido
                </Heading>

                {cart.map((item) => (
                  <Box key={item.id} p={3} borderWidth="1px" borderRadius="md">
                    <Flex gap={3} align="center">
                      <Image
                        src={item.images?.[0]}
                        alt={item.title}
                        boxSize="50px"
                        objectFit="cover"
                        borderRadius="md"
                      />
                      <Box flex={1}>
                        <Text fontWeight="semibold">{item.title}</Text>
                        <Text fontSize="sm" color="gray.600">
                          Cantidad: {item.quantity}
                        </Text>
                      </Box>
                      <Text fontWeight="bold">
                        ${(item.price * item.quantity).toLocaleString()}
                      </Text>
                    </Flex>
                  </Box>
                ))}

                <Divider />

                <Box>
                  <Flex justify="space-between" align="center">
                    <Text fontSize="lg" fontWeight="bold">
                      Total:
                    </Text>
                    <Text fontSize="lg" fontWeight="bold" color="#0B2545">
                      ${calculateTotal().toLocaleString()}
                    </Text>
                  </Flex>
                </Box>
              </VStack>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Checkout;