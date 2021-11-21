import React from "react";
import { useNavigate } from "react-router";
import { StyledHeader } from "./Header.styles";

export const Header = () => {
    const navigate = useNavigate();
    return (
            <StyledHeader>
                <header>
                    <nav>
                        <h1 onClick={() => navigate('/')}>DEVinMMO</h1>
                        <ul>
                            <li onClick={() => navigate('/')}>
                                <i class="fas fa-home" />
                                Home
                            </li>
                            <li onClick={() => navigate('/games')}>
                                <i class="fas fa-gamepad" />
                                Games
                            </li>
                            <li onClick={() => navigate('/news')}>
                                <i class="far fa-newspaper" />
                                News
                            </li>
                        </ul>
                    </nav>
                </header>
            </StyledHeader>
    )
}