import React from "react";
import { StyledNewsCard } from "./NewsCard.styles";

export const NewsCard = ({id, title, description, thumb, url}) => {
    return (
        <StyledNewsCard id={id}>
            <img src={thumb} alt={title} />
                    <div className="card-content">
                        <h2>
                            {title}
                        </h2>
                        <p>
                            {description}
                        </p>
                        <button onClick={() => {window.open(`${url}`)}} >Ver no site</button>
                    </div>
        </StyledNewsCard>
    );
}
