import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Shows from './components/Shows'

function App() {
  const [shows, setShows] = useState([])

  useEffect(() => {
    async function buscarShows() {
      try {
        const resposta = await fetch('http://localhost:3000/shows')
        const dados = await resposta.json()
        setShows(dados.reverse())
      } catch (erro) {
        console.log('Erro ao buscar os shows:', erro.message)
      }
    }
    buscarShows()
  }, [])

  return (
    <>
    <NavBar />
    <div>
      <h1 className='titulo_App'>Agenda de Shows</h1>
      <div className='container-shows'>
        {shows.map(show => (
          <Shows key={show.id} show={show} setShow={setShows} />
        ))}
      </div> 
    </div>
    </>
  )
}


export default App
