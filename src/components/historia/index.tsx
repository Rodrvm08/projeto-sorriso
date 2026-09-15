import { HistoriaSection, TextContainer, Title, Paragraph, ImageContainer, Image } from "./style";


export default function Historia() {
    return (
        <HistoriaSection id="sobre"> 
            <TextContainer>
                <Title>Nossa História</Title>
                <Paragraph>
                    lorem ipsum
                    ndsncndsnicisndcnndsnuccedsc
                </Paragraph>
            </TextContainer>

            <ImageContainer>
                <Image src="https://placehold.co/600x700/00b7b3/ffffff?text=Nossa+Equipe&font=playfair-display"  alt="Foto da nossa equipe"/>
            </ImageContainer>
        </HistoriaSection>
    );
}