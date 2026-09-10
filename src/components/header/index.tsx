
import type React from 'react';
import logo from '../../assets/logo.png'
import { PillButton, NavLinks, Logo, LogoWrapper, Nav } from "./style";
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleApoieClick = () => {
        if (location.pathname === '/apoie') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/apoie');
        }
    };


    const handleScrollClick = (e: React.MouseEvent, id: string) => {
        if (location.pathname === '/') {
            e.preventDefault();
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth'})
        } else {
            navigate(`/#${id}`);
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth'});
            }, 100);
        }
    };

    return (
        <Nav>
            <LogoWrapper>
                <Logo src={logo} />
            </LogoWrapper>

            <NavLinks>
                <PillButton  to="/" onClick={(e) => handleScrollClick(e, 'sobre')}>Sobre</PillButton>
                <PillButton  to="/apoie" onClick={handleApoieClick}>Apoie</PillButton>
                <PillButton  to="/transparencia">Transparência</PillButton>
                <PillButton  to="/" onClick={(e) => handleScrollClick(e, 'contato')}>Contato</PillButton>
            </NavLinks>
        </Nav>
    );
};
