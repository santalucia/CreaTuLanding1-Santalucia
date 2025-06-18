import Navbar from '../components/Navbar';
import { Box, Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>  
            <Box>
                <Navbar />
                <Flex
                    minH="calc(100vh - 80px)"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Outlet />
                </Flex>
            </Box>
        </>
    )
}   

export default MainLayout;