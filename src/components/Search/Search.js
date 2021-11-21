import React from "react";
import { StyledSearch } from "./Search.styles";

export const Search = ({search, placeholder}) => {

    return (
            <StyledSearch>
                <div>
                    <i class="fas fa-search" />
                    <input type="text" onChange={search} placeholder={placeholder}/>
                </div>
            </StyledSearch>
    );
};