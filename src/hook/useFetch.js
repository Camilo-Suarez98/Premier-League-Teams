import { useState, useEffect } from 'react'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_PREMIER_LEAGUE_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_HOST_API_KEY
  }
}

export const useFetch = () => {
  const [ loading, setLoading ] = useState(true)
  const [ teams, setTeams ] = useState([])

  useEffect(() => {
    setLoading(true)
    fetch(`https://api-football-beta.p.rapidapi.com/teams?league=39&season=2022`, options)
      .then(res => res.json())
      .then(data => setTeams(data.response))
    setLoading(false)
  }, [])

  return (
    {teams, loading}
  )
}
