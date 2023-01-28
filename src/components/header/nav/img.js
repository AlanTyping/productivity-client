import React, {useContext} from 'react'
import { ThemeContext } from '../../../contexts/theme'

export default function Img({img}) {
  const [{ isDark }, toggleTheme] = useContext(ThemeContext)

  return (
    <img src={img} alt={img} className='h-9 w-9 cursor-pointer' onClick={toggleTheme} />
  )
}
