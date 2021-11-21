import React from "react";
import { useNavigate } from "react-router";
import { StyledCard } from "./GameCard.styles";

export const Gamecard = ({ id, title, genre, description, thumb }) => {
    const navigate = useNavigate();
    return (
            <StyledCard id={id}>
                    <img src={thumb} alt={title} />
                    <h2>
                        {title}
                    </h2>
                    <span>
                        {genre}
                    </span>
                    <hr />
                    <div className="card-content">
                        <p>
                            {description}
                        </p>
                        <button onClick={() => navigate(`/games/${id}`)}>Ver mais</button>
                    </div>
            </StyledCard>
    );
};