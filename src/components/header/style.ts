import styled from "styled-components";
import { Link } from "react-router-dom";
import { cores } from "../../globalstyles";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background-color: ${cores.ciano1};
    font-family: 'Playfair Display' , serif; 

    position: sticky;
    top: 0;
    z-index: 1000;

    @media (max-width: 768px) {
        flex-direction: column; /* Stack logo and links vertically */
        gap: 20px;
        padding: 20px;
    }
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #ffffff; 
    box-shadow: 0 2px 10px rgba(0,0,0,0.05); 
`;

export const Logo = styled.img`
    width: 40px;
    height: 40px;
    object-fit: contain;
`;


export const NavLinks = styled.div`
    display: flex;
    gap: 15px;

    @media (max-width: 768px) {
        flex-wrap: wrap; 
        justify-content: center;
        gap: 10px;
    }
`;


export const PillButton = styled(Link)`
    background-color: ${cores.ciano}; 
    color: white;
    text-decoration: none;
    padding: 12px 28px;
    border-radius: 50px; 
    font-size: 18px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #12897b;
    }
    
    @media (max-width: 768px) {
        font-size: 16px;
        padding: 10px 20px;
    }
`;