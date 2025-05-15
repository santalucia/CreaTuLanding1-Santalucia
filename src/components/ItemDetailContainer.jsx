import { useState, useEffect } from 'react';
import { Box, Text, Image, Button, Spinner, Flex, Card, CardBody, CardFooter, ButtonGroup } from '@chakra-ui/react';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const ItemDetailContainer = ({product}) => {
    const navigate = useNavigate();

    return (
        <Box>
            <Button
                variant="ghost"
                color="#66E3D9"
                leftIcon={<FiArrowLeft />}
                mb={4}
                fontWeight="bold"
                fontSize="md"
                _hover={{ bg: 'transparent', textDecoration: 'underline', color: '#0B2545' }}
                onClick={() => navigate('/')}
            >
                Volver a productos
            </Button>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                bg="white"
                borderRadius="2xl"
                boxShadow="xl"
                p={8}
                maxW="900px"
                mx="auto"
                align="center"
                gap={8}
            >
                {/* Información a la izquierda */}
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
                    >
                      Comprar ahora
                    </Button>
                </Box>

                {/* Imagen a la derecha */}
                <Box flex={1} display="flex" justifyContent="center" alignItems="center">
                    <Image
                      src={product?.images[0]}
                      alt={product?.title}
                      borderRadius="xl"
                      maxH="350px"
                      objectFit="contain"
                      boxShadow="lg"
                    />
                </Box>
            </Flex>
        </Box>
    )
}

export default ItemDetailContainer;