import { createContext, useContext, useEffect, useReducer } from "react";

const gameContext = createContext();
gameContext.displayName = "Game Context";

const GameProvider = gameContext.Provider;

//hook personalizado para levar o contexto da lista de games
export const useGameList = () => {
    const context = useContext(gameContext);
    return context;
};


const initial_state = {
    games: [],
    filteredGames: [],
    filteredNews: [],
    game: null,
    news: [],
};

const reducer = (state, values) => {
    switch (values.type) {
        case "SET_GAMES":
            return { ...state, games: values.content };
        case "SET_GAME":
            return { ...state, game: values.content };
        case "SET_NEWS":
            return { ...state, news: values.content };
        case "SET_GAMESFILTERED":
            return { ...state, filteredGames: values.content };
        case "SET_NEWSFILTERED":
            return { ...state, filteredNews: values.content };
        default:
            return state;
    }
};

export const GameContex = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initial_state);

    useEffect(() => {
        const config = {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "mmo-games.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_KEY_API,
            },
        };

        fetch("https://mmo-games.p.rapidapi.com/games", config)
            .then((response) => response.json())
            .then((games) => dispatch({ type: "SET_GAMES", content: games }));
    }, []);


    //------------ CONTEXT GAME DETAILS ----------------
    const fetchGameDetails = (id) => {
        if (!id) return;

        const config = {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "mmo-games.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_KEY_API,
            }
        }

        fetch(`https://mmo-games.p.rapidapi.com/game?id=${id}`, config)
            .then(response => response.json())
            .then(game => dispatch({ type: "SET_GAME", content: game }))
    };

    const clearGame = () => {
        dispatch({ type: "SET_GAME", content: null });
    };



    //------------ CONTEXT GAME NEWS ----------------
    useEffect(() => {
        const config = {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "mmo-games.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_KEY_API,
            },
        };

        fetch("https://mmo-games.p.rapidapi.com/latestnews", config)
            .then((response) => response.json())
            .then(news => dispatch({ type: "SET_NEWS", content: news }))
    }, []);

    //------------ FUNCTION SEARCH GAME ----------------
    const searchGame = (event) => {
        const filteredGames = state.games.filter(game => {
            return game.title.toLowerCase().includes(event.target.value.toLowerCase())
        })
        dispatch({ type: "SET_GAMESFILTERED", content: filteredGames })
    }

    //------------ FUNCTION SEARCH NEWS ----------------
    const searchNew = (event) => {
        const filteredNews = state.news.filter(news => {
            return news.title.toLowerCase().includes(event.target.value.toLowerCase())
        })
        dispatch({ type: "SET_NEWSFILTERED", content: filteredNews })
    }


    return <GameProvider value={{ state, fetchGameDetails, clearGame, searchGame, searchNew }}>
        {children}
    </GameProvider>

}