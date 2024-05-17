import React, { useState } from 'react';
import { Text, Box, Button } from 'native-base';
import Colors from '../color';
import { useNavigation } from '@react-navigation/native';

const BasketScreen = () => {
  const [basketSize, setBasketSize] = useState(10);
  const navigation = useNavigation(); // Hook para usar la navegación

  const handleAddProduct = () => {
    // Navegar a CartScreen pasando el basketSize como parámetro
    navigation.navigate('CartScreen', { maxQuantity: basketSize });
  }; 

  const handleBasketSizeChange = (size) => {
    // Cambiar el tamaño de la cesta
    setBasketSize(size);
  };

  return (
    <Box flex={1} justifyContent="center" alignItems="center" bg={Colors.main}>
      <Text fontSize={20} fontWeight="bold" color={Colors.white}>SELECCIONAR TAMAÑO DE CESTA</Text>
      <Box flexDirection="row" justifyContent="center" alignItems="center" mt={4}>
        {[12, 24, 36].map((size) => (
          <Button key={size} onPress={() => handleBasketSizeChange(size)} bg={basketSize === size ? Colors.white : Colors.main} mx={2}>
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
