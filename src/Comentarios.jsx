import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import StarRatings from 'react-star-ratings'
import Navbar from "./components/NavBar"
import './Comentarios.css'

function Comentarios() {
  const { id } = useParams()
  const [show, setShow] = useState(null)

  useEffect(() => {
    async function buscarShows() {
      try {
        const resposta = await fetch(`http://localhost:3000/shows/${id}`)
        if (!resposta.ok) throw new Error("Erro ao buscar o Show")
        const dados = await resposta.json()
        console.log('Show carregado:', dados)
        setShow(dados)
      } catch (erro) {
        console.log("Erro: " + erro.message)
      }
    }
    buscarShows()
  }, [id])

  if (!show) {
    return (
      <>
        <Navbar />
        <p style={{ textAlign: 'center', marginTop: '20px' }}>Carregando show...</p>
      </>
    )
  }

  const listaComentarios = []
  if (show.comentarios && show.comentarios.length > 0) {
    for (let i = 0; i < show.comentarios.length; i++) {
      listaComentarios.push(
        <tr key={i}>
          <td>{show.nomes?.[i]}</td>
          <td>{show.comentarios[i]}</td>
          <td>
            <StarRatings
              rating={show.notas?.[i] || 0}
              starRatedColor="yellow"
              numberOfStars={5}
              starDimension="16px"
              starSpacing="1px"
            />
          </td>
        </tr>
      )
    }
  }

  return (
    <>
      <Navbar />
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>
        Comentários do Show: {show.artista}
      </h2>

      <div className="comentarios">
        <img src={show.cartaz} alt={`Cartaz do show ${show.artista}`} />
        <div>
          <h3>Avaliações e Notas dos Usuários</h3>
          <table>
            <thead>
              <tr>
                <th>Nome do Usuário</th>
                <th>Comentário</th>
                <th>Nota</th>
              </tr>
            </thead>
            <tbody>
              {listaComentarios.length > 0 ? (
                listaComentarios
              ) : (
                <tr>
                  <td colSpan="3">Nenhum comentário disponível.</td>
                </tr>
              )}
            </tbody>
          </table>
          <div style={{ marginTop: '20px' }}>
            <a href="/" className="btn-voltar">Voltar</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Comentarios
