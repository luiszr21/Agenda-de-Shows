import { useForm } from "react-hook-form"
import './Pesquisa.css'
import Navbar from "./components/NavBar"
import { useState } from "react"
import Shows from "./components/Shows"

function Pesquisa() {
  const [shows, setShows] = useState([])
  const { register, handleSubmit } = useForm()

  async function pesquisaShow(data) {
    try {
      const resposta = await fetch("http://localhost:3000/shows")
      if (!resposta.ok) throw new Error("Erro ao buscar os Shows")
      const dados = await resposta.json()
      const dados2 = dados.filter(dado => (
        dado.artista.toUpperCase().includes(data.pesquisa.toUpperCase()) ||
        dado.estilo.toUpperCase().includes(data.pesquisa.toUpperCase())        
      ))
      if (dados2.length == 0) {
        alert("Não há filmes com a palavra-chave informada...")
      } else {
        setShows(dados2)
      }
    } catch (erro) {
      console.log("Erro: " + erro.message)
    }
  }

  const listaShow = shows.map(shows => (
    <Shows key={shows.id} show={shows } />
  ))

  return (
    <>
      <Navbar />
      <h2 className="titulo_pesquisa">Ache o seu show</h2>
      <form onSubmit={handleSubmit(pesquisaShow)} >
        <p className='p-center'>
          <input type="text"
            placeholder="Palavra chave do título ou gênero"
            required
            className='campos-pesq'
            {...register("pesquisa")} />
          <input type="submit" value="Pesquisar"
            className='btn-pesq' />
        </p>
      </form>
      <div className='listaCards'>
        {listaShow}
      </div>      
    </>
  )
}

export default Pesquisa
