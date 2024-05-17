import { Box, Button, HStack, ScrollView, Text } from "native-base";
import React from "react";
import { Pressable } from "react-native";
import Colors from "../../color";

const Orders = () => {
  return (
    <Box h="full" bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* PAID ORDER */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            bg={Colors.deepGray}
            py={5}
            px={2}
          >
            <Text fontSize={9} color={Colors.blue} isTruncated>
              841648124871287462
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              PAGADO
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              12/12/2023
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.main}
              _text={{ color: Colors.white }}
              _pressed={{ bg: Colors.main }}
            >
              ₲350000
            </Button>
          </HStack>
        </Pressable>
        {/* NOT PAID */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            py={5}
            px={2}
          >
            <Text fontSize={9} color={Colors.blue} isTruncated>
              8416481248712874
            </Text>
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              NO PAGADO
            </Text>
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              11/12/2023
            </Text>
            <Button
              px={7}
              py={1.5}
              rounded={50}
              bg={Colors.red}
              _text={{ color: Colors.white }}
              _pressed={{ bg: Colors.red }}
            >
              ₲350000
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  );
};

export default Orders;
