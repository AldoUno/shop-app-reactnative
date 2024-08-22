import { Box } from 'native-base'; // Importamos los componentes necesarios de NativeBase
import React, { useState } from 'react'; // Importamos React
import Colors from '../color'; // Importamos el archivo de colores
import HomeSearch from '../Components/HomeSearch'; // Importamos el componente HomeSearch
import HomeProducts from '../Components/HomeProducts'; // Importamos el componente HomeProducts

function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    /* Contenedor principal con fondo naranja */
    <Box flex={1} bg={Colors.sudOrange}>
      <HomeSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> {/* Renderizamos el componente HomeSearch */}
      <HomeProducts searchQuery={searchQuery} /> {/* Renderizamos el componente HomeProducts */}
    </Box>
  );
}

export default HomeScreen; // Exportamos el componente HomeScreen
