import { useForm } from "react-hook-form"
import './Cadastro.css'
import Navbar from "./components/NavBar"

function Cadastro() {
  const { register, handleSubmit } = useForm()

  async function cadastraShow(data) {
    const artista = data.artista
    const estilo = data.estilo
    const duracao = data.duracao
    const local = data.local
    const descricao = data.descricao
    const cartaz = data.cartaz

    try {
      const resposta = await fetch("http://localhost:3000/shows", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          artista, estilo, duracao, local, descricao, cartaz
        })
      })
      if (!resposta.ok) throw new Error('Erro ao cadastrar show')
      const novoShow = await resposta.json()
      alert(`Ok! show cadastrado com Código: ${novoShow.id}`)  
    } catch (erro) {
      console.log(`Erro: ${erro.message}`)
    }
  }

  return (
    <>
      <Navbar />
      <div className="centro-cadastro">
        <div>
          <h2 className="titulo_inclusao">Cadastre o Seu Show</h2>
          <form onSubmit={handleSubmit(cadastraShow)}>
            <p>
              <label htmlFor="artista">Nome do Artista:</label>
              <input type="text" id="artista" className='campos texto-grande' required
                {...register("artista")} />
            </p>
            <div className='duas-colunas'>
              <p>
                <label htmlFor="genero">Estilo:</label>
                <input type="text" id="estilo" className='campos texto-menor' required
                  {...register("estilo")} />
              </p>
              <p>
                <label htmlFor="duracao" className='margem-esq'>Tempo de duração:</label>
                <input type="number" id="duracao" className='campos numero margem-esq' required
                  {...register("duracao")} />
              </p>
            </div>
            <div className='duas-colunas'>
              <p>
                <label htmlFor="local">Local:</label>
                <input type="text" id="local" className='campos texto-menor' required
                  {...register("local")} />
              </p>
        
            </div>
            <p>
              <label htmlFor="sinopse">Descrição:</label>
              <textarea id="descricao" className='campos texto-grande' rows={3} required
                {...register("descricao")}></textarea>
            </p>
            <p>
              <label htmlFor="cartaz">cartaz:</label>
              <input type="text" id="cartaz" className='campos texto-grande' required
                {...register("cartaz")} />
            </p>
            <input type="submit" value="Cadastrar" className='btn submit' />
            <input type="reset" value="Limpar" className='btn reset' />
          </form>
        </div>
      </div>
    </>
  )
}

export default Cadastro
