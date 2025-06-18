import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Spinner } from '@chakra-ui/react';
import ItemListContainer from '../components/ItemListContainer';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../services/config/firebase';

const Category = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const productsQuery = query(collection(db, "products"), where("category", "==", id));
        
        getDocs(productsQuery).then((snapshot) => {
            const products = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
            setProducts(products);
            setIsLoading(false);
        });
    }, [id]);     
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