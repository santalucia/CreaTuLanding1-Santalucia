import { Box, Spinner } from '@chakra-ui/react';
import ItemListContainer from '../components/ItemListContainer';
import { useGetFirestoreDocs } from '../hooks/useGetFirestoreDocs';

const Home = () => {
  const { items, isLoading } = useGetFirestoreDocs("products");

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
        <ItemListContainer products={items} />
      </Box>
  )
};

export default Home;