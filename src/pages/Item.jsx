import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer';
import { getProductById } from '../services/products.service';
import { Box, Spinner } from '@chakra-ui/react';

const Item = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getProductById(id)
            .then((product) => {
                setProduct(product.data);
            })
            .catch((error) => {
                console.log(error);
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
            <ItemDetailContainer product={product} />
    )
}

export default Item;