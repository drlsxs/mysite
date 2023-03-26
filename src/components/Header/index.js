import React from 'react';
import styled from "styled-components";
import Nav from "../Nav";
const HeadWrapper = styled.div`
  width: 100%;
  height: 83px;
  left: 0;
  top: 0;
  border-bottom: 1px solid #303453;;
  box-shadow: 0px 1px 2px 2px rgba(0,0,0,0.16);
  color: white;
  padding: 0 221px 0 83px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  color: rgb(255, 255, 255);
  font-family: ZhenyanGB,serif;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  text-align: left;
  cursor: pointer;
`;


function Header(props) {
    return (
        <HeadWrapper>
            <LogoWrapper>
                网站名称
            </LogoWrapper>
            <Nav />
        </HeadWrapper>
    );
}

export default Header;