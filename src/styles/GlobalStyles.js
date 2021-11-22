import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        background: #fff;
        font-family: 'Montserrat', sans-serif;
    }

    i {
        margin-right: 5px;
    }


    /* Default Page Styles */
    .default-page {
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
    }


    /* Home Styles */
    .home {
        background: -webkit-linear-gradient(to left, #ff5e62, #ff9966);
        background: linear-gradient(to left, #ff5e62, #ff9966);
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .home main {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 4rem;
        color: white;
    }

    .home button {
        align-items: center;
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
        margin-top: 30px;
        text-transform: uppercase;
        transition: all 400ms;
    }

    .home button:hover {
        transform: scale(.9);
        opacity: .75;
    }

    .home h1 {
        text-align: center;
        margin: 5px;
    }

    .home h2 {
        text-align: center;
        margin: 5px;
        font-size: 4rem;
    }

    .home p {
        margin: 5px;
        padding: 5px;
        width: 600px;
        font-size: 15px;
    }

    .home footer {
        margin: 5px;
        padding: 5px;
        font-size: 1rem;
    }


    /* GameList Styles */
    .content-gamelist {
        background: #fff;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .h2-gamelist {
        margin: 5px;
        padding: 5px;
    }

    
    /* NewsList Styles */
    .content-news {
        display: flex;
        flex-direction: column;
    }


    /* GameDetails Styles */
    .carousel-container {
        max-width: 900px;
        margin: 0px auto;
        padding: 10px;
    }

    .details-main-content {
        background: -webkit-linear-gradient(to left, #ff5e62, #ff9966);
        background: linear-gradient(to left, #ff5e62, #ff9966);
        max-width: 1000px;
        display: flex;
        flex-direction: column;
        margin: 10px auto;
        padding: 10px;
        border-radius: 10px;
    }

    .details-main-content p {
        margin: 10px;
    }

    .details-main-content hr {
       border: 1px solid #000;
       max-width: 100%;
       margin: 10px 0px 5px;
    }

    .details-requirements {
        width: 600px;
        background: -webkit-linear-gradient(to left, #48b1bf, #06beb6);
        background: linear-gradient(to left, #48b1bf, #06beb6);
        margin: 15px 5px;
        padding: 5px;
        border: 1px solid black;
        border-radius: 5px;
    }

    .details-main-content h3 {
        margin: 15px 0px 5px 5px;
    }

    .details-requirements h4 {
        margin: 5px;
        padding-left: 5px;
        font-weight: 400;
        font-weight: bold;
    }

    .details-requirements ul {
        list-style: none;
        margin: 5px;
        padding: 5px;
        font-size: 13px;
    }

    .chips-container {
        display: flex;
        margin: 5px;
    }

    .details-chip {
        max-width: 80px;
        background: -webkit-linear-gradient(to left, #48b1bf, #06beb6);
        background: linear-gradient(to left, #48b1bf, #06beb6);
        margin: 5px 5px 5px 0px;
        padding: 5px;
        border: 1px solid #fff;
        border-radius: 10px;
        font-size: 13px;
    }


    /* Coments Styles */

    .comments-container form {
        display: flex;
        flex-direction: column;
        max-width: 600px;
    }

    .comments-container textarea {
        border: 1px solid gray;
        border-radius: 5px;
        font-family: inherit;
        width: 400px;
        height: 60px;
        margin: 5px;
        padding: 5px;
    }

    .comments-container button {
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

    .comments-container button:hover {
        transform: scale(.9);
        opacity: .75;
    }

    .comments-container ul {
        list-style: none;
    }

    .comments-container li {
        margin: 10px;
        padding: 5px;
        border-bottom: 1px solid black;
    }

`