import React, { useContext } from 'react'
import { ThemeContext } from '../../../contexts/theme'
import lightMode from './img/lightMode.png'
import darkMode from './img/darkMode.png'
import Img from './img.js'

export default function Nav() {
    const [{ isDark }, toggleTheme] = useContext(ThemeContext)

    return (
        <div className='w-[100%] nav h-[65px] border-b-[2px] bg-[#060a27] border-[#E300B1] fixed top-0 flex flex-row justify-start items-center'>
            <h1 className='pl-[150px] title text-[2rem]'>Task Notation</h1>
        </div>
    ) 
}
