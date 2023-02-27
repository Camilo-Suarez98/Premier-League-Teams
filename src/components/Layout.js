import React from 'react'

export const Layout = ({ children }) => {
  
  return (
    <>
      <header className='w-full h-48 flex flex-col justify-center items-center pb-5'>
        <img className='text-center w-60 h-32' src="../premier-league-logo.png" alt='premier logo' />
        <h1 className='text-2xl'>Select a team</h1>
      </header>  
      {children}
    </>
  )
}
