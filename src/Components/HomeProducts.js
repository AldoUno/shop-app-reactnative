import React, { useEffect, useState, memo } from 'react';
import { Box, FlatList, Heading, Pressable, Text, VStack, useToast } from 'native-base';
import { ActivityIndicator, Image } from 'react-native';
import Colors from '../color';
import { useNavigation } from '@react-navigation/native';
import { ListItems } from '../Services/fetchServices';

const ProductItem = memo(({ product, navigation }) => (
  <Pressable
    onPress={() => navigation.navigate('Single', product)}
    key={product.id}
    w="47%"
    bg={Colors.white}
    rounded="md"
    shadow={2}
    pt={0.3}
    my={3}
    pb={2}
    mx={1}
    overflow="hidden"
  >
    <Image
      //source={{ uri: 'http://www.superseis.com.py/images/thumbs/0249658.jpeg' }}
      source={{ uri: `http://${product.url}` }}
      alt={`${product.name}`}
      style={{
        width: '100%',
        height: 200,
        resizeMode: 'contain',
      }}
      fallbackSource={{ uri: 'https://via.placeholder.com/150' }}
    />
    <Box px={4} pt={1}>
      <Heading size="sm" bold>
        ₲{product.precio}
      </Heading>
      <Text fontSize={12} mt={1} isTruncated w="full">
        {product.descripcion}
      </Text>
    </Box>
  </Pressable>
));

function HomeProducts() {
  const navigation = useNavigation();
  const toast = useToast();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMoreProducts, setHasMoreProducts] = useState(true);

  useEffect(() => {
    if (hasMoreProducts) {
      getProducts();
    }
  }, [pageNumber]);

  const getProducts = async () => {
    setLoading(true);

    ListItems('products', pageNumber)
      .then(res => {
        if (res.ok) return res.json();
        else {
          const { message } = res.json();
          throw new Error(message);
        }
      })
      .then(data => {
        if (data.data.length > 0) {
          setProducts(prevProducts => [...prevProducts, ...data.data]);
        } else {
          setHasMoreProducts(false);
          showToastMessage('Aviso!', 'Ya no existen productos para mostrar!');
        }
      })
      .catch(error => console.log('Avisos!', error.message))
      .finally(() => { setLoading(false); setLoadingMore(false); });
  };

  const loadMoreProducts = () => {
    if (!loadingMore && hasMoreProducts) {
      setLoadingMore(true);
      setPageNumber(prevPageNumber => prevPageNumber + 1);
    }
  };

  const renderFooter = () => {
    return (
      loadingMore &&
      <Box py={10}>
        <ActivityIndicator size="large" color={Colors.main} />
      </Box>
    );
  };

  const getItemLayout = (data, index) => (
    { length: 200, offset: 200 * index, index }
  );

  const showToastMessage = (title = 'Aviso!', description = 'Description', variant = 'solid') => {
    toast.show({
      render: () => {
        return (
          <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
            <Text>{title}</Text>
            <Text>{description}</Text>
          </Box>
        );
      }
    });
  };

  return (
    <FlatList
      data={products}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ProductItem product={item} navigation={navigation} />
      )}
      onEndReached={loadMoreProducts}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter}
      getItemLayout={getItemLayout}
    />
  );
}

export default HomeProducts;
