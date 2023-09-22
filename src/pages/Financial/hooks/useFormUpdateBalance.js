import * as Yup from 'yup'
import { useFormik } from 'formik'

export const useFormUpdateBalance = ({ onSubmit }) => {
  const Schema = Yup.object({
    btc: Yup.string().required('Required Field'),
    eth: Yup.string().required('Required Field'),
    usdt: Yup.string().required('Required Field'),
  })

  return useFormik({
    initialValues: {
      btc: '',
      eth: '',
      usdt: '',
    },
    onSubmit,
    validationSchema: Schema,
    validateOnBlur: false,
    validateOnChange: false,
  })
}
