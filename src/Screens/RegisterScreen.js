import { Text, Box, Heading, VStack, Input, Image, Button, Pressable } from 'native-base';
import { MaterialIcons, Ionicons, AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import Colors from '../color';
import { RegisterUser } from '../Services/fetchServices'; // Importamos la función de registro
import { Keyboard } from 'react-native';

function RegisterScreen({ navigation }) {
  // Estado para almacenar los valores del formulario
  const [username, setUsername] = useState('');
  const [surname, setSurname] = useState('');  // Añadido para almacenar el apellido
  const [cedula, setCedula] = useState('');    // Añadido para almacenar la cédula
  const [phone, setPhone] = useState('');      // Añadido para almacenar el número de teléfono
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Función para manejar el registro
  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    Keyboard.dismiss();

    const data = {
      name: username,
      surname: surname,
      cedula: cedula,
      phone: phone,
      email: email,
      password: password,
      rol_id: 3
    };

    try {
      const response = await RegisterUser(data);
      if (response.ok) {
        const userData = await response.json();
        // Redirigir al usuario a la pantalla principal después del registro exitoso
        navigation.navigate('Login');
      } else {
        const { message } = await response.json();
        throw new Error(message);
      }
    } catch (error) {
      if (error.message.includes('Network request failed')) {
        setError('Error de red. Revisa tu conexión a Internet.');
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const Alert = ({ error }) => (
    <Text color="red.500" fontSize="sm">
      {error}
    </Text>
  );

  return (
    <Box flex={1} bg={Colors.white}>
      <Image
        flex={1}
        alt="Logo"
        resizeMode="cover"
        size="lg"
        w="full"
        source={require("../../assets/cover.png")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
      >
        <Heading>SIGN UP</Heading>
        <VStack space={5} pt="6"> 

          {/* USERNAME */}
          <Input
            InputLeftElement={<AntDesign name="user" size={20} color="black" />}
            variant="underlined"
            placeholder="Nombre de usuario"
            w="70%"
            pl={2}
            color={Colors.black}
            borderBottomColor={Colors.underline}
            value={username}
            onChangeText={setUsername}
          />
          {/* SURNAME */}
          <Input
            InputLeftElement={<AntDesign name="user" size={20} color="black" />}
            variant="underlined"
            placeholder="Apellido"
            w="70%"
            pl={2}
            color={Colors.black}
            borderBottomColor={Colors.underline}
            value={surname}
            onChangeText={setSurname}
          />
          {/* CEDULA */}
          <Input
            InputLeftElement={<AntDesign name="idcard" size={20} color="black" />}
            variant="underlined"
            placeholder="Cédula"
            w="70%"
            pl={2}
            color={Colors.black}
            borderBottomColor={Colors.underline}
            value={cedula}
            onChangeText={setCedula}
          />
          {/* PHONE */}
          <Input
            InputLeftElement={<MaterialIcons name="phone" size={20} color="black" />}
            variant="underlined"
            placeholder="Teléfono"
            w="70%"
            pl={2}
            color={Colors.black}
            borderBottomColor={Colors.underline}
            value={phone}
            onChangeText={setPhone}
          />
          {/* EMAIL */}
          <Input
            InputLeftElement={<MaterialIcons name="email" size={20} color={Colors.black} />}
            variant="underlined"
            placeholder="user@gmail.com"
            w="70%"
            pl={2}
            color={Colors.black}
            borderBottomColor={Colors.underline}
            value={email}
            onChangeText={setEmail}
          />
          {/* PASSWORD */}
          <Input
            InputLeftElement={<Ionicons name="eye-sharp" size={20} color="black" />}
            variant="underlined"
            placeholder="************"
            w="70%"
            type="password"
            pl={2}
            color={Colors.black}
            borderBottomColor={Colors.underline}
            value={password}
            onChangeText={setPassword}
          />
        </VStack>

        {error ? <Alert error={error} /> : null}

        <Button
          _pressed={{ bg: Colors.main }}
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.main}
          onPress={handleSubmit}
          isLoading={loading}
          isLoadingText="Registrando..."
        >
          SIGN UP
        </Button>

        <Pressable mt={4} onPress={() => navigation.navigate('Login')}>
          <Text color={Colors.black} bold>
            INICIA SESIÓN
          </Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default RegisterScreen;
