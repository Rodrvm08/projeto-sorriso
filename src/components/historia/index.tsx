import { HistoriaSection, TextContainer, Title, Paragraph, ImageContainer, Image } from "./style";
import { useEffect, useState } from "react";

import img0 from '../../assets/img0.jpg'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'


const images = [img0, img1, img2, img3, img4]

export default function Historia() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev+1) % images.length);
        }, 3000);

        return() => clearInterval(interval);
    }, []);

    return (
        <HistoriaSection id="sobre"> 
            <TextContainer>
                <Title>Nossa História</Title>
                <Paragraph>
                    O Sorriso Especial nasceu do compromisso do Hospital da Polícia Militar do Piauí (HPMPI) em oferecer atendimento odontológico especializado a pessoas com deficiência intelectual e autismo, um público que historicamente encontra barreiras para acessar cuidados bucais adequados. <br />
                    Acreditamos que saúde bucal é um direito de todos, e que um sorriso bem cuidado transforma vidas. Por isso, seguimos firmes, com o apoio de voluntários, empresas parceiras e da comunidade, levando dignidade e cuidado a quem mais precisa.
                </Paragraph>
            </TextContainer>

            <ImageContainer>
                {images.map((img, index) => (
                    <Image 
                        key={index}
                        src={img}
                        $isActive={index === currentImage}
                    />
                ))}

            </ImageContainer>
        </HistoriaSection>
    );
}