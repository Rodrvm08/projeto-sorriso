import { cores } from "../../globalstyles";
import styled from "styled-components";

export const MainContainer = styled.div`
    min-height: 100vh;
    background-color: ${cores.ciano1};
    padding-bottom: 0;

    @media (max-width: 768px) {
        padding-bottom: 30px;
    }
`