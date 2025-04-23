import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Circle } from '@chakra-ui/react';
import { BsCart3 } from 'react-icons/bs';

const CardWidget = () => {
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
          5
        </Circle>
      </Flex>
      <MenuList bg='#0B2545' borderColor='whiteAlpha.300'>
        <MenuItem
          bg='transparent'
          _hover={{ bg: 'whiteAlpha.200', color: '#66E3D9' }}
          _focus={{ bg: 'whiteAlpha.200' }}
          color='white'
        >
          Ver carrito
        </MenuItem>
        <MenuItem
          bg='transparent'
          _hover={{ bg: 'whiteAlpha.200', color: '#66E3D9' }}
          _focus={{ bg: 'whiteAlpha.200' }}
          color='white'
        >
          Finalizar compra
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CardWidget;

