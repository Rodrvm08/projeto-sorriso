import styled from "styled-components";
import { cores } from "../../globalstyles";

export const ContatoSection = styled.section`
    display: flex;
    width: calc(100% - 80px);
    max-width: 1150px;
    margin: 50px auto 0;
    background-color: #ffffff;
    border-radius: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    scroll-margin-top: 120px;

    @media (max-width: 768px) {
        flex-direction: column;
        width: calc(100% - 40px);
    }
`;

export const MapWrapper = styled.div`
    width: 50%;
    position: relative;

    @media (max-width: 768px) {
        width: 100%;
        height: 300px;
    }
`;

export const MapIframe = styled.iframe`
    width: 100%;
    height: 100%;
    border: 0;
`;

export const InfoWrapper = styled.div`
    width: 50%;
    padding: 50px 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
        width: 100%;
        padding: 40px 20px;
    }
`;

export const Title = styled.h2`
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    font-weight: 400;
    color: ${cores.preto};
    margin-bottom: 30px;
`;

export const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px; 
`;

export const Item = styled.div`
    display: flex;
    align-items: flex-start; /* Critical: Keeps multi-line text aligned to the top line */
    gap: 15px;
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    color: ${cores.preto};
    line-height: 1.5; /* This creates a 28.8px line box */
`;

export const Icon = styled.span`
    color: ${cores.ciano};
    width: 24px;
    height: 24px;
    display: flex;       /* Turns the span into a flex container */
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin-top: 2px;     /* (28.8px line height - 24px icon height) / 2 = 2.4px */
`;

