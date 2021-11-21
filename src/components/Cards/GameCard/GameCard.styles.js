import styled from "styled-components";

export const StyledCard = styled.div`

    background: -webkit-linear-gradient(to left, #ff5e62, #ff9966);
    background: linear-gradient(to left, #ff5e62, #ff9966);
    max-width: 365px;
    max-height: 700px;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
        transform: scale(.98);
        opacity: .90;
    }

    h2 {
        margin: 5px;
    }

    img {
        border-radius: 10px;
    }

    span {
        margin-bottom: 5px;
    }

    hr {
        width: 360px;
        border: 1px solid #000;
    }

    p {
        margin: 5px;
        padding: 5px;
    }

    .card-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    button {
        align-items: center;
        background: -webkit-linear-gradient(to left, #48b1bf, #06beb6);
        background: linear-gradient(to left, #48b1bf, #06beb6);
        border: 1px solid #fff;
        border-radius: 10px;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
        font-weight: 600;
        height: 54px;
        letter-spacing: .4px;
        max-width: 100%;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 3px;
        margin: 10px;
        text-transform: uppercase;
        transition: all 400ms;
    }

    button:hover {
        transform: scale(.9);
        opacity: .75;
    }
`