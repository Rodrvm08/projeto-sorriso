

import Navbar from './components/header'
import Hero from './components/hero'
import { GlobalStyles } from './globalstyles'
import Container from './components/container'
import Historia from './components/historia'
import Footer from './components/footer'

function App() {
    return (
        <>
            <Container>
                <GlobalStyles />
                <Navbar />
                <Hero />
                <Historia />
            </Container >
            <Footer />
        </>
    );
};

export default App
