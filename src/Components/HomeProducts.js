import React, { useEffect, useState } from 'react'
import { Box, ScrollView, Flex, Heading, Pressable, Text } from 'native-base'
import Colors from '../color'
import Rating from './Rating'
import { useNavigation } from '@react-navigation/native'
import { ListItems } from '../Services/fetchServices'
import { Image } from 'react-native'

function HomeProducts() {
  const navigation = useNavigation()

  const [products, setProducts] = useState([])
  const [showSearchInput, setShowSearchInput] = useState(false)
  const [loading, setLoading] = useState(false)
  const [searchThis, setSearchThis] = useState('')
  const [path, setPath] = useState('products')
  const [pageNumber, setPageNumber] = useState(1)
  const [loadingData, setLoadingData] = useState(true)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setProducts([])
  }, [])

  useEffect(() => {
    getProducts()
  }, [pageNumber])

  const getProducts = async () => {
    setLoading(true)

    ListItems(path, pageNumber)
      .then(res => {
        if (res.ok) return res.json()
        else {
          const { message } = res.json()
          throw new Error(message)
        }
      })
      .then(data => {
        if (data.data.length > 0) {
          setProducts([...products, ...data.data])
          setVisible(true)
        } else {
          setVisible(false)
        }
      })
      .catch(error => console.log('Avisos!', error.message))
      .finally(() => { setLoading(false), setLoadingData(false) })
  }

  const showToastMessage = (title = 'Aviso', description = 'Description', variant = 'solid') => {
    return (
      toast.show({
        render: () => {
          return (
            <Alert mb={5} bg={theme.footerBackground} maxWidth="95%" alignSelf="center" flexDirection="row" status={"info"} variant={variant}>
              <VStack space={1} flexShrink={1} w="100%">
                <HStack flexShrink={1} alignItems="center" justifyContent="space-between">
                  <HStack space={2} flexShrink={1} alignItems="center">
                    <Alert.Icon />
                    <Text style={{ color: theme.textPrimary, fontWeight: '500', flexShrink: 1 }}>
                      {title}
                    </Text>
                  </HStack>
                  <IconButton variant="unstyled" icon={<CloseIcon size="3" />} _icon={{
                    color: variant === "solid" ? "lightText" : "darkText"
                  }} onPress={() => toast.closeAll()} />
                </HStack>
                <Text px="6" style={{ color: theme.textPrimary }}>
                  {description}
                </Text>
              </VStack>
            </Alert>
          )
        }
      })
    )
  }

  const reloadProducts = async () => {
    setLoadingData(true)
    setShowSearchInput(false)
    setSearchThis('')

    ListItems(path, 1, token)
      .then(res => {
        if (res.ok) return res.json()
        throw new Error('Ha ocurrido un error durante la petición. Intente nuevamente!')
      })
      .then(data => {
        if (data?.data?.length > 0) {
          setProducts([...data?.data])
          return setVisible(true)

        }
        showToastMessage('Aviso!', 'Ya no existen productos para mostrar!')
        setVisible(false)
      })
      .catch(error => showToastMessage('Aviso!', error.message))
      .finally(() => { setLoading(false), setLoadingData(false) })
  }

  const searchProduct = async (code) => {
    setLoading(true)

    Get(`${path}/search`, code, token)
      .then(async res => {
        if (res.ok) return res.json()
        const { msg } = await res.json()
        throw new Error(msg)
      })
      .then(data => {
        if (data?.data?.length > 0) {
          return setProducts([...data.data])
        }
        setProducts([])
        showToastMessage('Aviso!', 'No es encontraron productos con el termino ingresado')
      })
      .catch(error => showToastMessage('Aviso!', error.message))
      .finally(() => { setLoading(false), setLoadingData(false), setVisible(false) })
  }

  const getMoreProducts = () => setPageNumber(pageNumber + 1)

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
      >
        {
          products.map((product) => (
            <Pressable
              onPress={() => navigation.navigate('Single', product)}
              key={product.id}
              w="47%"
              bg={Colors.white}
              rounded="md"
              shadow={2}
              pt={0.3}
              my={3}
              pb={2}
              overflow="hidden"
            >
              <Image
                source={{uri: 'asset:/visa.png'}}
                alt={product.codproducto}
                style={{
                  width: 200,
                  height: 200,
                  resizeMode: 'contain',
                }}
              />
              <Box px={4} pt={1}>
                <Heading size="sm" bold>
                  ₲{product.precio}
                </Heading>
                <Text fontSize={12} mt={1} isTruncated w="full">
                  {product.descripcion}
                </Text>
                {/* RATING */}
                {/* <Rating value={product.rating} /> */}
              </Box>
            </Pressable>
          ))
        }

      </Flex>
    </ScrollView>
  )
}

export default HomeProducts
