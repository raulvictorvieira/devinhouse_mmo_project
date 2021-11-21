import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 600px;

    h3 {
        margin: 5px;
    }

    input {
        border: 1px solid gray;
        border-radius: 5px;
        width: 188px;
        font-family: inherit;
        margin: 5px;
        padding: 5px;
    }

    textarea {
        border: 1px solid gray;
        border-radius: 5px;
        font-family: inherit;
        width: 400px;
        height: 60px;
        margin: 5px;
        padding: 5px;
    }

    button {
        /* background-image: linear-gradient(135deg, #f34079 40%, #fc894d); */
        background: -webkit-linear-gradient(to left, #48b1bf, #06beb6);
        background: linear-gradient(to left, #48b1bf, #06beb6);
        border: 1px solid #fff;
        border-radius: 10px;
        color: #fff;
        cursor: pointer;
        font-size: 13px;
        font-weight: 600;
        letter-spacing: .4px;
        width: 80px;
        height: 30px;
        margin: 5px;
        text-transform: uppercase;
        transition: all 400ms;
    }

    button:hover {
        transform: scale(.9);
        opacity: .75;
    }
`