import React from 'react'

const Modal = ({ name, image, year, city, stadiumName, stadiumImage, capacity, onClick }) => {
  return (
    <div className='w-3/4 m-auto fixed top-0 left-0 bottom-0 right-0 bg-gray-100 flex flex-col items-center justify-center'>
      <div className='w-3/4 m-auto text-center bg-white p-6'>
        <div className='border-b-2 border-sky-600'>
          <h1 className='text-2xl'>{name}</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <img src={image} alt='club' />
          <p>Founded in {year} and the teams palys in the city of {city}</p>
          <h1>{stadiumName.includes('Stadium') ? stadiumName : stadiumName + " Stadium"}</h1>
          <img src={stadiumImage} alt='stadium' />
          <p>Capacity for {capacity} people</p>
        </div>
        <div>
          <button className='bg-gray-100 rounded px-3 py-2' onClick={onClick}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
