import styled from "styled-components";

export const StyledNewsCard = styled.div`
    display: flex;
    max-width: 1000px;
    margin: 10px;
    padding: 10px;
    background: -webkit-linear-gradient(to left, #ff5e62, #ff9966);
    background: linear-gradient(to left, #ff5e62, #ff9966);
    border-radius: 10px;

    img {
        max-width: 400px;
        height: 200px;
        margin: 10px;
        padding: 5px;
        border-radius: 10px;
    }

    .card-content {
        margin: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    button {
        align-items: center;
        background: -webkit-linear-gradient(to left, #48b1bf, #06beb6);
        background: linear-gradient(to left, #48b1bf, #06beb6);
        border: 1px solid #fff;
        border-radius: 10px;
        color: #fff;
        cursor: pointer;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: .4px;
        max-width: 100%;
        height: 40px;
        padding-left: 20px;
        padding-right: 20px;
        margin: 5px auto;
        text-transform: uppercase;
        transition: all 400ms;
    }

    button:hover {
        transform: scale(.9);
        opacity: .75;
    }
`