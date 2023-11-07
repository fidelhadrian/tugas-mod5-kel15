import React from 'react';
import { useParams } from 'react-router-dom';
import { poster } from './Game';
import './Detail.css'

const idFind = [1, 2, 3, 4, 5,];
const found = idFind.map(id => poster.find(item => item.id === id));

const GameData = {
  1: {
    title: found[0].title,
    description: 'Fortnite is a popular online multiplayer battle royale game developed by Epic Games. Players are dropped onto an island where they must scavenge for weapons and resources, build structures, and outlast their opponents to be the last person or team standing. It features vibrant graphics and a constantly evolving map.',
    genre: found[0].genre,
    img: found[0].img,
  },
  2: {
    title: found[1].title,
    description: 'Subnautica is an immersive underwater survival game that plunges players into an alien ocean world filled with diverse marine life and mysterious creatures. Players explore, build, and gather resources to survive in this open-world adventure game known for its stunning underwater environments and exploration.',
    genre: found[1].genre,
    img: found[1].img,
  },
  3: {
    title: found[2].title,
    description: 'Dota 2, short for Defense of the Ancients 2, is a highly competitive and complex multiplayer online battle arena (MOBA) game developed by Valve Corporation. Two teams of five players each battle in strategic, team-based matches, utilizing a vast roster of heroes with unique abilities. The goal is to destroy the enemy\'s Ancient structure.',
    genre: found[2].genre,
    img: found[2].img,
  },
  4: {
    title: found[3].title,
    description: 'Roblox is an online platform that allows users to create, play, and share games created by other members of the community. It features a wide variety of user-generated games, from simple mini-games to complex simulations, and provides tools for game creation. It\'s known for its user-generated content and social interaction.',
    genre: found[3].genre,
    img: found[3].img,
  },
  5: {
    title: found[4].title,
    description: 'Minecraft is a sandbox game that enables players to explore a blocky, procedurally generated world and build, craft, and survive. Players can create and modify the terrain, mine resources, and build structures in both creative and survival modes. It\'s renowned for its open-ended, creative gameplay and pixelated, retro-inspired visuals.',
    genre: found[4].genre,
    img: found[4].img,
  },
};

function DetailGame() {
  const { id } = useParams();
  const gameDetail = GameData[id];

  if (!gameDetail) {
    return <div>Game not found</div>;
  }

  return (
    <div className='container'>
      <img src={gameDetail.img} alt={gameDetail.title} className='photoo' />
      <h1>{gameDetail.title}</h1>
      <p className='desc'>{gameDetail.description}</p>
      <p className='genree'><strong>Genre:</strong> {gameDetail.genre}</p>
      {/* Tampilkan informasi detail film lainnya sesuai kebutuhan */}
    </div>
  );
}

export default DetailGame;
