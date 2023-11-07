import { Link } from "react-router-dom";
import { Fragment } from "react";
import CardBig from "../components/CardBig"; 
import CardSmall from "../components/CardSmall"; 
import "./NonProfile.css";

export const poster = [
    {
        title: "FORTNITE", 
        id: 1,
        rate: 4,
        genre: "action, battle royale, building",
        img: "https://seeklogo.com/images/F/fortnite-logo-1F7897BD1E-seeklogo.com.png",
    },
    {
        title: "SUBNAUTICA", 
        id: 2,
        rate: 4,
        genre: "adventure, horror, survival",
        img: "https://cdn.icon-icons.com/icons2/3053/PNG/512/subnautica_macos_bigsur_icon_189683.png",
    },
    {
        title: "DOTA 2", 
        id: 3,
        rate: 4,
        genre: "action, strategy, team-based",
        img: "https://seeklogo.com/images/D/dota-2-logo-A8CAC9B4C9-seeklogo.com.png",
    },
    {
        title: "ROBLOX", 
        id:4,
        rate: 4,
        genre: "adventure, casual, simulation",
        img: "https://seeklogo.com/images/R/roblox-logo-3CD7ECE135-seeklogo.com.png",
    },
    {
        title: "MINECRAFT", 
        id: 5,
        rate: 4,
        genre: "adventure, sandbox, survival",
        img: "https://seeklogo.com/images/M/minecraft-logo-AF2671B239-seeklogo.com.png",
    },
];

export default function Game() {
    const STAR_COLOR = "rgb(220, 117, 21)";
    const STAR_SIZE = 15;

    
    const data = [
        {
            title: "FORTNITE", 
            id: 1,
            rate: 4,
            genre: "action, battle royale, building",
            img: "https://seeklogo.com/images/F/fortnite-logo-1F7897BD1E-seeklogo.com.png",
        },
        {
            title: "SUBNAUTICA", 
            id: 2,
            rate: 4,
            genre: "adventure, horror, survival",
            img: "https://cdn.icon-icons.com/icons2/3053/PNG/512/subnautica_macos_bigsur_icon_189683.png",
        },
        {
            title: "DOTA 2", 
            id: 3,
            rate: 4,
            genre: "action, strategy, team-based",
            img: "https://seeklogo.com/images/D/dota-2-logo-A8CAC9B4C9-seeklogo.com.png",
        },
        {
            title: "ROBLOX", 
            id:4,
            rate: 4,
            genre: "adventure, casual, simulation",
            img: "https://seeklogo.com/images/R/roblox-logo-3CD7ECE135-seeklogo.com.png",
        },
        {
            title: "MINECRAFT", 
            id: 5,
            rate: 4,
            genre: "adventure, sandbox, survival",
            img: "https://seeklogo.com/images/M/minecraft-logo-AF2671B239-seeklogo.com.png",
        },
    ];

    return (
        <>
            <p id="page">Top Games</p>

            <div className="containerTop">
                {poster.map((item, index) => (
                    <Fragment key={item.id}>
                    <Link to={`/game/detail/${item.id}`} key={item.id}>
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
                <p id="page">All Games</p>
                {data.map((item, index) => (
                    <Fragment key={item.id}>
                    <Link to={`/game/detail/${item.id}`} key={item.id}>
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
                <p id="page">All Games</p>
                {data.map((item, index) => (
                    <Fragment key={item.id}>
                    <Link to={`/game/detail/${item.id}`} key={item.id}>
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




