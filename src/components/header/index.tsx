
import logo from '../../assets/logo.png'
import { PillButton, NavLinks, Logo, LogoWrapper, Nav } from "./style";


export default function Navbar() {
    return (
        <Nav>
            <LogoWrapper>
                <Logo src={logo}>
                </Logo>
            </LogoWrapper>

            <NavLinks>
                <PillButton href="#sobre">Sobre</PillButton>
                <PillButton href="#apoie">Apoie</PillButton>
                <PillButton href="#transparencia">Transparência</PillButton>
                <PillButton href="#contato">Contato</PillButton>
            </NavLinks>
        </Nav>
    );
};
