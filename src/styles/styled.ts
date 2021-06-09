import { createGlobalStyle } from 'styled-components';
import resetCSS from './reset';

export default createGlobalStyle`
${resetCSS}
body {
    font-family: "Raleway";
    font-weight: 400;
}
a {
    text-decoration: none;
}

html,
body,
#root {
    height: 100%;
}
`;
