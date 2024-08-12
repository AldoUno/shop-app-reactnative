import React, { useState, useContext, useEffect } from 'react';
import { Box, Image, ScrollView, Heading, HStack, Spacer, Text, Center } from 'native-base';
import NumericInput from 'react-native-numeric-input';
import Buttone from '../Components/Buttone';
import Review from '../Components/Review';
import { useNavigation } from '@react-navigation/native';
import Colors from '../color';
import { CartContext } from '../context/CartContext';

function SingleProductsScreen({ route }) {
  const [value, setValue] = useState(0);
  const navigation = useNavigation();
  const product = route.params;
  const { addToCart, isBasketFull, cart } = useContext(CartContext);


    // Imprime la URL en la consola
    useEffect(() => {
      console.log('Product URL:', product.url);
    }, [product.url]);

  const handleAddToCart = () => {
    if (cart.length > 0) {
      addToCart({ ...product, quantity: value });
      navigation.navigate("CartScreen");
    }else if (!isBasketFull()) {
      addToCart({ ...product, quantity: value });
      navigation.navigate("Cart");
    } else {
      alert('La cesta está llena');
    }
  };

  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          //source={{ uri: 'http://www.superseis.com.py/images/thumbs/0249658.jpeg' }}
          source={{ uri: `http://${product.url}` }}
          alt={`${product.name}`}
          w="full"
          h={300}
          resizeMode='contain'
          fallbackSource={{ uri: 'https://via.placeholder.com/300' }}
          onError={(e) => console.log('Error loading image:', e.nativeEvent.error)}
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {product.name}
        </Heading>
        <HStack space={2} alignItems="center" my={5}>
          {product.existencia > 0 ? (
            <NumericInput
              value={value}
              totalWidth={140}
              totalHeight={30}
              iconSize={25}
              step={1}
              maxValue={product.existencia}
              minValue={0}
              borderColor={Colors.deepGray}
              rounded
              textColor={Colors.black}
              iconStyle={{ color: Colors.white }}
              rightButtonBackgroundColor={Colors.main}
              leftButtonBackgroundColor={Colors.main}
              onChange={setValue}
            />
          ) : (
            <Heading bold color={Colors.red} fontSize={12}>
              Fuera de stock
            </Heading>
          )}
          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            ₲{product.precio}
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          {product.descripcion}
        </Text>
        <Buttone onPress={handleAddToCart} bg={Colors.main} color={Colors.white} mt={10}>
          AÑADIR AL CARRITO
        </Buttone>
        <Review />
      </ScrollView>
    </Box>
  );
}

export default SingleProductsScreen;
