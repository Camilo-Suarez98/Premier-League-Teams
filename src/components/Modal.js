import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Modal = ({ name, year, city, stadiumName, stadiumImage, capacity, onClick }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={theme === 'light' ? 'w-3/4 m-auto fixed top-0 left-0 bottom-0 right-0 bg-gray-800 flex flex-col items-center justify-center sm:w-full' : 'w-3/4 m-auto fixed top-0 left-0 bottom-0 right-0 bg-gray-100 flex flex-col items-center justify-center sm:w-full'}>
      <div className={theme === 'light' ? 'w-3/4 m-auto text-center bg-gray-700 p-6 rounded-3xl sm:w-10/12 sm:p-4' : 'w-3/4 m-auto text-center bg-white p-6 rounded-3xl sm:w-10/12 sm:p-4'}>
        <div className='border-b-2 border-sky-600 p-3 relative'>
          <h1 className='text-4xl font-bold md:text-3xl ls:text-xl'>{name}</h1>
          <div className='absolute top-0 bottom-0 right-3 flex items-center md:static md:justify-center'>
            <button onClick={onClick}>
              <span className="material-symbols-outlined text-4xl">
                close
              </span>
            </button>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <p>The club was founded in {year}, {city} (UK)</p>
          <h1>{stadiumName.includes('Stadium') ? stadiumName : stadiumName + " Stadium"}</h1>
          <img className='w-96 rounded-2xl mg:w-80' src={stadiumImage} alt='stadium' />
          <p>Capacity for <span className='font-bold'>{capacity}</span> people</p>
        </div>
      </div>
    </div>
  )
}

export default Modal
