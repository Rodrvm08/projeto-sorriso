import { cores } from "../../globalstyles";

import styled from "styled-components";

export const FooterSection = styled.footer`
    width: 100%;
    background-color: ${cores.ciano};
    padding: 50px 80px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-family: 'Playfair Display', serif;
    color: white;
    margin-top: 0; 

    @media (max-width: 1024px) {
        padding: 50px 40px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 40px;
        padding: 40px 20px;
        text-align: center;
    }
`;

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;

    @media (max-width: 768px) {
        align-items: center;
        width: 100%;
    }
`;


export const LogoCircle = styled.button`
    background-color: #ffffff;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    
    border: none; 
    cursor: pointer;
    transition: transform 0.2s ease;

    margin-left: -5px;
    padding: 0;

    &:hover {
        transform: scale(1.05); 
    }

    img {
        width: 60%;
        height: 60%;
        object-fit: contain;
    }

    @media (max-width: 768px) {
        margin-left: 0; 
    }
`;

export const CrestImage = styled.img`
    width: 80px;
    height: auto;
    object-fit: contain;
`;

export const Copyright = styled.p`
    font-size: 1.1rem;
    margin-top: 10px;

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }

`;

export const CenterColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const QRCode = styled.img`
    width: 150px;
    height: 150px;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 5px;
    object-fit: contain;

    @media (max-width: 480px) {
        width: 120px;
        height: 120px;
    }
`;

export const CallToAction = styled.h2`
    font-size: 2.5rem;
    font-weight: 400;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }

    @media (max-width: 480px) {
        font-size: 1.4rem;
    }
`;


export const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    text-align: right;

    @media (max-width: 768px) {
        align-items: center;
        text-align: center;
        width:100%;
    }
`;

export const FooterLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;

    @media (max-width: 480px) {
        gap: 10px;
    }
`;

export const Link = styled.a`
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 0.7;
    }

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const InstagramIcon = styled.a`
    color: white;
    margin-top: 10px;
    
    svg {
        width: 40px;
        height: 40px;
        fill: currentColor;
    }

    @media (max-width: 480px) {
        svg {
            width: 35px;
            height: 35px;
        }
    }
`;

export const CrestLink = styled.a`
    display: block;
    width: 80px; 
    
    &:hover {
        opacity: 0.8; 
    }
`;