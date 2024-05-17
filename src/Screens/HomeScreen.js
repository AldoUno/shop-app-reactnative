import { Box } from 'native-base'; // Importamos los componentes necesarios de NativeBase
import React from 'react'; // Importamos React
import Colors from '../color'; // Importamos el archivo de colores
import HomeSearch from '../Components/HomeSearch'; // Importamos el componente HomeSearch
import HomeProducts from '../Components/HomeProducts'; // Importamos el componente HomeProducts

function HomeScreen() {
  return (
    /* Contenedor principal con fondo naranja */
    <Box flex={1} bg={Colors.sudOrange}>
      <HomeSearch /> {/* Renderizamos el componente HomeSearch */}
      <HomeProducts /> {/* Renderizamos el componente HomeProducts */}
    </Box>
  );
}

export default HomeScreen; // Exportamos el componente HomeScreen
