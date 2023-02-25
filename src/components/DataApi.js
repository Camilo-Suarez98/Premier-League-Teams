import { useEffect, useState } from 'react'
import Modal from './Modal'

const DataApi = () => {
  const [ teams, setTeams ] = useState([])
  const [ showModal, setShowModal ] = useState(false)
  const [ modalData, setModalData ] = useState()

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f308261da5mshe860c0b7098ca65p138e92jsnb5c3ada18ea0',
      'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
    }
  };

  const getData = async () => {
    const res = await fetch(`https://api-football-beta.p.rapidapi.com/teams?league=39&season=2022`, options)
    const data = await res.json()
    setTeams(data.response);
    console.log(data.response);
  }
 
  return (
    <div className='grid grid-cols-3 gap-10'>
      {teams.map(group => (
        <div className='border-2 border-stone-900 rounded-xl py-5 flex flex-col items-center justify-center' key={group.team.id}>
          <h1 className='text-3xl'>{group.team.name}</h1>
          <img src={group.team.logo} alt={group.team.name} />
          <button onClick={() => {setShowModal(true); setModalData(group)}}>Show more</button>
        </div>
      ))}
      {showModal && <Modal
        name={modalData.team.name}
        image={modalData.team.logo}
        year={modalData.team.founded}
        city={modalData.venue.city}
        stadiumName={modalData.venue.name}
        stadiumImage={modalData.venue.image}
        capacity={modalData.venue.capacity}
        onClick={() => setShowModal(false)}
      />}
    </div>
  )
}

export default DataApi;
