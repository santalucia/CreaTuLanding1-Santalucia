import { Box, VStack, Heading, Button, Text } from '@chakra-ui/react';
import { WiRaindrop } from 'react-icons/wi';

const ItemListContainer = ({greeting, subgreeting, buttonText}) => {
  return (
    <Box 
      minH="90vh" 
      display="flex" 
      alignItems="center" 
      justifyContent="center"
      mx={8}
      my={8}
    >
      <Box
        bg="#ECF0F1"
        borderRadius="3xl"
        p={20}
        boxShadow="xl"
        w="100%"
        maxW="1200px"
      >
        <VStack spacing={6} textAlign="center">
          <Heading 
            as="h1" 
            size="2xl" 
            color="#0B2545"
            fontWeight="medium"
          >
            {greeting}
          </Heading>
          
          <Heading 
            as="h2" 
            size="xl" 
            color="#0B2545"
            fontWeight="medium"
            display="flex"
            alignItems="center"
            gap={2}
          >
            {subgreeting} <WiRaindrop color="#66E3D9" size={100} />
          </Heading>

          <Button
            bg="#E76F51"
            color="white"
            fontSize="2xl"
            px={16}
            py={8}
            borderRadius="3xl"
            _hover={{ 
              bg: '#E76F51', 
              opacity: 0.8,
              transform: 'scale(1.02)',
              transition: 'all 0.2s ease-in-out'
            }}
            boxShadow="sm"
            fontWeight="normal"
          >
            {buttonText}
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default ItemListContainer; 