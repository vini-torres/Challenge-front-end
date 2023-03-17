import { createGlobalStyle } from "styled-components"; 

export const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
        list-style: none;
        text-decoration: none;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        font-family: 'Circular Std', sans-serif;
    }

    button {
        cursor: pointer;
    }
`