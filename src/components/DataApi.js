import { useEffect, useState } from 'react'
import Modal from './Modal'

const DataApi = () => {
  const [ teams, setTeams ] = useState([])
  const [ showModal, setShowModal ] = useState(false)
  const [ modalData, setModalData ] = useState()
  const [ loading, setLoading ] = useState(true)

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_PREMIER_LEAGUE_API_KEY,
      'X-RapidAPI-Host': process.env.REACT_APP_HOST_API_KEY
    }
  };

  const getData = async () => {
    setLoading(true)
    const res = await fetch(`https://api-football-beta.p.rapidapi.com/teams?league=39&season=2022`, options)
    const data = await res.json()
    setTeams(data.response);
    setLoading(false)
    console.log(data.response);
  }
 
  return (
    <>
      {loading ?
        <div className='w-full flex flex-col justify-center items-center'>
          <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          <h1 className='text-center'>Loading the teams</h1> 
        </div> :
        <div className='grid grid-cols-3 gap-10'>
          {teams.map(group => (
            <button onClick={() => {setShowModal(true); setModalData(group)}} className='border-2 border-stone-900 rounded-xl py-5 flex flex-col items-center justify-center' key={group.team.id}>
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
    </>
  )
}

export default DataApi;
