import { Modal } from "../../../components/Modal/Modal"
import { useFormCreditCard } from "../hooks";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import { Button } from "../../../components/Button";
import { TextField } from "../../../components/Fields/TextField";
import { FormatField } from "../../../components/Fields/FormatField";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";

export const ModalAddCard = ({ isOpen, onClose, setValues, val }) => {
  const toast = useToast()
  
  const { values, errors, handleChange, handleSubmit, setFieldValue, resetForm } = useFormCreditCard({
    onSubmit: values => {
      setValues(values)
      window.localStorage.setItem('cardValues', JSON.stringify(values))
      toast({
        description: 'Card Saved Successfully',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
      })
      onClose()
    }
  })

    const handleClose = () => {
    resetForm()
    onClose()
    }
    
    const handleFocus = (e) => {
      const inputName = e.target.name
      setValues({ ...val, focus: inputName})
      setFieldValue('focus' ,inputName)
    }

    useEffect(() => {
      const cardValues = JSON.parse(window.localStorage.getItem('cardValues'))
      if (cardValues) {
        setFieldValue('name', cardValues.name )
        setFieldValue('number',cardValues.number )
        setFieldValue('expiry',cardValues.expiry )
        setFieldValue('cvc',cardValues.cvc )
      }
    },[])

  return (
    <Modal.Root size='lg' isOpen={isOpen} onClose={handleClose}>
      <Modal.Header text='Write your Card Details' />
      <Modal.Body>
        <div className="mt-2 mb-4">
          <Cards
            cvc={values.cvc}
            expiry={values.expiry}
            focused={values.focus}
            name={values.name}
            number={values.number}
          />
        </div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <FormatField errorMessage={errors.number} label='Number' mask="" format='###################' onFocus={handleFocus} type="text" name='number' placeholder='Ex.: 6097862323123121' value={values.number} onChange={handleChange} />
          <TextField errorMessage={errors.name} label='Name' onFocus={handleFocus} type="text" name='name' placeholder='Ex.: Jonh J S Witt' value={values.name} onChange={handleChange} />
          <div className="flex gap-2">
          <FormatField className='w-full' errorMessage={errors.expiry} label='Expiry' format='##/##' onFocus={handleFocus} type="text" name='expiry' placeholder='Ex.:  12/27' value={values.expiry} onChange={handleChange} />
          <FormatField className='w-full' errorMessage={errors.cvc} label='CVC' format='###' onFocus={handleFocus} type="text" name='cvc' placeholder='Ex.: 123' value={values.cvc} onChange={handleChange}/>
          </div>
          <Button text='Salvar' className='mb-3 mt-1' type='submit' />
        </form>
      </Modal.Body>
    </Modal.Root>
  )
}
