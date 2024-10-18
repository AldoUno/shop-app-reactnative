import { Box, Button, HStack, ScrollView, Text, Spinner, Center } from "native-base";
import React, { useEffect, useState, useContext } from "react";
import { Pressable } from "react-native";
import Colors from "../../color";
import { ListPedidosByUser } from "../../Services/fetchServices"; // Importa tu función de fetch
import { UserContext } from "../../context/UserContext"; // Importa el contexto del usuario

const Orders = () => {
  const [orders, setOrders] = useState([]); // Estado para almacenar las órdenes
  const [loading, setLoading] = useState(true); // Estado de carga
  const { user } = useContext(UserContext); // Obtener el usuario del contexto
  const token = user.authorisation?.token; // Obtener el token de autorización

  // Función para obtener los pedidos del usuario
  const fetchOrders = async () => {
    console.log("Iniciando la función fetchOrders"); // Log inicial
    try {
      setLoading(true);
      console.log("Llamando a ListPedidosByUser con parámetros:", "all-orders-user", 1, user.user.id, token);
      const response = await ListPedidosByUser("all-orders-user", 1, user.user.id, token); // Llama a la función de fetch
      console.log("Respuesta recibida de ListPedidosByUser:", response);
      
      const data = await response.json(); // Convierte la respuesta a JSON
      console.log("Datos convertidos a JSON:", data);
      
      if (data.ok) {
        console.log("Pedidos recibidos correctamente:", data.data);
        setOrders(data.data); // Almacena los pedidos en el estado
      } else {
        console.error("Error al obtener los pedidos:", data.msg);
      }
    } catch (error) {
      console.error("Error en la solicitud de pedidos:", error);
    } finally {
      setLoading(false); // Deja de mostrar el spinner de carga
      console.log("Finalizando fetchOrders, loading:", loading);
    }
  };

  // Llama a fetchOrders cuando el componente se monta
  useEffect(() => {
    console.log("Componente montado, llamando a fetchOrders");
    fetchOrders();
  }, []);

  if (loading) {
    console.log("Mostrando Spinner de carga...");
    return (
      <Center flex={1}>
        <Spinner color={Colors.main} size="lg" />
        <Text mt={3}>Cargando órdenes...</Text>
      </Center>
    );
  }

  console.log("Renderizando la lista de órdenes, total de órdenes:", orders.length);
  console.log("Contenido de orders:", orders);

  return (
    <Box h="full" bg={Colors.white}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Mapear las órdenes obtenidas y mostrarlas */}
        {orders.length > 0 ? (
          orders.map((order) => (
            <Pressable key={order.id}>
              <HStack
                space={3}
                justifyContent="space-between"
                alignItems="center"
                bg={order.status?.description === "PAGADO" ? Colors.deepGray : Colors.gray}
                py={5}
                px={1}
                w="full"
              >
                <Box flex={1}>
                  <Text fontSize={9} color={Colors.blue} isTruncated>
                    {order.id}{order.user?.cedula}
                  </Text>
                </Box>
                <Box flex={1} alignItems="center">
                  <Text fontSize={12} bold color={Colors.black} isTruncated>
                    {order.status?.description?.toUpperCase() || 'SIN ESTADO'}
                  </Text>
                </Box>
                <Box flex={1} alignItems="center">
                  {/* Formatear la fecha correctamente */}
                  <Text fontSize={11} italic color={Colors.black} isTruncated>
                    {order.created_at ? new Date(order.created_at).toLocaleDateString() : 'Sin fecha'}
                  </Text>
                </Box>
                <Box flex={1} alignItems="flex-end">
                  <Button
                    w={90}
                    h={35}
                    rounded={50}
                    bg={order.status?.description === "PAGADO" ? Colors.main : Colors.red}
                    _text={{ color: Colors.white, fontSize: '10px' }}
                    _pressed={{ bg: Colors.main }}
                  >₲ {order.total ? parseInt(order.total).toLocaleString() : '0'} {/* Formateamos el total */}
                  </Button>
                </Box>
              </HStack>
            </Pressable>
          ))
        ) : (
          <Center>
            <Text>No se encontraron órdenes</Text>
          </Center>
        )}
      </ScrollView>
    </Box>
  );
};

export default Orders;
