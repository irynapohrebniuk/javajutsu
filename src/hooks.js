import { useEffect, createContext } from 'react'

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler]
  )
}

export const LanguageContext = createContext(null);

