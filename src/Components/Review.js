const API_ENDPOIND = process.env.EXPO_PUBLIC_BASE_URL
const API_VERSION = process.env.EXPO_PUBLIC_VERSION
import { View } from "react-native";
import React, { useState, useEffect, useContext } from "react";
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
import { UserContext } from '../context/UserContext'



export default function Review({ productId, productName }) {
  const [rating, setRating] = useState("");
  const [comment, setCommet] = useState("");
  const [averageRating, setAverageRating] = useState(null);
  const [reviews, setReviews] = useState([]);
  
  
  const { user } = useContext(UserContext)

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`${API_ENDPOIND}/shop/all-comentarios`);
        const data = await response.json();
        console.log(response);
        if (data.ok) {
          // Filtrar los comentarios por el productId recibido
          const filteredReviews = data.data.filter(review => review.product_id === productId);
          setReviews(filteredReviews);

          // Calcular el promedio de las calificaciones
          const averageRating = filteredReviews.reduce((sum, review) => sum + parseFloat(review.rating), 0) / filteredReviews.length;
          setAverageRating(averageRating);

          console.log(filteredReviews);
        } else {
          console.error(data.msg);
        }
      } catch (error) {
        //console.error('Error al obtener los detalles del producto:', error);
      }
    };
  
    fetchProductDetails();
  }, [productId]);


  const handleSubmit = async () => {
    try {
      const response = await fetch(`${API_ENDPOIND}/shop/create-comentarios`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product_id: productId,
          client_id: user.user.id, // Asume que el client_id lo tienes disponible (puedes reemplazarlo con el valor correcto)
          rating: rating,
          comentario: comment,
        }),
      });
  
      const data = await response.json();
  
      if (data.ok) {
        console.log('Reseña enviada exitosamente:', data);
        // Aquí puedes actualizar la lista de reseñas o limpiar el formulario
        setRating("");  // Limpia el rating
        setCommet("");  // Limpia el comentario
      } else {
        console.error('Error al enviar la reseña:', data.msg);
      }
    } catch (error) {
      console.error('Error al enviar la reseña:', error);
    }
  };

  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        RESEÑAR
      </Heading>
      {/* IF THERE IS NO REVIEW */}
      <Box>
  {averageRating && (
    <Text bold fontSize={16}>
      Puntuación Media: {averageRating}
    </Text>
  )}
  {reviews.length > 0 ? (
    reviews.map((review, index) => (
      <Box key={index} bg={Colors.deepGray} p={3} mt={3} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          {`Usuario ${review.user?.name}`}
        </Heading>
        <Rating value={review.rating} />
        <Text my={2} fontSize={11}>
          {review.created_at}
        </Text>
        <Message
          color={Colors.black}
          bg={Colors.white}
          size={12}
          children={review.comentario}
        />
      </Box>
    ))
  ) : (
    <Message
      color={Colors.main}
      bg={Colors.deepGray}
      bold
      children={"SIN RESEÑAS"}
    />
  )}
</Box>
      {/* WRITE REVIEW */}
      <Box mt={6}>
        <Heading fontSize={15} bold mb={4}>
          RESEÑA ESTE PRODUCTO
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Calificación
            </FormControl.Label>
            <Select
              bg={Colors.sudOrange}
              borderWidth={0}
              rounded={5}
              py={4}
              placeholder="Elige Calificación"
              _selectedItem={{
                bg: Colors.sudOrange,
                endIcon: <CheckIcon size={3} />,
                justifyContent: "center",
                alignItems: "center",
              }}
              selectedValue={rating}
              onValueChange={(e) => setRating(e)}
            >
            <Select.Item label="1 - Deficiente" value="1" />
            <Select.Item label="2 - Regular" value="2" />
            <Select.Item label="3 - Bueno" value="3" />
            <Select.Item label="4 - Muy Bueno" value="4" />
            <Select.Item label="5 - Excelente" value="5" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Comentario
            </FormControl.Label>
            <TextArea
              h={20}
              w="full"
              placeholder="Este producto es bueno..."
              borderWidth={0}
              bg={Colors.sudOrange}
              py={4}
              _focus={{ 
                bg: Colors.sudOrange, 
              }}
              value={comment} // El valor del campo es el estado "comment"
              onChangeText={(text) => setCommet(text)} // Actualiza el estado de "comment"
            />
          </FormControl>
          <Buttone bg={Colors.main} color={Colors.white} onPress={handleSubmit}>
            ENVIAR
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
