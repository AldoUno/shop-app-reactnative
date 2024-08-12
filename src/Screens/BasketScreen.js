import React, { useState, useContext } from 'react';
import { Text, Box, Button } from 'native-base';
import Colors from '../color';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../context/CartContext';

const BasketScreen = () => {
  const navigation = useNavigation();
  const { setBasketLimit, cart  } = useContext(CartContext);
  const [basketSize, setBasketSize] = useState(10);

  const handleAddProduct = () => {
    setBasketLimit(basketSize);
    if (cart.length === 0) {
      navigation.navigate('CartEmpty');
      console.log(cart.length)
    } else {
      console.log(cart.length)
      navigation.navigate('CartScreen');
    }
  };

  const handleBasketSizeChange = (size) => {
    setBasketSize(size);
  };

  return (
    <Box flex={1} justifyContent="center" alignItems="center" bg={Colors.main}>
      <Text fontSize={20} fontWeight="bold" color={Colors.white}>
        SELECCIONAR TAMAÑO DE CESTA
      </Text>
      <Box flexDirection="row" justifyContent="center" alignItems="center" mt={4}>
        {[12, 24, 36].map((size) => (
          <Button
            key={size}
            onPress={() => handleBasketSizeChange(size)}
            bg={basketSize === size ? Colors.white : Colors.main}
            mx={2}
          >
            <Text color={basketSize === size ? Colors.main : Colors.white}>{size}</Text>
          </Button>
        ))}
      </Box>
      <Button onPress={handleAddProduct} mt={4} bg={Colors.white}>
        <Text color={Colors.main}>AGREGAR PRODUCTO</Text>
      </Button>
    </Box>
  );
};

export default BasketScreen;
