import { useState } from 'react'
import Swal from 'sweetalert2'
import StarRatings from 'react-star-ratings'
import './Shows.css'
import { Link } from 'react-router-dom'

function Shows({ show, setShow }) {
  const [presente, setPresente] = useState(false)

  function calculaMedia(notaArray = []) {
    return notaArray.length > 0
      ? notaArray.reduce((acc, nota) => acc + nota, 0) / notaArray.length
      : 0
  }

  async function NotaShow() {
    if (!presente) {
      Swal.fire({
        icon: 'warning'
      })
      return
    }

    try {
      const { isConfirmed } = await Swal.fire({
        title: `${show.artista}`,
        html: `
          <input id="nome" type="text" class="swal2-input" placeholder="Seu nome">
          <input id="comentario" type="text" class="swal2-input" placeholder="Comentário">
          <input id="nota" type="number" class="swal2-input" placeholder="Nota" min="1" max="5">
        `,
        focusConfirm: false,
        showCancelButton: true,
        preConfirm: async () => {
          const nome = document.getElementById("nome").value.trim()
          const comentario = document.getElementById("comentario").value.trim()
          const nota = parseInt(document.getElementById("nota").value)

          if (!nome || !comentario || isNaN(nota) || nota < 1 || nota > 5) {
            Swal.showValidationMessage("Preencha todos os campos corretamente e informe uma nota entre 1 e 5.")
            return false
          }

          const showAtualizado = {
            ...show,
            nomes: [...(show.nomes || []), nome],
            comentarios: [...(show.comentarios || []), comentario],
            notas: [...(show.notas || []), nota]
          }

          await fetch(`http://localhost:3000/shows/${show.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(showAtualizado)
          })

          const resposta = await fetch("http://localhost:3000/shows")
          const dados = await resposta.json()
          setShow(dados.reverse())
        }
      })

      if (isConfirmed) {
        Swal.fire({
          title: 'Sucesso!',
          text: 'Avaliação cadastrada com sucesso',
          icon: 'success'
        })
      }

    } catch (erro) {
      console.error(`Erro na avaliação: ${erro.message}`)
      Swal.fire({
        title: 'Erro!',
        text: erro.message,
        icon: 'error'
      })
    }
  }

  function handlePresencaChange(e) {
    const marcado = e.target.checked
    setPresente(marcado)
  }

  return (
    <div className='cards'>
      <img src={show.cartaz} alt="Cartaz do Show" />
      <div>
        <h2>{show.artista}</h2>
        <h3>{show.estilo} - {show.duracao}min</h3>
        <h4>{show.local}</h4>
        <p className='descricao'>{show.descricao}</p>

        {show.notas?.length === 0 ? (
          <img src="new.png" alt="Novo" style={{ width: 120, height: 60, display: 'block', marginLeft: 'auto' }} />
        ) : (
          <div className='estrelas-btn'>
            <StarRatings
              rating={calculaMedia(show.notas)}
              starRatedColor="red"
              numberOfStars={5}
              starDimension="25px"
              starSpacing="2px"
            />
            <Link className='btn-ver' to={`/comentarios/${show.id}`}>
              O que estão falando?
            </Link>
          </div>
        )}

        <div className="check">
          <button
            className='btn-avalia'
            onClick={NotaShow}
            disabled={!presente}
            style={{
              backgroundColor: !presente ? 'gray' : undefined,
              cursor: !presente ? 'not-allowed' : 'pointer'
            }}
          >
            Avaliar
          </button>

          <div className="container">
            <label className="checkbox-container">
              <input
                type="checkbox"
                onChange={handlePresencaChange}
              />
              <span>Fui ao show</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shows
