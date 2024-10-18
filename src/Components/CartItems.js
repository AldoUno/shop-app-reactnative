import { Box, Text, Center, Pressable, Image, HStack, VStack, Button } from "native-base";
import React from "react";
import { SwipeListView } from "react-native-swipe-list-view";
import Colors from "../color";
import { FontAwesome } from "@expo/vector-icons";
import Buttone from "./Buttone";

const Swiper = ({ products, onRemove }) => (
  <SwipeListView
    rightOpenValue={-50}
    previewRowKey="0"
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={products}
    renderItem={(data) => renderitem(data, onRemove)}
    //renderHiddenItem={(data) => hiddenitem(data, onRemove)}
    //showsVerticalScrollIndicator={false}
  />
);

const renderitem = (data, onRemove) => (
  <Pressable>
    <Box ml={6} mb={0}>
      <HStack
        alignItems="center"
        bg={Colors.white}
        shadow={1}
        rounded={10}
        overflow="hidden"
      >
        <Center w="25%" bg={Colors.deepGray}>
          <Image
            source={{ uri: `http://${data.item.url}` }}
            alt={data.item.name}
            w="full"
            h={24}
            resizeMode="contain"
          />
        </Center>
        <VStack w='45%' px={2} space={2}>
          <Text isTruncated color={Colors.black} bold fontSize={10}>
            {data.item.name}
          </Text>
          <Text bold color={Colors.lightBlack}>
            ₲{data.item.precio}
          </Text>
        </VStack>
        <Center>
          <Button
            bg={Colors.main} 
            _pressed={{ bg: Colors.main }} 
            _text={{ color: Colors.white,
            }}
                        
          >
            {data.item.quantity}
          </Button>         
        </Center>
        <Center px={2}>
          <Button
            bg={Colors.red} 
            _pressed={{ bg: Colors.main }} 
            _text={{ color: Colors.white,
            }}
            onPress={() => onRemove(data.item.id)}
          >
            <FontAwesome name="trash" size={24} color={Colors.white} />
          </Button>          
        </Center>
      </HStack>
    </Box>
  </Pressable>
);

const hiddenitem = (data, onRemove) => (
  <Pressable
    w={50}
    roundedTopRight={10}
    roundedBottomRight={10}
    h="88%"
    ml="auto"
    justifyContent="center"
    bg={Colors.red}
    onPress={() => onRemove(data.item.id)}   
  >
    <Center alignItems="center" space={2}>
      <FontAwesome name="trash" size={24} color={Colors.white} />
    </Center>
  </Pressable>
);

const CartItems = ({ product, removeFromCart  }) => {
  return (
    <Box mr={6}>
      <Swiper products={[product]} onRemove={removeFromCart} />
    </Box>
  );
};

export default CartItems;