import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [duracao, setDuracao] = useState('')
    const [album, setAlbum] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            duracao,
            album
        })
        setNome('')
        setDuracao('')
        setAlbum('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card da música</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome da música"
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Duração"
                    placeholder="Digite a duração da música" 
                    valor={duracao}
                    aoAlterado={valor => setDuracao(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Álbum" 
                    itens={props.albuns}
                    valor={album}
                    aoAlterado={valor => setAlbum(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario