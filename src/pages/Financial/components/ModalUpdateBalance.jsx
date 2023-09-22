import { useEffect } from "react"
import { Button } from "../../../components/Button"
import { MoneyField } from "../../../components/Fields/MoneyField"
import { Modal } from "../../../components/Modal/Modal"
import { useBalance } from "../../../contexts/BalanceContext"
import { useFormUpdateBalance } from "../hooks/useFormUpdateBalance"
import { useToast } from "@chakra-ui/react"

export const ModalUpdateBalance = ({ isOpen, onClose }) => {
  const toast = useToast()
  const { updateBalance, balance } = useBalance()
  const handleClose = () => {
    onClose()
    setFieldError('btc', '')
    setFieldError('eth', '')
    setFieldError('usdt', '')
  }
  const { values, handleSubmit, errors, setFieldValue, setFieldError } = useFormUpdateBalance({
    onSubmit: values => {
      updateBalance(values)
      toast({
        description: 'Balance Changed Successfully!',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
      })
      onClose()
    }
  })

  useEffect(() => {
    setFieldValue('btc', balance.btc)
    setFieldValue('eth', balance.eth)
    setFieldValue('usdt', balance.usdt)
  },[])


  return (
    <Modal.Root size='lg' isOpen={isOpen} onClose={handleClose}>
      <Modal.Header text='Update Balance' />
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <MoneyField placeholder='U$ 100.00' label='Bitcoin' errorMessage={errors.btc} name='btc' onChange={(e) => setFieldValue('btc', e.numberValue)} value={values.btc} />
          <MoneyField placeholder='U$ 100.00' label='Ethereum' errorMessage={errors.eth} name='eth' onChange={(e) => setFieldValue('eth', e.numberValue)} value={values.eth} />
          <MoneyField placeholder='U$ 100.00' label='USDT Tether' errorMessage={errors.usdt} name='usdt' onChange={(e) => setFieldValue('usdt', e.numberValue)} value={values.usdt} />
          <Button text='Salvar' type='submit' className='w-full mb-3 mt-2' />
        </form>
      </Modal.Body>
    </Modal.Root>
  )
}
