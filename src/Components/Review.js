import { View } from "react-native";
import React, { useState } from "react";
import {
  Box,
  FormControl,
  Heading,
  VStack,
  Select,
  CheckIcon,
  TextArea,
  Text
} from "native-base";
import Colors from "../color";
import Rating from "./Rating";
import Message from "./Notifications/Message";
import { CheckBox } from "react-native-web";
import Buttone from "./Buttone";

export default function Review() {
  const [rating, setRating] = useState("");
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEW
      </Heading>
      {/* IF THERE IS NO REVIEW */}
      {/*<Message
        color={Colors.main}
        bg={Colors.deepGray}
        bold
        children={"NO REVIEW"}
      />*/}

      {/* REVIEW */}
      <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          Usuario Ana
        </Heading>
        <Rating value={4} />
        <Text my={2} fontSize={11}>
          12/01/2024
        </Text>
        <Message
          color={Colors.black}
          bg={Colors.white}
          size={12}
          children={
            "NativeBase ships with a default theme for each component. Check out the default theme of the input here."
          }
        />
      </Box>
      {/* WRITE REVIEW */}
      {/*<Box* mt={6}>
        <Heading fontSize={15} bold mb={4}>
          REVIEW THIS PRODUCT
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Rating
            </FormControl.Label>
            <Select
              bg={Colors.sudOrange}
              borderWidth={0}
              rounded={5}
              py={4}
              placeholder="Choose Rate"
              _selectedItem={{
                bg: Colors.sudOrange,
                endIcon: <CheckIcon size={3} />,
                justifyContent: "center",
                alignItems: "center",
              }}
              selectedValue={rating}
              onValueChange={(e) => setRating(e)}
            >
              <Select.Item label="1 - Poor" value="1" />
              <Select.Item label="2 - Fair" value="2" />
              <Select.Item label="3 - Good" value="3" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Comment
            </FormControl.Label>
            <TextArea
              h={20}
              w="full"
              placeholder="This product is good ......"
              borderWidth={0}
              bg={Colors.sudOrange}
              py={4}
              _focus={{ 
                bg: Colors.sudOrange, 
              }}
            />
          </FormControl>
          <Buttone bg={Colors.main} color={Colors.white}>
            SUBMIT
          </Buttone>
          
          <Message
          color={Colors.white}
          bg={Colors.black}          
          children={
            "Please 'Login' to write a review" 
          }
        />
        </VStack>
        </Box*/}
    </Box>
  );
}
