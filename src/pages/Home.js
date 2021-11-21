import React from "react";
import { useNavigate } from "react-router";
import { Footer } from "../components/Footer/Footer";

export const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="home">
            <main>
                <h1>Welcome Folks</h1>
                <h2>MMO Project - by DEVinHouse</h2>
                <p><strong>Entre e procure o MMO que você ama. Saiba mais informações sobre ele e fique por dentro das últimas notícias sobre o mundo dos games. Enjoy it!</strong></p>
                <button onClick={() => navigate('/games')}>
                    <i class="fas fa-sign-in-alt"></i>
                    Entrar
                </button>
            </main>
            <Footer />
        </div>
    );
};