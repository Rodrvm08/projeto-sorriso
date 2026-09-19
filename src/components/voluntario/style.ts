import styled from "styled-components";
import { cores } from "../../globalstyles";

export const Section = styled.section`
    width: calc(100% - 80px);
    max-width: 1200px;
    margin: 50px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        width: calc(100% - 40px);
        margin: 30px auto 0;
    }
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

    @media (max-width: 768px) {
        font-size: 1.8rem;
        padding: 12px 20px;
        margin-bottom: 30px;
        width: 100%; 
    }
`;

export const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    width: 100%;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        gap: 20px;
        flex-direction: column; 
        align-items: center; 
    }
`;

export const Card = styled.div`
    background-color: #ffffff;
    border-radius: 30px;
    width: 320px;
    padding: 40px 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    color: ${cores.preto};
    line-height: 1.4;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 300px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
    }

    @media (max-width: 768px) {
        width: 100%; 
        max-width: 100%;
        padding: 30px 20px;
        min-height: auto;
    }
`;

export const CardTitle = styled.h3`
    font-size: 1.8rem;
    font-weight: 400;
    color: ${cores.preto};
    margin-top: 20px;
    margin-bottom: 15px;

    @media (max-width: 768px) {
        font-size: 1.5rem;
        margin-top: 15px;
    }
`;

export const CardDescription = styled.p`
    font-size: 1.1rem;
    color: #555;
    line-height: 1.5;
    margin-bottom: 25px;
    flex-grow: 1; 

    @media (max-width: 768px) {
        font-size: 1rem;
        margin-bottom: 20px;
    }
`;

export const CardButton = styled.button`
    background-color: ${cores.ciano};
    color: white;
    border: none;
    text-decoration: none;
    padding: 10px 25px;
    border-radius: 50px;
    font-size: 1.1rem;
    font-family: 'Playfair Display', serif;
    transition: background-color 0.3s ease;
    cursor: pointer;

    &:hover {
        background-color: #12897b;
    }

    @media (max-width: 768px) {
        font-size: 1rem;
        padding: 12px 20px;
    }
`;


export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6); 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000; 
    padding: 20px;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

export const ModalContent = styled.div`
    background-color: #ffffff;
    border-radius: 30px;
    width: 100%;
    max-width: 500px;
    padding: 40px;
    position: relative;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    max-height: 90vh;
    overflow-y: auto;

    @media (max-width: 768px) {
        padding: 30px 20px;
        border-radius: 20px;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #333;
    transition: color 0.2s;

    &:hover {
        color: ${cores.ciano};
    }

    @media (max-width: 768px) {
        top: 15px;
        right: 15px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-family: 'Playfair Display', serif;

    @media (max-width: 768px) {
        gap: 15px;
    }
`;

export const FormTitle = styled.h3`
    font-size: 2rem;
    font-weight: 400;
    color: ${cores.preto};
    margin-bottom: 10px;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.6rem;
    }
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Label = styled.label`
    font-size: 1rem;
    color: ${cores.preto};
`;

export const Input = styled.input`
    padding: 12px 15px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 1rem; 
    font-family: 'Playfair Display', serif;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
        border-color: ${cores.ciano};
    }

    @media (max-width: 768px) {
        padding: 12px;
    }
`;

export const TextArea = styled.textarea`
    padding: 12px 15px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 1rem;
    font-family: 'Playfair Display', serif;
    outline: none;
    resize: vertical;
    min-height: 100px;
    transition: border-color 0.3s;

    &:focus {
        border-color: ${cores.ciano};
    }

    @media (max-width: 768px) {
        padding: 12px;
        min-height: 80px;
    }
`;

export const SubmitButton = styled.button`
    background-color: ${cores.ciano};
    color: white;
    border: none;
    padding: 15px;
    border-radius: 50px;
    font-size: 1.2rem;
    font-family: 'Playfair Display', serif;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 10px;

    &:hover {
        background-color: #12897b;
    }

    @media (max-width: 768px) {
        padding: 12px;
        font-size: 1.1rem;
    }
`;

export const PartnerSection = styled.section`
    width: calc(100% - 80px);
    max-width: 1200px;
    margin: 60px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        width: calc(100% - 40px);
        margin: 40px auto 0;
    }
`;

export const CompanyCtaCard = styled.div`
    background-color: #ffffff;
    border-radius: 30px;
    padding: 50px;
    width: 100%;
    max-width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    border-top: 5px solid ${cores.ciano};
    margin-bottom: 50px;

    @media (max-width: 768px) {
        padding: 30px 20px;
    }
`;

export const CompanyCtaTitle = styled.h3`
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    font-weight: 400;
    color: ${cores.preto};

    @media (max-width: 768px) {
        font-size: 1.4rem;
    }
`;

export const CompanyCtaText = styled.p`
    font-family: 'Playfair Display', serif;
    font-size: 1.15rem;
    color: #555;
    line-height: 1.6;
    max-width: 700px;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const Subtitle = styled.h3`
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    font-weight: 400;
    color: ${cores.preto};
    margin-bottom: 15px;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.4rem;
    }
`;

export const SubtitleText = styled.p`
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    color: #555;
    line-height: 1.6;
    max-width: 700px;
    text-align: center;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const PartnerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    width: 100%;

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const PartnerCard = styled.div`
    background-color: #ffffff;
    border-radius: 25px;
    padding: 30px 25px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
    }
`;

export const PartnerName = styled.h4`
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: ${cores.preto};
    margin-bottom: 5px;
`;

export const PartnerDetail = styled.p`
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    color: #555;
    line-height: 1.5;

    strong {
        color: ${cores.preto};
        font-weight: 600;
    }
`;

export const PartnerContactButton = styled.a`
    background-color: ${cores.ciano};
    color: white;
    text-decoration: none;
    padding: 10px 22px;
    border-radius: 50px;
    font-size: 1rem;
    font-family: 'Playfair Display', serif;
    margin-top: 10px;
    align-self: flex-start;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #12897b;
    }
`;

/* --- CHECKBOXES (para o formulário de empresa) --- */
export const CheckboxGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 5px;
`;

export const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Playfair Display', serif;
    font-size: 0.95rem;
    color: ${cores.preto};
    cursor: pointer;
    padding: 8px 14px;
    border: 1px solid #ccc;
    border-radius: 50px;
    transition: all 0.2s ease;

    input {
        accent-color: ${cores.ciano};
    }

    &:hover {
        border-color: ${cores.ciano};
    }
`;

export const Select = styled.select`
    padding: 12px 15px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 1rem;
    font-family: 'Playfair Display', serif;
    outline: none;
    background-color: white;
    transition: border-color 0.3s;
    width: 100%;

    &:focus {
        border-color: ${cores.ciano};
    }
`;