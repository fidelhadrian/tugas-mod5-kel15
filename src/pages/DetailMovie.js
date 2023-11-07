import React from 'react';
import { useParams } from 'react-router-dom';
import { poster } from './Movie';
import './Detail.css'

const idFind = [1, 2, 3, 4, 5,];
const found = idFind.map(id => poster.find(item => item.id === id));

const movieData = {
  1: {
    title: found[0].title,
    description: 'Despicable Me 3" is an animated comedy film. It follows the adventures of Gru, a former villain turned secret agent, and his yellow Minions. In this installment, Gru discovers he has a long-lost twin brother, Dru, and together they face a new villain, Balthazar Bratt, who is stuck in the 80s and is causing havoc.',
    genre: found[0].genre,
    img: found[0].img,
  },
  2: {
    title: found[1].title,
    description: 'A  thrilling sci-fi movie that explores a dimensional rift that opens on Earth, leading to unforeseen consequences and unleashing strange and dangerous creatures into our world. It\'s a race against time to close the breach and save humanity.',
    genre: found[1].genre,
    img: found[1].img,
  },
  3: {
    title: found[2].title,
    description: 'Based on a true story, this dark comedy follows the bizarre and outrageous journey of a bear who accidentally ingests a stash of cocaine and becomes an unwitting accomplice to a drug smuggling operation. It\'s a wild and unpredictable ride filled with humor and chaos.',
    genre: found[2].genre,
    img: found[2].img,
  },
  4: {
    title: found[3].title,
    description: ' A superhero movie from the DC Universe, Black Adam tells the story of a formerly enslaved man who gains superhuman powers and seeks vengeance on those who have wronged him. Dwayne "The Rock" Johnson stars as the titular antihero in this action-packed adventure.',
    genre: found[3].genre,
    img: found[3].img,
  },
  5: {
    title: found[4].title,
    description: 'An epic underwater adventure in the DC Extended Universe, Aquaman follows the half-human, half-Atlantean Arthur Curry as he embraces his destiny to become the ruler of the underwater kingdom of Atlantis. With stunning visuals and thrilling action sequences, it\'s a tale of heroism beneath the waves.',
    genre: found[4].genre,
    img: found[4].img,
  },
};

function DetailMovie() {
  const { id } = useParams();
  const movieDetail = movieData[id];

  if (!movieDetail) {
    return <div>Movie not found</div>;
  }

  return (
    <div className='container'>
      <img src={movieDetail.img} alt={movieDetail.title} className='photoo' />
      <h1>{movieDetail.title}</h1>
      <p className='desc'>{movieDetail.description}</p>
      <p className='genree'><strong>Genre:</strong> {movieDetail.genre}</p>
      {/* Tampilkan informasi detail film lainnya sesuai kebutuhan */}
    </div>
  );
}

export default DetailMovie;
