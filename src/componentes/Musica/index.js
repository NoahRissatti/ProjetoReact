import './Musica.css'

const Musica = ({ nome, duracao, imagem, corDeFundo }) => {
    return (<div className='musica'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={imagem}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{duracao}</h5>
        </div>
    </div>)
}

export default Musica