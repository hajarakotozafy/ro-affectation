import { createGlobalStyle } from "styled-components";
import "@fontsource/plus-jakarta-sans"
import "@fontsource/plus-jakarta-sans/800.css"
import "@fontsource/plus-jakarta-sans/700.css"
import "@fontsource/plus-jakarta-sans/600.css"
import "@fontsource/plus-jakarta-sans/500.css"
import "@fontsource/plus-jakarta-sans/400.css"
import "@fontsource/plus-jakarta-sans/300.css"
import "@fontsource/plus-jakarta-sans/200.css"

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Plus Jakarta Sans"
    }
`

export default GlobalStyles;