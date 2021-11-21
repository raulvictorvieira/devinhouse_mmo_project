import React from 'react'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export const DefaultPage = ({children}) => {
    return (
        <>
            <Header />
            <main className="default-page">
                {children}
            </main>
            <Footer />
        </>
    );
};
