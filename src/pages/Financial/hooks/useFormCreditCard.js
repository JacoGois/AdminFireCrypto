import * as Yup from 'yup'
import { useFormik } from 'formik'

export const useFormCreditCard = ({ onSubmit }) => {
  const Schema = Yup.object({
    cvc: Yup.string().required('Required Field').min(3, 'Minimum 3 Characters'), 
    expiry: Yup.string().required('Required Field').min(4, 'Minimum 4 Characters'),
    focus: Yup.string(),
    name: Yup.string().required('Required Field'),
    number: Yup.string().required('Required Field').min(16, 'Minimum 16 Characters'),
  })

  return useFormik({
    initialValues: {
      cvc: '',
      expiry: '',
      focus: '',
      name: '',
      number: '',
    },
    onSubmit,
    validationSchema: Schema,
    validateOnBlur: false,
    validateOnChange: false,
  })
}
