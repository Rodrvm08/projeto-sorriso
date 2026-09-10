import { Section, Title, CardsContainer, Card } from "./style";

export default function Apoie() {
    return (
        <Section>
            <Title>Como apoiar nossa causa</Title>
            <CardsContainer>
                <Card>
                    Apoie<br />Financeiramente
                </Card>
                <Card>
                    Doação de<br />Materiais e de<br />Brinquedos
                </Card>
                <Card>
                    Seja<br />Voluntário
                </Card>
            </CardsContainer>
        </Section>
    );
}