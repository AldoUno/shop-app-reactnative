import * as yup from 'yup'

const loginValidationSchema = yup.object().shape({
  email: yup
    .string('Debes introducir un EMAIL valido')
    .email('Debes ingresar tu email')
    .required('El EMAIL es requerido'),
  password: yup
    .string()
    .required('La CONTRASEÑA es requerida')
})

export default loginValidationSchema
