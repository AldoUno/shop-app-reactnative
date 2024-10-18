import { Box, Select, CheckIcon } from 'native-base'; // Importamos Select de NativeBase
import React, { useState, useEffect, useContext } from 'react'; // Importamos React y hooks necesarios
import Colors from '../color';
import HomeSearch from '../Components/HomeSearch';
import HomeProducts from '../Components/HomeProducts';
import { List } from '../Services/fetchServices'; // Servicio para obtener las categorías
import { UserContext } from "../context/UserContext";

function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState([]); // Estado para almacenar las categorías
  const [selectedCategory, setSelectedCategory] = useState(''); // Estado para la categoría seleccionada
  const { user } = useContext(UserContext)
  
  const token = user.authorisation?.token

  useEffect(() => {
    // Llamada a la API para obtener las categorías
    const fetchCategories = async () => {
      const response = await List('all-categories', token); // Utilizamos el servicio para obtener las categorías
      if (response.ok) {
        const data = await response.json();
        setCategories(data.data); // Guardamos las categorías en el estado
      }
    };
    
    fetchCategories();
  }, []);

  return (
    <Box flex={1} bg={Colors.sudOrange}>
      <HomeSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Menú desplegable de categorías */}
      <Select
        selectedValue={selectedCategory}
        minWidth="200"
        placeholder="Selecciona una categoría"
        onValueChange={(value) => setSelectedCategory(value)}
        mt={1}
        mb={2}
        accessibilityLabel="Selecciona una categoría"
        _selectedItem={{
          bg: Colors.main,
          endIcon: <CheckIcon size="5" />,
        }}
      >
        <Select.Item
          label="Todas las categorías"
          value="" // Valor vacío para representar "todas"

        />
        {categories
        .sort((a, b) => a.description.localeCompare(b.description)) // Ordena alfabéticamente
        .map((category) => (
          <Select.Item
            key={category.id}
            label={category.description}
            value={category.id}
          />
        ))}
      </Select>

      {/* Pasamos la categoría seleccionada a HomeProducts para filtrar */}
      <HomeProducts searchQuery={searchQuery} selectedCategory={selectedCategory} />
    </Box>
  );
}

export default HomeScreen;
