export const animationClick = {
  click: { 
    scale: 0.9,
    transition: { duration: 0.3 },
  }
}

export const animationHoverClick = {
  hover: {
    scale: 1.3,
    transition: { duration: 0.5 },
  },
  click : { scale: 0.9 }
}

export const cardListVariant = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0.5,
    transition: {
      when: 'afterChildren',
    },
  },
}

export const cardItemVariant = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      mass: 0.45,
    },
  },
  hidden: {
    opacity: 0,
    scale: 0.75,
  },
  hovered: {
    scale: 1.1,
  },
}

export const emergenceVariant = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: 0.4,
      ease: [0, 0.71, 0.2, 1],
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0, 0.71, 0.2, 1],
    },
  },
}