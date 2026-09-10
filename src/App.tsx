

import Navbar from './components/header'
import Hero from './components/hero'
import { GlobalStyles } from './globalstyles'
import Container from './components/container'
import Historia from './components/historia'
import Footer from './components/footer'
import Contato from './components/contato'
import ScrollToTop from './components/scroll'
import Apoie from './components/voluntario'

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function Home() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth'});     
            }, 100);
        }
    }, [hash]);

    return (
        <>
            <Hero />
            <Historia />
            <Contato />
        </>
    )
}

function App() {
    return (
        <>
        <BrowserRouter>
            <ScrollToTop />
            <Container>
                <GlobalStyles />
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/apoie' element={<Apoie />} />
                </Routes>
                
            </Container >
            <Footer />
        </BrowserRouter>

            
        </>
    );
};

export default App
