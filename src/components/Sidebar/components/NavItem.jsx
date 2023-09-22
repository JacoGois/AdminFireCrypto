import { AnimatePresence, motion } from 'framer-motion'
import { showItemAnimation } from '../animations'
import { NavLink, useResolvedPath } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import classNames from 'classnames'
import { animationClick } from '../../../animations'
import { useViewport } from '../../../hooks'
export const NavItem = ({ isOpen, path = '', Icon, name }) => {
  const { pathname } = useResolvedPath()
  const { isXs, isSm, isMoreXl } = useViewport()
  return (
    <motion.span 
      variants={animationClick}
      whileTap={'click'}
      animate={isOpen ? 
          { x: 0, 
          width: "100% ",
        } 
          : 
        { x: isXs || isSm ? 4 : isMoreXl ? 7 : 5,
          transitionEnd: {
            width: "fit-content",
          }
        }
      }
      className={twMerge(classNames('relative px-[9px] py-2 rounded-lg transition-colors duration-500 hover:bg-gray-100 pr-2.5', {
        'text-primary-light3 rounded-tl-none rounded-bl-none  hover:bg-gray-100' : pathname === path,
        'rounded-md' : !isOpen
      }))}
      >
      <motion.span animate={pathname === path ? { opacity: 1, duration: 0.5 } : { opacity: 0, duration: 0.5 }} 
      className="absolute top-0 left-0 w-[3px] h-full rounded-tl-lg rounded-bl-lg bg-primary rounded-full"></motion.span>
      <NavLink to={path} className='flex gap-3 items-center font-medium'>
          <Icon size={22}  /> 
          <AnimatePresence>
            {isOpen && (
              <motion.div
              variants={showItemAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
              >
                {name}
              </motion.div>
            )}
          </AnimatePresence>
      </NavLink>
    </motion.span>
  )
}