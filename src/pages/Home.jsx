import { useState, useEffect } from 'react';
import { Box, Spinner } from '@chakra-ui/react';
import ItemListContainer from '../components/ItemListContainer';
import { getAllProducts } from '../services/products.service';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllProducts()
    .then((products) => {
      setProducts(products.data.products);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }, []);

    return (
      isLoading ?
      <Box 
        display="flex" 
        alignItems="center" 
        justifyContent="center"
        minH="calc(100vh - 80px)"
      >
        <Spinner 
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#66E3D9"
          size="xl"
          w="100px"
          h="100px"
        />
      </Box>
      :
      <Box>
        <ItemListContainer products={products} />
      </Box>
    )   
};

export default Home;