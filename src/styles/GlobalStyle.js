import {createGlobalStyle} from "styled-components";
import ZhenyanGB from "../assets/fonts/RuiZiZhenYanTiMianFeiShangYong-2.ttf";
import PangMenZhengDao from '../assets/fonts/PangMenZhengDaoBiaoTiTi-1.ttf';

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'ZhenyanGB';
    src: url(${ZhenyanGB}) format('truetype');
    font-style: normal;
    font-display: auto;
  }
  
  @font-face {
    font-family: 'PangMenZhengDao';
    src: url(${PangMenZhengDao}) format('truetype');
    font-style: normal;
    font-display: auto;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: rgb(6, 11, 39);
  }
`;

export default GlobalStyle;