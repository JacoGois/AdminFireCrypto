import { MdKeyboardArrowLeft } from "react-icons/md"
import { motion } from 'framer-motion'
import { animationHoverClick } from '../../../animations'

export const ButtonOpenCloseSidebar = ({ onToogle, isOpen }) => {
  return (
    <motion.button
      variants={animationHoverClick}
      whileHover={'hover'}
      whileTap={'click'}
      onClick={onToogle} 
      className= 'hidden md:block bg-surface border rounded-full absolute p-[1.5px] top-3 right-[-11px] cursor-pointer shadow-lg'
    >
      <motion.div
      animate={{
        rotate: isOpen ? 0 : 180,
        translateX: isOpen ? -1 : 0,
        transition: { duration: 0.5 },
      }}
      >
        <MdKeyboardArrowLeft className='h-3 w-3 ' />
      </motion.div>
    </motion.button>
  )
}