import { MainContainer } from "./style";
import type { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}


export default function Container({ children }: ContainerProps) {
    return(
        <MainContainer>
            {children}
        </MainContainer>
    );
};