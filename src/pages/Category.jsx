import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../services/products.service';
import { Box, Spinner } from '@chakra-ui/react';
import ItemListContainer from '../components/ItemListContainer';

const Category = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        getProductsByCategory(id)
            .then((products) => {
                setProducts(products.data.products);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [products]);     
    return (
        <>
            {isLoading ? (
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
            ) : (
                <ItemListContainer products={products} />
            )}
        </>
    );
};

export default Category;