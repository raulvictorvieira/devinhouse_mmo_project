import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameContex } from "./contexts/game-context";
import { GameDetails } from "./pages/GameDetails";
import { GameList } from "./pages/GameList";
import { GameNews } from "./pages/GameNews";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/GlobalStyles";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <GameContex>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<GameList />} />
            <Route path="/games/:gameId" element={<GameDetails />} />
            <Route path="/news" element={<GameNews />} />
          </Routes>
        </BrowserRouter>
      </GameContex>
    </>
  );
}