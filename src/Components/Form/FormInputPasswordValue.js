import { useField } from "formik"
import StyledText from "./StyledText"
import { Pressable, StyleSheet } from "react-native"
import { FormControl, Icon, Input } from "native-base"
import { useState } from "react"
import { MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5
  },
  textInput: {
    margin: 3,
    fontSize: 14
  },
})



const FormikInputPasswordValue = ({ name, label, ...props }) => {
  const [show, setShow] = useState(false)
  const [field, meta, helpers] = useField(name)

  return (
    <>
      <FormControl style={{ marginBottom: 10 }}>
        <FormControl.Label>{label}</FormControl.Label>
        <Input
          style={styles.textInput}
          variant="underlined"
          type={show ? "text" : "password"} 
          InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} 
                size={5} 
                mr="2" 
                color="muted.400" />
              </Pressable>
          } 
          onChangeText={value => helpers.setValue(value)}
          value={field.value}
          borderColor={meta.error ? '#ff0000' : null}
          {...props}
          />
      </FormControl>

      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}

    </>
  )
}

export default FormikInputPasswordValue
