import { ModalAddCard } from './components/ModalAddCard';
import { useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ModalUpdateBalance } from './components/ModalUpdateBalance';
import { CardInformations } from './components/CardInformations';
import { PortfolioInformations } from './components/PortfolioInformations';
import { RecentBeneficiaries } from './components/RecentBeneficiaries';
import { LastTransactions } from './components/LastTransactions';

export const Financial = () => {
  const { isOpen:isOpenModalCard, onClose: onCloseModalCard, onOpen: onOpenModalCard } = useDisclosure()
  const { isOpen:isOpenUpdateBalance, onClose: onCloseUpdateBalance, onOpen: onOpenUpdateBalance } = useDisclosure()
  const [values, setValues] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  })

  const handleOpenModalCard = () => {
    onOpenModalCard()
  }

  const handleOpenModalBalance = () => {
    onOpenUpdateBalance()
  }

  useEffect(() => {
    const cardValues = JSON.parse(window.localStorage.getItem('cardValues'))
    if (cardValues) setValues({
      ...cardValues,
      focus: ''
    })
  },[])

  return (
    <>
      <ModalAddCard val={values} setValues={setValues} isOpen={isOpenModalCard} onClose={onCloseModalCard} />
      <ModalUpdateBalance isOpen={isOpenUpdateBalance} onClose={onCloseUpdateBalance} />
      <div className='grid grid-cols-1 md:grid-cols-[60%_38%] gap-4'>
        <div className='grid gap-2 md:place-items-center xl:gap-4 grid-cols-1 xl:grid-cols-2'>
          <CardInformations handleOpenModalBalance={handleOpenModalBalance} handleOpenModalCard={handleOpenModalCard} values={values} />
          <PortfolioInformations />
          <RecentBeneficiaries />
        </div>
        <LastTransactions />
      </div>
    </>
  )
}