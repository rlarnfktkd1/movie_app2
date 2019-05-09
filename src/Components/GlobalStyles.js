import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 12px;
        background-color: rgba(20, 20, 20, 1);
        color: white;
        padding-top: 50px;
    }
    i{
        margin-bottom: 5px;
    }
    .fa-calendar-alt, .fa-clock{
        margin-right: 5px;
        text-shadow: rgb(34, 141, 255) 0px 0px 5px, rgb(34, 141, 255) 0px 0px 10px, rgb(34, 141, 255) 0px 0px 15px, rgb(255, 255, 255) 0px 0px 20px, rgb(255, 255, 255) 0px 0px 35px, rgb(34, 141, 255) 0px 0px 40px, rgb(34, 141, 255) 0px 0px 50px, rgb(34, 141, 255) 0px 0px 75px;
    }
    .mainMenu .menuBar{
        background: rgb(109,109,109);
        display: none;
        height:auto;
        padding:0px;
        margin:0px;
        border:0px;
        position:absolute;
        top:50px;
        width:200px;
        z-index:200;
        &:hover{
            display:block;
        }
    }
`;

export default globalStyles;

// 세로 메뉴 변형시 padding-left: 80px;
