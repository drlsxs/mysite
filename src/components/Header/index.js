/*
 * @Author: yangshilin
 * @Date: 2023-07-04 12:36:42
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-07-06 12:03:31
 * @FilePath: src\components\Header\index.js
 * @Description: 请添加文件描述
 */
import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Nav from "../Nav";
import logo from "../../assets/icon/logo.svg";
import {NavContainer} from "../../styles/media";
import MobileNav from "../Nav/mobile";

const HeadWrapper = styled.div`
  width: 100%;
  height: 83px;
  left: 0;
  top: 0;
  border-bottom: 1px solid #303453;;
  box-shadow: 0px 1px 2px 2px rgba(0, 0, 0, 0.16);
  color: white;
  padding: 0 10% 0 3%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  color: rgb(255, 255, 255);
  font-family: ZhenyanGB, serif;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  text-align: left;
  cursor: pointer;
`;

function Header(props) {

  const [open, setOpen] = useState(false);

  document.addEventListener('click', e => {
    let ydd = document.querySelector(".nav-mobile"); //移动端
    let self = document.querySelector(".nav-mobile-wrap"); //自己
    //如果点击的元素不是移动端和自己就隐藏
    if (!self.contains(e.target) && e.target !== ydd) {
      setOpen(false);
    }
  });

  const handle2 = ($value) => {
    setOpen(true);
  }


  return (
    <HeadWrapper>
      <LogoWrapper>
        <img src={logo} alt=""/>
      </LogoWrapper>
      <NavContainer>
        <Nav getMsg={handle2}/>
        <MobileNav isopen={open}/>
      </NavContainer>
    </HeadWrapper>
  );
}

export default Header;
