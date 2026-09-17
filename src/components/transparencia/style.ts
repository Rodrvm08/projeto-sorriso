import styled from "styled-components";
import { cores } from "../../globalstyles";


export const PageWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    padding: 50px 0 80px;
`;

export const Section = styled.section`
    width: calc(100% - 80px);
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        width: calc(100% - 40px);
    }
`;

export const SectionTitle = styled.h2`
    background-color: ${cores.ciano};
    color: white;
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    font-weight: 400;
    padding: 12px 40px;
    border-radius: 10px;
    margin-bottom: 30px;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.5rem;
        padding: 10px 20px;
        width: 100%;
    }
`;

export const IntroText = styled.p`
    font-family: 'Playfair Display', serif;
    font-size: 1.3rem;
    color: ${cores.preto};
    text-align: center;
    line-height: 1.6;

    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`;

export const IntroCard = styled.div`
    background-color: #ffffff;
    border-radius: 25px;
    padding: 40px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease;
    max-width: 900px;
    width: 100%;
    margin-top: 10px; 

    &:hover {
        transform: translateY(-5px);
    }

    @media (max-width: 768px) {
        padding: 30px 20px;
    }
`;

export const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    width: 100%;
    margin-top: 20px;

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

export const StatCard = styled.div`
    background-color: #ffffff;
    border-radius: 25px;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }
`;

export const StatNumber = styled.span`
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    font-weight: 700;
    color: ${cores.ciano};
    line-height: 1;
    margin-bottom: 10px;
`;

export const StatLabel = styled.span`
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    color: ${cores.preto};
    line-height: 1.4;
`;

export const AllocationCard = styled.div`
    background-color: #ffffff;
    border-radius: 30px;
    padding: 40px;
    width: 100%;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

    @media (max-width: 768px) {
        padding: 25px;
    }
`;

export const AllocationItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;

    &:last-child {
        margin-bottom: 0;
    }
`;

export const AllocationHeader = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    color: ${cores.preto};
    margin-bottom: 8px;
`;

export const ProgressBar = styled.div`
    width: 100%;
    height: 15px;
    background-color: ${cores.ciano1};
    border-radius: 50px;
    overflow: hidden;
`;

export const ProgressFill = styled.div<{ $percentage: number }>`
    width: ${(props) => props.$percentage}%;
    height: 100%;
    background-color: ${cores.ciano};
    border-radius: 50px;
    transition: width 0.5s ease;
`;

/* --- IMPACTO DA DOAÇÃO (VALORES) --- */
export const ImpactGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
    width: 100%;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

export const ImpactCard = styled.div`
    background-color: #ffffff;
    border-radius: 25px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    border-top: 5px solid ${cores.ciano};
`;

export const ImpactValue = styled.h3`
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    font-weight: 700;
    color: ${cores.ciano};
    margin-bottom: 10px;
`;

export const ImpactDescription = styled.p`
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    color: ${cores.preto};
    line-height: 1.5;
`;

export const TableWrapper = styled.div`
    width: 100%;
    overflow-x: auto;
    background-color: #ffffff;
    border-radius: 25px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-family: 'Playfair Display', serif;

    th, td {
        padding: 18px 25px;
        text-align: left;
        font-size: 1.1rem;
    }

    th {
        background-color: ${cores.ciano};
        color: white;
        font-weight: 400;
    }

    tbody tr {
        border-bottom: 1px solid #eaeaea;
        color: ${cores.preto};

        &:last-child {
            border-bottom: none;
        }

        &:hover {
            background-color: ${cores.ciano1};
        }
    }

    @media (max-width: 768px) {
        th, td {
            padding: 12px 15px;
            font-size: 0.95rem;
        }
    }
`;


export const PartnersGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    align-items: center;
    margin-top: 20px;
`;

export const PartnerLogo = styled.img`
    height: 80px;
    object-fit: contain;
    filter: grayscale(0%);
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;


export const DocumentsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 100%;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

export const DocumentCard = styled.a`
    background-color: #ffffff;
    border-radius: 20px;
    padding: 25px;
    display: flex;
    align-items: center;
    gap: 15px;
    text-decoration: none;
    color: ${cores.preto};
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
    }

    svg {
        color: ${cores.ciano};
        flex-shrink: 0;
    }
`;

/* --- FAQ --- */
export const FaqList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const FaqItem = styled.div`
    background-color: #ffffff;
    border-radius: 20px;
    padding: 20px 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
    }
`;

export const FaqQuestion = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    color: ${cores.preto};
    font-weight: 600;

    span {
        color: ${cores.ciano};
        font-size: 1.5rem;
    }
`;

export const FaqAnswer = styled.p`
    font-family: 'Playfair Display', serif;
    font-size: 1.05rem;
    color: #555;
    line-height: 1.6;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid #eaeaea;
`;

/* --- CTA FINAL --- */
export const CtaBox = styled.div`
    background-color: ${cores.ciano};
    border-radius: 30px;
    padding: 50px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);

    @media (max-width: 768px) {
        padding: 30px 20px;
    }
`;

export const CtaText = styled.h3`
    font-family: 'Playfair Display', serif;
    color: white;
    font-size: 2rem;
    font-weight: 400;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const CtaButton = styled.a`
    background-color: #ffffff;
    color: ${cores.ciano};
    text-decoration: none;
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    padding: 15px 40px;
    border-radius: 50px;
    transition: transform 0.3s ease, background-color 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        background-color: #f2fbfb;
    }
`;