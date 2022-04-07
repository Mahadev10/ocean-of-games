import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
html{
    max-width:100%;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: darkgrey;
    }
    &::-webkit-scrollbar-track {
    background: white;
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width:100%
    }
    h2{
        font-size:3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight:lighter;
        color:#333;
    }
    h3{
        font-size:1.3rem;
        color:#333;
    }
    p{
        font-size:1.2rem;
        line-height:200%;
        color:#696969;
    }
    a{
        text-decoration:none;
        color:#333;
    }
    input{
        font-weight:bold;
        font-family:'Monserrat',sans-serif;
    }
}
`;
export default GlobalStyles;
