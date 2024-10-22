import React from 'react';
import Noticia from './components/Noticia';

function App() {
  const noticias = [
    {
      id: 1,
      avatar: 'assets/avatar01.png',
      titulo: "Título 1",
      fecha: "19 de octubre de 2024",
      imagen: 'assets/sky.jpg',
      noticia: "Esta es la noticia número 1.",
      alt: "Imagen de un cielo anaranjado, como fondo de la noticia 1.",
      numLikes: 20
    },
    {
      id: 2,
      avatar: 'assets/avatar02.png',
      titulo: "Título 2",
      fecha: "19 de octubre de 2024",
      imagen: 'assets/sea.jpg',
      noticia: "Esta es la noticia número 2.",
      alt: "Imagen de un cielo anaranjado, como fondo de la noticia 2.",
      numLikes: 87
    },
    {
      id: 3,
      avatar: 'assets/avatar03.png',
      titulo: "Título 3",
      fecha: "19 de octubre de 2024",
      imagen: 'assets/tux.jpg',
      noticia: "Esta es la noticia número 3.",
      alt: "Imagen de un cielo anaranjado, como fondo de la noticia 3.",
      numLikes: 7
    },
    {
      id: 4,
      avatar: 'assets/avatar04.png',
      titulo: "Título 4",
      fecha: "19 de octubre de 2024",
      imagen: 'assets/mario.jpg',
      noticia: "Esta es la noticia número 4.",
      alt: "Imagen de un cielo anaranjado, como fondo de la noticia 4.",
      numLikes: 8514
    },
  ];

  return (
    noticias.map((miNoticia) => 
      <Noticia
        key={miNoticia.id}
        avatar={miNoticia.avatar}
        titulo={miNoticia.titulo}
        fecha={miNoticia.fecha}
        imagen={miNoticia.imagen}
        noticia={miNoticia.noticia}
        alt={miNoticia.alt}
        numLikes={miNoticia.numLikes}
      />
    )
  );
}

export default App
