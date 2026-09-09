import styled from "styled-components";
import { cores } from "../../globalstyles";

export const HeroSection = styled.section`
    display: flex;
    width: calc(100% - 80px); 
    max-width: 1200px;
    margin: 0 auto; 
    min-height: 450px;
    background-color: #ffffff;
    border-radius: 30px; 
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); 
    overflow: hidden; 

    @media (max-width: 768px) {
        flex-direction: column;
        min-height: auto;
        width: calc(100% - 40px);
    }
`;

export const TextContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 80px; 

    @media (max-width: 768px) {
        width: 100%;
        padding: 40px 20px;
    }
`;

export const Title = styled.h1`
    font-family: 'Playfair Display', serif;
    font-size: 3rem; 
    font-weight: 400;
    line-height: 1.3;
    color: ${cores.preto};

    @media (max-width: 768px) {
        font-size: 1.8rem;
    }
`;

export const TealShapeContainer = styled.div`
    width: 50%;
    position: relative;
    overflow: hidden; 

    @media (max-width: 768px) {
        width: 100%;
        height: 250px;
    }
`;

export const TealShape = styled.div`
    position: absolute;
    top: 0;
    right: 0; 
    left: 0;  
    width: 100%;
    height: 100%;
    background-color: ${cores.ciano}; 

    border-radius: 100% 0 0 100%; 

    @media (max-width: 768px) {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        border-radius: 100% 100% 0 0; 
    }
`;