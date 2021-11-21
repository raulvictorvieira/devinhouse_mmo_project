import React from "react";
import { Gamecard } from "../components/Cards/GameCard";
import { LoaderComp } from "../components/Loader";
import { Search } from "../components/Search";
import { useGameList } from "../contexts/game-context";
import { DefaultPage } from "../templates/DefaultPage";


export const GameList = () => {
    const { state } = useGameList();
    const { games, filteredGames } = state;
    const { searchGame } = useGameList();

    const gamesToShow = filteredGames.length > 0 ? filteredGames : games;

    return (
        <DefaultPage>
            <Search search={searchGame} placeholder="Buscar game" />
            <h2 className="h2-gamelist">Total de games:{` ${gamesToShow.length}`}</h2>
            <main className="content-gamelist">
                {gamesToShow.length > 0 ? (
                    gamesToShow.map(game => (
                        <Gamecard
                            id={game.id}
                            title={game.title}
                            genre={game.genre}
                            description={game.short_description}
                            thumb={game.thumbnail}
                        />
                    ))
                ) : <LoaderComp />}
            </main>
        </DefaultPage>
    )
}