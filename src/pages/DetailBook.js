import React from 'react';
import { useParams } from 'react-router-dom';
import { poster } from './Book';
import './Detail.css';

const idFind = [1, 2, 3, 4, 5]; // Add the book IDs you want to display details for.
const found = idFind.map(id => poster.find(item => item.id === id));

const bookData = {
  1: {
    title: found[0].title,
    description: 'This Country is a biography and comics book that explores various aspects of non-fiction. It delves into the culture and society of a particular country.',
    genre: found[0].genre,
    img: found[0].img,
  },
  2: {
    title: found[1].title,
    description: 'The Body of the Soul: Stories is a collection of literary fiction and short stories. It offers a diverse range of captivating tales and narratives.',
    genre: found[1].genre,
    img: found[1].img,
  },
  3: {
    title: found[2].title,
    description: 'Judgment at Tokyo is a historical non-fiction book that delves into politics and the history of a particular event. It offers a comprehensive look at the subject matter.',
    genre: found[2].genre,
    img: found[2].img,
  },
  4: {
    title: found[3].title,
    description: 'The Lies of the Land is a non-fiction book that provides social commentary and analysis. It sheds light on various societal issues.',
    genre: found[3].genre,
    img: found[3].img,
  },
  5: {
    title: found[4].title,
    description: 'This Is Salvaged is a psychological thriller fiction book. It takes readers on a suspenseful journey with gripping storytelling.',
    genre: found[4].genre,
    img: found[4].img,
  },
};

function Detail() {
  const { id } = useParams();
  const bookDetail = bookData[id];

  if (!bookDetail) {
    return <div>Book not found</div>;
  }

  return (
    <div className='container'>
      <img src={bookDetail.img} alt={bookDetail.title} className='photoo' />
      <h1>{bookDetail.title}</h1>
      <p className='desc'>{bookDetail.description}</p>
      <p className='genree'><strong>Genre:</strong> {bookDetail.genre}</p>
      {/* Display additional book details as needed */}
    </div>
  );
}

export default Detail;