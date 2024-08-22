import { View } from "react-native";
import React, { useState, useEffect } from "react";
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
import { CheckBox } from "react-native";
import Buttone from "./Buttone";

export default function Review({ productId, productName }) {
  const [rating, setRating] = useState("");
  const [comment, setCommet] = useState("");
  const [averageRating, setAverageRating] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Obtener el promedio de rating del producto
    const fetchAverageRating = async () => {
      try {
        const response = await fetch(`http://tu-api.com/api/product/${productId}/average-rating`);
        const data = await response.json();
        if (data.ok) {
          setAverageRating(data.averageRating);
        } else {
          console.error(data.msg);
        }
      } catch (error) {
        console.error('Error fetching average rating:', error);
      }
    };

    // Obtener las reseñas del producto
    const fetchReviews = async () => {
      try {
        const response = await fetch(`http://tu-api.com/api/product/${productId}/reviews`);
        const data = await response.json();
        if (data.ok) {
          setReviews(data.reviews);
        } else {
          console.error(data.msg);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchAverageRating();
    fetchReviews();
  }, [productId]);


  const handleSubmit = () => {
    // Aquí puedes enviar la reseña al backend usando productId
    console.log("Product ID:", productId);
    console.log("Rating:", rating);
    console.log("Comment:", comment);
    // Implementar lógica para enviar datos al backend
  };

  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEW
      </Heading>
      {/* IF THERE IS NO REVIEW */}
      <Message
        color={Colors.main}
        bg={Colors.deepGray}
        bold
        children={"NO REVIEW"}
      />

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
      <Box mt={6}>
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
            <Select.Item label="4 - Very Good" value="4" />
            <Select.Item label="5 - Excellent" value="5" />
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
          
          {/*<Message
          color={Colors.white}
          bg={Colors.black}          
          children={
            "Please 'Login' to write a review" 
          }
        />*/}
        </VStack>
        </Box>
    </Box>
  );
}
