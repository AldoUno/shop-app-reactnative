import { useField } from "formik"
import StyledText from "./StyledText"
import StyledTextInput from "./StyledTextInput"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5
  }
})

const FormikInputValue = ({ name, ...props}) => {
  const [field, meta, helpers] = useField(name)
  
  return (
    <>
      <StyledTextInput
        error={meta.error}
        onChangeText={value => helpers.setValue(value)}
        value={field.value?.toString()}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  )
}

export default FormikInputValue
