import { useContext } from 'react';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Circle } from '@chakra-ui/react';
import { BsCart3 } from 'react-icons/bs';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <Menu>
      <Flex align="center">
        <MenuButton
          as={IconButton}
          aria-label='Opciones de carrito'
          icon={<BsCart3 size={24} />}
          variant='ghost'
          color='white'
          _hover={{ bg: 'whiteAlpha.200' }}
          _active={{ bg: 'whiteAlpha.300' }}
        />
        <Circle
          size="20px"
          bg="#66E3D9"
          color="#0B2545"
          fontSize="sm"
          fontWeight="bold"
          ml="-2"
          mt="-3"
        >
          {cart.length}
        </Circle>
      </Flex>
      <MenuList bg='#0B2545' borderColor='whiteAlpha.300'>
        <MenuItem
          bg='transparent'
          _hover={{ bg: 'whiteAlpha.200', color: '#66E3D9' }}
          _focus={{ bg: 'whiteAlpha.200' }}
          color='white'
          onClick={() => navigate('/cart')}
        >
          Ver carrito
        </MenuItem>
        <MenuItem
          bg='transparent'
          _hover={{ bg: 'whiteAlpha.200', color: '#66E3D9' }}
          _focus={{ bg: 'whiteAlpha.200' }}
          color='white'
          onClick={() => navigate('/checkout')}
        >
          Finalizar compra
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CartWidget;

