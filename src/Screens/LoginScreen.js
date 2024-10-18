import { Text, Box, Heading, VStack, Input, Image, Button, Pressable } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import React, { useState, useContext, useEffect } from 'react'
import Colors from '../color'
import { Keyboard } from 'react-native'
import { LoginInit } from '../Services/fetchServices'
import FormikInputValue from '../Components/Form/FormikInputValue'
import FormikInputPasswordValue from '../Components/Form/FormInputPasswordValue'
import loginValidationSchema from '../Components/ValidationSchema/login'
import StyledText from '../Components/Form/StyledText'
import { Formik } from 'formik'
import { UserContext } from '../context/UserContext'

const initialValues = {
  email: '',
  password: ''
}

const LoginScreen = ({ navigation }) => {
  const { setUser } = useContext(UserContext)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const Submit = (data) => {
    setLoading(true)
    setError('')
    Keyboard.dismiss()

    LoginInit(data)
      .then(async response => {
        if (response.ok) return response.json()
        else {
          const { message } = await response.json()
          throw new Error(message)
        }
      })
      .then(userData => {
        setUser(userData)
        navigation.navigate('Bottom')
      })
      .catch(error => {
        setError(error.message)
      })
      .finally(() => setLoading(false))
  }

  const Alert = ({ error }) => {
    return (
      <StyledText style={{ color: 'red' }}>{error}</StyledText>
    )
  }

  return (
    /* Enlace para ir a la pantalla de registro */
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
        <Heading>LOG IN</Heading>
        <VStack space={8} pt="6">
          {/* USUARIO */}
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { resetForm }) => {
              Submit(values, resetForm)
            }}
            validateOnBlur={false}
            validateOnChange={false}
            validationSchema={loginValidationSchema}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (

              <>
                <FormikInputValue
                  name='email'
                  placeholder="admin@gmail.com"
                  label='Email'
                />

                <FormikInputPasswordValue
                  name='password'
                  placeholder="************"
                  label='Contraseña'
                />

                {
                  error
                    ? <Alert error={error} />
                    : null
                }

                <Button
                  _pressed={{
                    bg: Colors.main,
                  }}
                  my={30}
                  w="40%"
                  rounded={50}
                  bg={Colors.main}
                  onPress={handleSubmit}
                  isLoading={loading}
                  isLoadingText="Iniciando..."
                >
                  LOG IN
                </Button>
              </>
            )}
          </Formik>
        </VStack>
        {/* Botón de inicio de sesión */}

        {/* Enlace para ir a la pantalla de registro */}
        <Pressable mt={4} onPress={() => navigation.navigate('Register')}>
          <Text color={Colors.black} bold>¡CREA TU CUENTA!</Text>
        </Pressable>
      </Box>
    </Box>
  )
}

export default LoginScreen
