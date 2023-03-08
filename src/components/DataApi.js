import { useState, useContext } from 'react'
import Modal from './Modal'
import { useFetch } from '../hook/useFetch'
import { ThemeContext } from '../context/ThemeContext'

const DataApi = () => {
  const { teams, loading } = useFetch()
  const [ showModal, setShowModal ] = useState(false)
  const [ modalData, setModalData ] = useState()
  const { theme } = useContext(ThemeContext)
  
  return (
    <div>
      {loading ?
        <div className='w-full flex flex-col justify-center items-center'>
          <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          <h1 className='text-center'>Loading the teams</h1> 
        </div> :
        <div className='grid grid-cols-3 gap-10 lg:grid-cols-2 ls:grid-cols-1'>
          {teams.map(group => (
            <button
              onClick={() => {setShowModal(true); setModalData(group)}}
              className={theme === 'dark' ?
                'bg-gray-200 hover:bg-gray-300 rounded-xl px-3 py-5 flex flex-col items-center justify-center ease-in duration-200 hover:-translate-y-3' :
                'bg-gray-800 hover:bg-gray-900 rounded-xl px-3 py-5 flex flex-col items-center justify-center ease-in duration-200 hover:-translate-y-3'} key={group.team.id}
            >
              <h1 className='text-3xl pb-3'>{group.team.name}</h1>
              <img src={group.team.logo} alt={group.team.name} />
            </button>
          ))}
          {showModal &&
            <Modal
              name={modalData.team.name}
              image={modalData.team.logo}
              year={modalData.team.founded}
              city={modalData.venue.city}
              stadiumName={modalData.venue.name}
              stadiumImage={modalData.venue.image}
              capacity={modalData.venue.capacity}
              onClick={() => setShowModal(false)}
            />
          }
        </div>
      }
    </div>
  )
}

export default DataApi;
