import styled from "styled-components";
import { cores } from "../../globalstyles";

export const HistoriaSection = styled.section`
    display: flex;
    width: calc(100% - 80px);
    max-width: 1200px;
    margin: 50px auto 0; 
    background-color: #ffffff;
    border-radius: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    scroll-margin-top: 20px; 

    @media (max-width: 768px) {
        flex-direction: column;
        width: calc(100% - 40px);
    }
`;

export const TextContainer = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 80px;

    @media (max-width: 768px) {
        width: 100%;
        padding: 40px 20px;
        align-items: center;
        text-align: center;
    }
`;

export const Title = styled.h2`
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    font-weight: 400;
    color: ${cores.preto};
    margin-bottom: 20px;
`;

export const Paragraph = styled.p`
    font-family: 'Playfair Display', serif; 
    font-size: 1.2rem;
    color: #333;
    line-height: 1.6;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const ImageContainer = styled.div`
    width: 45%;
    position: relative;

    @media (max-width: 768px) {
        width: 100%;
        height: 300px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;