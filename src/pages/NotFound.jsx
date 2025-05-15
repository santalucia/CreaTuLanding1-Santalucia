import { Button, Box, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <Box minH="80vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={6}>
            <Text fontSize="2xl" color="#0B2545" mb={4} fontWeight="bold">
              ¡Ups! El link que intentaste abrir no existe.
            </Text>
            <Text fontSize="lg" color="gray.600" mb={6}>
              Puede que la página haya sido movida o el enlace esté mal escrito.
            </Text>
            <Button bg="#E76F51" color="white" _hover={{ bg: '#E76F51', opacity: 0.8 }} onClick={() => navigate('/')}>Ir a inicio</Button>
        </Box>
    );
};

export default NotFound;