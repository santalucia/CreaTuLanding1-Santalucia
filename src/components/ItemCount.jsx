import { useContext } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ItemCount = ({product}) => {
    const { cart, addToCart, removeFromCart } = useContext(CartContext);

    const navigate = useNavigate();

    return (
        <Box flex={1}>
            <Text fontSize="sm" color="gray.500" mb={2}>
                {product?.category}
            </Text>
            <Text as="h1" fontSize="3xl" color="#0B2545" fontWeight="bold" mb={4}>
                {product?.title}
            </Text>
            <Text fontSize="lg" mb={4}>{product?.description}</Text>
            <Text color="#0B2545" fontSize="2xl" fontWeight="bold" mb={6}>
                ${product?.price}
            </Text>
            <Button
                bg="#E76F51"
                color="white"
                size="lg"
                borderRadius="3xl"
                _hover={{ bg: '#E76F51', opacity: 0.8 }}
                onClick={() => addToCart(product)}
            >
                Agregar item
            </Button>

            {cart.some(item => item.id === product.id) && (
                <Button
                    bg="#E76F51"
                    color="white"
                    size="lg"
                    borderRadius="3xl"
                    ml={2}
                    _hover={{ bg: '#E76F51', opacity: 0.8 }}
                    onClick={() => removeFromCart(product)}
                >
                    Quitar item
                </Button>
            )}
        </Box>
    )
}

export default ItemCount;