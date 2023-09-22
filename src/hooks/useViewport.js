import { useState, useEffect } from 'react'

export const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return {
    width,
    height,
    isXs: width >= 0 &&  width <= 450,
    isSm: width >= 450 &&  width <= 640,
    isMd: width > 640 && width <= 768,
    isMoreMd: width > 640,
    isSmallerMd: width < 640,
    isLg: width > 768 && width <= 1024,
    isXl: width > 1024 && width <= 1280,
    isMoreXl: width > 1024,
    is2xl: width >= 1400,
  }
}
