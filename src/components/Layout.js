import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const Layout = ({ children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  
  return (
    <div className='w-3/4 m-auto'>
      <header className='w-full h-48 relative flex flex-col justify-center items-center py-5'>
        <button className='absolute right-5 text-2xl' onClick={toggleTheme}>
          {theme === 'light' ? '🌝' : '🌚'}
        </button>
        <img className={theme === 'light' ? 'hidden' : 'text-center w-60 h-32'} src="../premier-league-logo.png" alt='premier logo' />
        <img className={theme === 'dark' ? 'hidden' : 'text-center w-60 h-32'} src="../logo-premier-blanco.png" alt='premier logo' />
        <h1 className='text-2xl pt-5'>Select a team</h1>
      </header>  
      {children}
    </div>
  )
}
