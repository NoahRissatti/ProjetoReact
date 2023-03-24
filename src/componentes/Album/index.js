import Musica from '../Musica'
import './Album.css'

const Album = (props) => {
    const css = { backgroundColor: props.corSecundaria }

    return (
        (props.colaboradores.length > 0) ? <section className='album' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='musicas'>
                {props.colaboradores.map( musica => <Musica corDeFundo={props.corPrimaria} key={musica.nome} nome={musica.nome} imagem={props.imagem} duracao={musica.duracao}/> )}
            </div>
        </section> 
        : ''
    )
}

export default Album