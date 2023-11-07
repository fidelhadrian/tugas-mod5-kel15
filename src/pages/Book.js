import { Fragment } from "react";
import { Link } from "react-router-dom";
import CardBig from "../components/CardBig"; 
import CardSmall from "../components/CardSmall"; 
import "./NonProfile.css";

export const poster = [
    {
        title: "This Country", id: 1,
        rate: 4,
        genre: "biography, comics, non-fiction ",
        img: "https://m.media-amazon.com/images/I/51ywzdUqpML._SY445_SX342_.jpg",
    },  
    {
        title: "The Body of the Soul", id: 2,
        rate: 4,
        genre: "literary fiction, short stories",
        img: "https://m.media-amazon.com/images/I/51ZM2IEg76L._SL1000_.jpg"
    },
    {
        title: "Judgment at Tokyo", id: 3,
        rate: 4,
        genre: "history, non-fiction, politics",
        img: "https://m.media-amazon.com/images/I/91bZI4wPROL._SY425_.jpg",
    },
    {
        title: "The Lies of the Land", id: 4,
        rate: 4,
        genre: "non-fiction, social commentary",
        img: "https://m.media-amazon.com/images/I/71TkWkWz9cL._SY425_.jpg"
    },
    {
        title: "This Is Salvaged", id: 5,
        rate: 4,
        genre: "fiction, psycological, thriller",
        img: "https://m.media-amazon.com/images/I/615+FNnRl3L._SY425_.jpg",
    },            
];

export default function Book() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 20;
    const data = [
        {
            title: "This Country", id: 1,
            rate: 4,
            genre: "biography, comics, non-fiction ",
            img: "https://m.media-amazon.com/images/I/51ywzdUqpML._SY445_SX342_.jpg",
        },  
        {
            title: "The Body of the Soul", id: 2,
            rate: 4,
            genre: "literary fiction, short stories",
            img: "https://m.media-amazon.com/images/I/51ZM2IEg76L._SL1000_.jpg"
        },
        {
            title: "Judgment at Tokyo", id: 3,
            rate: 4,
            genre: "history, non-fiction, politics",
            img: "https://m.media-amazon.com/images/I/91bZI4wPROL._SY425_.jpg",
        },
        {
            title: "The Lies of the Land", id: 4,
            rate: 4,
            genre: "non-fiction, social commentary",
            img: "https://m.media-amazon.com/images/I/71TkWkWz9cL._SY425_.jpg"
        },
        {
            title: "This Is Salvaged", id: 5,
            rate: 4,
            genre: "fiction, psycological, thriller",
            img: "https://m.media-amazon.com/images/I/615+FNnRl3L._SY425_.jpg",
        },      
    ];

    return (
        <>
            <p id="page">Top Books</p>
            
            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                        <Link to={`/book/detail/${item.id}`} key={item.id}>
                        <CardBig title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} />
                        {data.length === index + 1 ? (
                        <div style={{ marginRight: 30 }} />
                        ) : null}
                        </Link>
                    </Fragment>
                ))}
            </div>

            <div className="rowcoba">
                <div className="column">
                <p id="page">All Books</p>
                {data.map((item, index) => (
                    <Fragment key={item.id}>
                    <Link to={`/book/detail/${item.id}`} key={item.id}>
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
                <p id="page">All Books</p>
                {data.map((item, index) => (
                    <Fragment key={item.id}>
                    <Link to={`/book/detail/${item.id}`} key={item.id}>
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
            </div>
        </>
    );
}




