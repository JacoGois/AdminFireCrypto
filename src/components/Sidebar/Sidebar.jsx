import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import { sidebarAnimation } from './animations'
import { NavItem } from './components/NavItem';
import { ButtonOpenCloseSidebar, LogoSidebar } from './components';
import { routes } from './routesSidebar'
import { useViewport } from '../../hooks';

export const Sidebar = () => {
  const [ isOpen, setIsOpen ] = useState(true)
  const onToogle = () => setIsOpen(!isOpen)
  const { isSmallerMd} = useViewport()
  
  useEffect(() => {
    if(!isSmallerMd) return
    setIsOpen(false)
  },[isSmallerMd])

  return (
    <motion.div
      variants={sidebarAnimation}
      animate={isOpen ? 'open' : 'close'}
      className='border-r w-[15.5rem] min-h-screen h-max relative text-gray shadow-xl py-3 px-2 bg-surface flex flex-col gap-3'
      > 
      <LogoSidebar isOpen={isOpen} />
      <nav className='flex gap-1 flex-col my-2 whitespace-pre cursor-pointer'>
        {routes.map(route => {
          const { icon: Icon, name, path} = route
          return (
            <NavItem key={name} Icon={Icon} name={name} isOpen={isOpen} path={path} />
          )
        })}
      </nav>
      <ButtonOpenCloseSidebar isOpen={isOpen} onToogle={onToogle} />
    </motion.div>
  )
}