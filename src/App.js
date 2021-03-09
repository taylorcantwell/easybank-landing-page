import React from 'react';
import Articles from './components/Articles';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Info from './components/Info';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <Hero />
            <Info />
            <Articles />
            <Footer />
        </>
    );
};

export default App;
