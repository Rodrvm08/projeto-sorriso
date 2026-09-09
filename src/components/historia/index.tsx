import { HistoriaSection, TextContainer, Title, Paragraph, ImageContainer, Image } from "./style";
import foto from '../../assets/context.png'

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
                <Image src={foto}/>
            </ImageContainer>
        </HistoriaSection>
    );
}