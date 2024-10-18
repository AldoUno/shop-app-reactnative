import { Button, Center, HStack, Modal, VStack, Text, Pressable, Image, TextArea } from 'native-base';
import React, { useState, useContext } from 'react';
import Buttone from './Buttone';
import Colors from '../color';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext'; // Asegúrate de que tienes el contexto del usuario
import { Submit } from '../Services/fetchServices'; // La función para hacer el submit

const OrderModel = () => {
  const navigation = useNavigation();
  const [showModel, setShowModel] = useState(false);
  const { cart, clearCart } = useContext(CartContext);
  const { user } = useContext(UserContext); // Obtener el usuario del contexto para el user_id
  const [loading, setLoading] = useState(false); // Para manejar el estado de carga
  const [error, setError] = useState('');
  const [mensaje, setMensaje] = useState(""); // Estado para manejar el comentario

  // Calcular los valores dinámicos
  const productsTotal = cart.reduce((sum, item) => sum + item.precio * item.quantity, 0);
  const tax = cart.reduce((sum, item) => sum + item.iva * item.quantity, 0); // Impuesto
  const total = productsTotal + tax; // Total final

  // Crear el array dinámico con los datos calculados
  const OrdersInfo = [
    {
      title: "Productos",
      price: productsTotal,
      color: "black",
    },
    {
      title: "Impuesto",
      price: tax,
      color: "black",
    },
    {
      title: "Monto Total",
      price: total,
      color: "main",
    },
  ];

    // Función para crear la orden
    const handleCreateOrder = async () => {
      setLoading(true);
      setError('');
      console.log("Iniciando la creación de la orden...");
      const token = user.authorisation?.token; // Obtener el token de autorización
  
      if (!token) {
        console.error("Error: No se encontró el token de autorización");
        setError('No se encontró el token de autorización');
        setLoading(false);
        return;
      }

      const orderData = {
        user_id: user.user.id, // El ID del usuario logueado
        deliveryDate: new Date().toISOString(), // Aquí puedes ajustar la fecha de entrega
        status_id: 1, // Asignar el status_id, puedes ajustarlo según lo que corresponda en tu aplicación
        total, // Total que ya se calculó en el frontend
        mensaje,
        products: cart.map((item) => ({
          product_id: item.id,
          quantity: item.quantity,
          price: item.precio,
          subtotal: item.precio * item.quantity,
          vat: item.iva,         
          status_id: 1, // Puedes ajustar esto si tienes diferentes status para los productos en la orden
        })),
      };
      console.log("Datos de la orden preparados:", orderData);


      try {
        const response = await Submit(orderData, 'create-order', token); // Aquí haces el Submit de la orden
        console.log("Respuesta de la API:", response);
        if (response.ok) {
          console.log("Orden creada exitosamente");
          clearCart(); // Limpiar el carrito si la orden se creó exitosamente
          setShowModel(false); // Cerrar el modal
          navigation.navigate('Home'); // Navegar al Home o donde desees
        } else {
          const { message } = await response.json();
          console.error("Error al crear la orden:", message);
          setError(message);
        }
      } catch (error) {
        console.error("Error en el proceso de creación de la orden:", error);
        setError('Error al crear la orden. Inténtalo de nuevo.');
      } finally {
        setLoading(false);
        console.log("Proceso de creación de la orden finalizado.");
      }
    };

  return (
    <Center>

      <TextArea
        h={20}
        placeholder="Agregar un mensaje..."
        value={mensaje}
        onChangeText={(text) => setMensaje(text)}
        bg={Colors.white}
        mb={5}
      />

      <Buttone onPress={() => setShowModel(true)} bg={Colors.main} color={Colors.white} mt={5}>
        MOSTRAR MÉTODO DE PAGO Y TOTAL
      </Buttone>
      <Modal isOpen={showModel} onClose={() => setShowModel(false)} size="lg">
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton />
          <Modal.Header>Orden</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {OrdersInfo.map((i, index) => (
                <HStack key={index} alignItems="center" justifyContent="space-between">
                  <Text fontWeight="medium">{i.title}</Text>
                  <Text color={i.color === "main" ? Colors.main : Colors.black} bold>
                    ₲{i.price}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Pressable
              w="full"
              justifyContent="center"
              bg={Colors.paypal}
              h={45}
              rounded={3}
              overflow="hidden"
              onPress={() => setShowModel(false)}
            >
              <Image
                source={require("../../assets/efectivo.png")}
                alt="efectivo"
                resizeMode="contain"
                w="full"
                h={34}
              />
            </Pressable>
            <Button
              w="full"
              mt={2}
              bg={Colors.black}
              h={45}
              _text={{ color: Colors.white }}
              onPress={() => {
                navigation.navigate("Home");
                setShowModel(false);
              }}
              _pressed={{ bg: Colors.black }}
            >
              RESERVAR DESPUÉS
            </Button>
            
            <Button
              w="full"
              mt={2}
              bg={Colors.black}
              h={45}
              _text={{ color: Colors.white }}
              onPress={handleCreateOrder} // Cambiar la función aquí para crear la orden
              isLoading={loading}
              _pressed={{ bg: Colors.black }}
            >
              RESERVAR AHORA
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default OrderModel;
