import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html{
    font-size:62.5%;
    scroll-behavior: smooth;
}

*,
*::before,
*::after
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body,html{
    overflow-x: hidden;
}
`;

export default GlobalStyle;
