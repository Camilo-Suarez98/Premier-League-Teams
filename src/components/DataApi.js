import { useState } from 'react'
import Modal from './Modal'
import { Input } from './Input'
import { useFetch } from '../hook/useFetch'

const DataApi = () => {
  const { teams, loading } = useFetch()
  const [ showModal, setShowModal ] = useState(false)
  const [ modalData, setModalData ] = useState()
  const [ searchTeam, setSearchTeam ] = useState('')

  const handleSearchTeam = (e) => {
    setSearchTeam(e.target.value)
    console.log(searchTeam);
  }

  const handleSumbit = (e) => {
    e.preventDefault()
    if (!searchTeam) {
      return
    }
  }
  
  return (
    <div>
      <form onSubmit={handleSumbit}>
        <Input
          className="flex w-1/3 text-center m-auto outline-none border-2 border-gray-200 rounded-lg mb-5"
          type='text'
          placeholder='Search the team'
          onChange={handleSearchTeam}
        />
      </form>
      {loading ?
        <div className='w-full flex flex-col justify-center items-center'>
          <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          <h1 className='text-center'>Loading the teams</h1> 
        </div> :
        <div className='grid grid-cols-3 gap-10'>
          {teams.map(group => (
            <button onClick={() => {setShowModal(true); setModalData(group)}} className='bg-gray-200 rounded-xl py-5 flex flex-col items-center justify-center ease-in duration-200 hover:-translate-y-3  hover:bg-gray-300' key={group.team.id}>
              <h1 className='text-3xl'>{group.team.name}</h1>
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
