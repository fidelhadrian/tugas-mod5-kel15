import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import CardBig from "../components/CardBig";
import CardSmall from "../components/CardSmall";
import "./NonProfile.css";

export const poster = [
    {
      title: "Despicable Me 3",
      id: 1,
      rate: 4,
      genre: "animation, comedy, family",
      img: "https://m.media-amazon.com/images/I/91909mLV8qL._AC._SR360,460.jpg",
    },
    
    {
      title: "The Breach",
      id: 2,
      rate: 4,
      genre: "horror, science fiction, thriller",
      img: "https://m.media-amazon.com/images/I/81U7cwIDAGL._AC_UY218_.jpg",
    },
    {
      title: "Cocaine Bear",
      id: 3,
      rate: 4,
      genre: "comedy, crime, adventure",
      img: "https://m.media-amazon.com/images/I/91L2LNity1L._AC_UY218_.jpg",
    },
    {
      title: "Black Adam",
      id: 4,
      rate: 4,
      genre: "action, fantasy, superhero",
      img: "https://m.media-amazon.com/images/I/91x2AOMvm+L._AC_UY218_.jpg",
    },
    {
      title: "Aquaman",
      id: 5,
      rate: 4,
      genre: "action, adventure, superhero",
      img: "https://m.media-amazon.com/images/I/A1dsVUnFKpL._AC_UY218_.jpg",
    },
  ];

export default function Movie() {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;

  const data = [
    {
      title: "Despicable Me 3",
      id: 1,
      rate: 4,
      genre: "animation, comedy, family",
      img: "https://m.media-amazon.com/images/I/91909mLV8qL._AC._SR360,460.jpg",
    },
    
    {
      title: "The Breach",
      id: 2,
      rate: 4,
      genre: "horror, science fiction, thriller",
      img: "https://m.media-amazon.com/images/I/81U7cwIDAGL._AC_UY218_.jpg",
    },
    {
      title: "Cocaine Bear",
      id: 3,
      rate: 4,
      genre: "comedy, crime, adventure",
      img: "https://m.media-amazon.com/images/I/91L2LNity1L._AC_UY218_.jpg",
    },
    {
      title: "Black Adam",
      id: 4,
      rate: 4,
      genre: "action, fantasy, superhero",
      img: "https://m.media-amazon.com/images/I/91x2AOMvm+L._AC_UY218_.jpg",
    },
    {
      title: "Aquaman",
      id: 5,
      rate: 4,
      genre: "action, adventure, superhero",
      img: "https://m.media-amazon.com/images/I/A1dsVUnFKpL._AC_UY218_.jpg",
    },
  ];

  return (
    <>
      <p id="page">Top Movies</p>

      <div className="containerTop">
        {poster.map((item, index) => (
          <Fragment key={item.id}>
            <Link to={`/movie/detail/${item.id}`} key={item.id}>
            <CardBig title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} />
            {data.length === index + 1 ? (
              <div style={{ marginRight: 40 }} />
            ) : null}
            </Link>
          </Fragment>
        ))}
      </div>

      <div className="rowcoba">
        <div className="column">
          <p id="page">All Movies</p>
          {data.map((item, index) => (
            <Fragment key={item.id}>
              <Link to={`/movie/detail/${item.id}`} key={item.id}>
                <CardSmall
                  title={item.title}
                  img={item.img}
                  genre={item.genre}
                  size={STAR_SIZE}
                  color={STAR_COLOR}
                />
              </Link>
              {data.length === index + 1 && <div style={{ marginBottom: 80 }} />}
            </Fragment>
          ))}
        </div>

        <div className="column">
          <p id="page">All Movies</p>
          {data.map((item, index) => (
            <Link to={`/movie/detail/${item.id}`} key={item.id}>
              <Fragment key={item.id}>
                <CardSmall
                  title={item.title}
                  img={item.img}
                  genre={item.genre}
                  size={STAR_SIZE}
                  color={STAR_COLOR}
                />
              </Fragment>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
