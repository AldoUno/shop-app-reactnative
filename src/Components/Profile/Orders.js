import { Box, Button, HStack, ScrollView, Text } from "native-base";
import React from "react";
import { Pressable } from "react-native";
import Colors from "../../color";

const Orders = () => {
  return (
    <Box h="full" bg={Colors.white}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* PAID ORDER */}
        <Pressable>
          <HStack
            space={3}
            justifyContent="space-between"
            alignItems="center"
            bg={Colors.deepGray}
            py={5}
            px={1}
            w="full"
          >
            <Box flex={1}>
              <Text fontSize={9} color={Colors.blue} isTruncated>
                000000100088086626
              </Text>
            </Box>
            <Box flex={1} alignItems="center">
              <Text fontSize={12} bold color={Colors.black} isTruncated>
                PAGADO
              </Text>
            </Box>
            <Box flex={1} alignItems="center">
              <Text fontSize={11} italic color={Colors.black} isTruncated>
                12/12/2023
              </Text>
            </Box>
            <Box flex={1} alignItems="flex-end">
              <Button
                w={90}
                h={35}
                rounded={50}
                bg={Colors.main}
                _text={{ color: Colors.white, fontSize: '12px' }}
                _pressed={{ bg: Colors.main }}
              >
                ₲35000000
          </Button>
      </Box>
          </HStack>
        </Pressable>
        {/* NOT PAID */}
        <Pressable>
          <HStack
            space={3}
            justifyContent="space-between"
            alignItems="center"
            bg={Colors.gray}
            py={5}
            px={1}
            w="full"
          >
            <Box flex={1}>
            <Text fontSize={9} color={Colors.blue} isTruncated>
            000000200088086626
            </Text>
            </Box>
            <Box flex={1} alignItems="center">
            <Text fontSize={12} bold color={Colors.black} isTruncated>
              NO PAGADO
            </Text>
            </Box>
            <Box flex={1} alignItems="center">
            <Text fontSize={11} italic color={Colors.black} isTruncated>
              11/12/2023
            </Text>
            </Box>

            <Box flex={1} alignItems="flex-end">
            <Button
              w={90}
              h={35}
              rounded={50}
              bg={Colors.red}
              _text={{ color: Colors.white, fontSize: '12px' }}
              _pressed={{ bg: Colors.red }}
            >
              ₲350000
            </Button>
            </Box>
          </HStack>
        </Pressable>       

      </ScrollView>
    </Box>
  );
};

export default Orders;
