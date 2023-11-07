import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { MdGroup } from 'react-icons/md'
import { MdMovie } from 'react-icons/md'
import { MdBook } from 'react-icons/md'
import { MdGames } from 'react-icons/md'
import Profile from './pages/Profile'
import Movie from './pages/Movie'
import Book from './pages/Book'
import Game from './pages/Game'
import DetailMovie from './pages/DetailMovie'
import DetailBook from './pages/DetailBook'
import DetailGame from './pages/DetailGame'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <header>
        <p id="titleGroup">Kelompok 15</p>
      </header>

      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/game" element={<Game />} />
        <Route path="/book" element={<Book />} />
        <Route path="/movie/detail/:id" element={<DetailMovie />} />
        <Route path="/game/detail/:id" element={<DetailGame />} />
        <Route path="/book/detail/:id" element={<DetailBook />} />
      </Routes>

      <footer>
        <NavLink to="/movie" className="iconWrapper">
          <MdMovie className="icon" /> Movie
        </NavLink>
        <NavLink to="/book" className="iconWrapper">
          <MdBook className="icon" /> Book
        </NavLink>
        <NavLink to="/game" className="iconWrapper">
          <MdGames className="icon" /> Game
        </NavLink>
        <NavLink to="/profile" className="iconWrapper">
          <MdGroup className="icon" /> Profile
        </NavLink>
      </footer>
    </BrowserRouter>
  )
}

export default App