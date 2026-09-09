import { createGlobalStyle } from "styled-components";

export const cores = {
    preto: "#000",
    ciano: "#00b7b3",
    ciano1: "#d3e6ed",
    amareloNeon: "#d5ff08",
    darkblue: "#196b95",
    cinza: "#F2FBFB"
}

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: 'Playfair Display';
    }
`