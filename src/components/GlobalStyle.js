import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
        font-family: 'Raleway', sans-serif;
        color: #1D1F22;
        overflow-x: hidden;
        
    }
    //Prevent layout shift on modal open (hidden scrollbar)
    html {
        @media (min-width: 400px) {
        margin-right: calc(-1 * (100vw - 100%));
        }
    }
    header,
    section,
    main {
        width: 90%;
        margin: 0 auto 2em;
    }
    img {
        max-width: 100%;
        display: block;
    }

    @media (max-width: 768px) {
        header,
        section,
        main {
            width: 96%;
        }

        html {
            font-size: 75%;
        }

    
    }
`;
export default GlobalStyle;
