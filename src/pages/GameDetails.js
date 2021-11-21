import React, { useEffect } from "react";
import { useParams } from "react-router";
import { CardCarousel } from "../components/Carousel/CardCarousel";
import { Form } from "../components/Form";
import { LoaderComp } from "../components/Loader";
import { useGameList } from "../contexts/game-context";
import { DefaultPage } from "../templates/DefaultPage";

export const GameDetails = () => {
    const { state, fetchGameDetails, clearGame } = useGameList();
    const { game } = state;
    const { gameId } = useParams();

    useEffect(() => {
        fetchGameDetails(gameId);
        return () => {
            clearGame()
        }
    }, [gameId]);

    return (
        <DefaultPage>
            {!game ? <LoaderComp /> : (
                <>
                    <div className="details-main-content">
                        <h1>
                            {`${game.title} (${game.release_date})`}
                        </h1>
                        <div className="carousel-container">
                            <CardCarousel screenshots={game.screenshots} imageAlt={game.title} />
                        </div>
                        <div className="chips-container">
                            <div className="details-chip"><strong>Gênero:</strong>{` ${game.genre}`}</div>
                            <div className="details-chip"><strong>Plataforma:</strong>{` ${game.platform}`}</div>
                        </div>
                        <span>
                            <h3>
                                <i class="fas fa-file-alt"></i>Descrição
                            </h3>
                            <p>
                                {`"${game.short_description}"`}
                            </p>
                        </span>
                        <span className="details-requirements">
                            {game.minimum_system_requirements ? (
                                game.minimum_system_requirements.os != null ? (
                                    <>
                                    <h4>Requisitos mínimos do sistema:</h4>
                                    <ul>
                                        <li>
                                            <strong>Sistema Operacional:</strong>{` ${game.minimum_system_requirements.os}`}
                                        </li>
                                        <li>
                                            <strong>Processador:</strong>{` ${game.minimum_system_requirements.processor}`}
                                        </li>
                                        <li>
                                            <strong>Memória:</strong>{` ${game.minimum_system_requirements.memory}`}
                                        </li>
                                        <li>
                                            <strong>Gráficos:</strong>{` ${game.minimum_system_requirements.graphics}`}
                                        </li>
                                        <li>
                                            <strong>Espaço em disco:</strong>{` ${game.minimum_system_requirements.storage}`}
                                        </li>
                                    </ul>
                                </>
                                ) : (
                                    <>
                                    <h4>Requisitos mínimos do sistema:</h4> 
                                    <ul> 
                                        <li>
                                            <strong>O estagiário não colocou os requisitos deste game. Lamentável </strong>😪
                                        </li>
                                    </ul>
                                </>
                                )
                            ) : (
                                <>
                                    <h4>Requisitos mínimos do sistema:</h4> 
                                    <ul> 
                                        <li>
                                            <strong>O estagiário não colocou os requisitos deste game. Lamentável </strong>😪
                                        </li>
                                    </ul>
                                </>
                            )}
                        </span>
                        <hr />
                        <Form />
                    </div>
                </>
            )}
        </DefaultPage>
    );
};