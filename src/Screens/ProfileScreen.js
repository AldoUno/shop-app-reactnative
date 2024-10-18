import { View, Text, Center, Image, Heading } from 'native-base'
import React, { useContext } from 'react'
import Colors from '../color'
import Tabs from '../Components/Profile/Tabs'
import { UserContext } from '../context/UserContext'

function ProfileScreen() {

  const { user } = useContext(UserContext)
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    
    const day = date.getDate();
    const month = date.toLocaleString('es-ES', { month: 'long' });
    const year = date.getFullYear();

    return `${day} de ${month} de ${year}`;
  }


  // Verificación para asegurarse de que `user` no es null
  if (!user || !user.user) {
    return (
      <Center flex={1} justifyContent="center" alignItems="center">
        <Text fontSize={20} color={Colors.black}>Cargando...</Text>
      </Center>
    );
  }
  
  return (
    <>
        <Center bg={Colors.main} pt={10} pb={6}>
          <Image         
            source={{ uri: "http://res.cloudinary.com/zpune/image/upload/v1645429478/random/user_u3itjd.png" }}
            alt="profile"
            w={24}
            h={24}
            resizeMode='cover' 
          />
          <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          {`Usuario ${user.user?.name}`}
          </Heading>
          <Text italic fontSize={10} color={Colors.white}>
          {`Último acceso: ${formatDate(user.user?.created_at)}`}
          </Text>
        </Center>
        {/* TABS */}
        <Tabs />
    </>
  )
}

export default ProfileScreen
