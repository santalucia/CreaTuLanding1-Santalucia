import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer';
import { Box, Spinner } from '@chakra-ui/react';
import { useGetItemFirestore } from '../hooks/useGetItemFirestore';

const Item = () => {
    const { id } = useParams();
    const { item, isLoading } = useGetItemFirestore(id, "products");        

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
            <ItemDetailContainer product={item} />
    )
}

export default Item;