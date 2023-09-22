export const sidebarAnimation = {
  open: {
      width: '15.5rem',
      transition: {
        damping: 11,
        mass: 1,
      duration: 0.5,
      type: 'spring',
      bounce: 0.25
    },
  },
  close: {
    width: '4.5rem',
    transition: {
      damping: 13,
      mass: 0.7,
      duration: 0.5,
      type: 'spring',
      bounce: 0.25
    },
  },
};

export const showItemAnimation = {
  hidden: {
    width: 0,
    opacity: 0, 
    transition: {
      duration: 0.2,
    },
  },
  show: {
    opacity: 1,
    width: "auto",
    transition: {
      duration: 0.2,
    },
  },
};