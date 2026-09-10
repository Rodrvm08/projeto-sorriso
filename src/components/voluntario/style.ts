import styled from "styled-components";
import { cores } from "../../globalstyles";

export const Section = styled.section`
    width: calc(100% - 80px);
    max-width: 1200px;
    margin: 50px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h2`
    background-color: ${cores.ciano};
    color: white;
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    font-weight: 400;
    padding: 15px 50px;
    border-radius: 10px;
    margin-bottom: 40px;
    text-align: center;
`;

export const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    width: 100%;
    flex-wrap: wrap;
`;

export const Card = styled.div`
    background-color: #ffffff;
    border-radius: 30px;
    width: 300px;
    padding: 40px 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    color: ${cores.preto};
    line-height: 1.4;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 250px;
`;