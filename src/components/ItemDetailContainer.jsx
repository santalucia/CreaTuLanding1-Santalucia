import { Box, Image, Button, Flex } from '@chakra-ui/react';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import ItemCount from './ItemCount';

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
                <ItemCount product={product} />

                {/* Imagen a la derecha */}
                <Box flex={1} display="flex" justifyContent="center" alignItems="center">
                    <Image
                      src={product?.images?.[0]}        
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