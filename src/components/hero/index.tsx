
import { HeroSection, TextContainer, Title, TealShapeContainer, TealShape } from './style';

export default function Hero() {
    return (
        <HeroSection>
            <TextContainer>
                <Title>
                    Serviço de Referência<br />
                    Odontológica à Pessoa com<br />
                    Deficiência Intelectual e Autismo
                </Title>
            </TextContainer>

            <TealShapeContainer>
                <TealShape />
            </TealShapeContainer>
        </HeroSection>
    );
};