import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Album from './componentes/Album';

function App() {

  const nomeDosAlbuns = [
    {
      nome: 'Taylor Swift',
      corPrimaria: '#59D0FF',
      corSecundaria: '#A6E6FF',
      imagem: 'https://m.media-amazon.com/images/I/515zAlfwuzL._AC_SX425_.jpg'
    },
    {
      nome: 'Fearless',
      corPrimaria: '#FFF491',
      corSecundaria: '#FFFCDE',
      imagem: 'https://m.media-amazon.com/images/I/61D2Zlcj1FS._AC_SY355_.jpg'
    },
    {
      nome: 'Speak Now',
      corPrimaria: '#F491FF',
      corSecundaria: '#FCDEFF',
      imagem: 'https://upload.wikimedia.org/wikipedia/pt/0/00/Taylor_Swift_-_Speak_Now.jpg'
    },
    {
      nome: 'Red',
      corPrimaria: '#F00C23',
      corSecundaria: '#F25565',
      imagem: 'https://m.media-amazon.com/images/I/61oi5mvJzgL._AC_SX425_.jpg'
    },
    {
      nome: '1989',
      corPrimaria: '#FFE791',
      corSecundaria: '#FFF8DE',
      imagem: 'https://m.media-amazon.com/images/I/41hxIE+zp+L._AC_SX425_.jpg'
    },
    {
      nome: 'Reputation',
      corPrimaria: '#000000',
      corSecundaria: '#999999',
      imagem: 'https://m.media-amazon.com/images/I/91VnI1TRpxL._AC_SL1500_.jpg'
    },
    {
      nome: 'Lover',
      corPrimaria: '#FF73FF',
      corSecundaria: '#FFBFFF',
      imagem: 'https://s2.glbimg.com/SU_BSXqpPmQUSzzE4y_OagBC-3o=/0x0:1400x1400/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/z/s/FSHmXFTV2xJoT2Hz4gNA/lover-taylor.jpg'
    },
    {
      nome: 'Folklore',
      corPrimaria: '#000000',
      corSecundaria: '#999999',
      imagem: 'https://upload.wikimedia.org/wikipedia/pt/f/f8/Taylor_Swift_-_Folklore.png'
    },
    {
      nome: 'Evermore',
      corPrimaria: '#805449',
      corSecundaria: '#FFE4DE',
      imagem: 'https://agenciadenoticias.uniceub.br/wp-content/uploads/2022/04/Taylor-2.jpg'
    },
    {
      nome: 'Midnights',
      corPrimaria: '#C032F0',
      corSecundaria: '#D57CF2',
      imagem: 'https://m.media-amazon.com/images/I/616P7YioCML.jpg',
    }
  ]

  const [musicas, setMusicas] = useState([])

  const aNovaMusicaAdicionada = (musica) => {
    debugger
    setMusicas([...musicas, musica])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario albuns={nomeDosAlbuns.map(album => album.nome)} aMusicaAdicionada={musica => aNovaMusicaAdicionada(musica)}/>

      {nomeDosAlbuns.map(album => <Album
        key={album.nome} 
        nome={album.nome} 
        corPrimaria={album.corPrimaria} 
        corSecundaria={album.corSecundaria}
        imagem={album.imagem}
        colaboradores={musicas.filter(musica => musica.album === album.nome)}
      />)}   

    </div>
  );
}

export default App;
