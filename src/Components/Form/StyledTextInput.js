import { FormControl, Input } from "native-base"
import React from "react"
import { StyleSheet, } from "react-native"

const styles = StyleSheet.create({
  textInput: {
    margin: 3,
    fontSize: 14,
  },
})
const StyledTextInput = ({ style = {}, error, ...props }) => {
  const inputStyle = [
    styles.textInput,
    style,
  ]

  return (
        <FormControl style={{marginBottom: 10}}>
            <FormControl.Label>{props.label}</FormControl.Label>
            <Input w="100%" style={inputStyle} borderColor={error ? '#ff0000' : null} {...props} variant="underlined"/>
        </FormControl>
  )
}

export default StyledTextInput
