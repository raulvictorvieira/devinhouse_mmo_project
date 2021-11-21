import styled from "styled-components";

export const StyledHeader = styled.header`
    height: auto;
    width: 100%;

    h1 {
        margin: 20px;
        font-size: 2rem;
        transition: all 400ms;
        cursor: pointer;
    }

    h1:hover {
        color: #ff9966;
    }

    nav {
        background: #06beb6;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        width: 100%;
        height: 100px;
    }

    ul {
        display: flex;
        justify-content: space-evenly;
        width: 400px;
        list-style: none;
        margin-right: 20px;
    }

    li {
        max-width: 100%;
        margin: 15px;
        padding: 10px;
        cursor: pointer;
        background: -webkit-linear-gradient(to left, #ff5e62, #ff9966);
        background: linear-gradient(to right, #ff5e62, #ff9966);
        border: none;
        border-radius: 10px;
        text-transform: uppercase;
        transition: all 400ms;
        font-weight: 600;
    }

    li:hover {
        transform: scale(.9);
        opacity: .75;
    }
`