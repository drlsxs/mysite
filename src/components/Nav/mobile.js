/*
 * @Author: yangshilin
 * @Date: 2023-07-04 14:39:06
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-07-04 21:46:18
 * @FilePath: src\components\Nav\mobile.js
 * @Description: 请添加文件描述
 */

import React from 'react';
import {NavItem} from "./index";
import styled from "styled-components";

const NavMobileWrapper = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(37, 33, 33, 0.94);

  &.true {
    display: block;
  }

  .nav-wrap {
    flex-flow: column wrap;
    padding: 0 20px;

    div {
      line-height: 40px;
      margin: 0;
      text-align: center;

      &:last-child {
        border: none;
      }
    }
  }
`;

const MobileNav = ({isopen}) => {
  return (
    <NavMobileWrapper className={`nav-mobile-wrap ${isopen ? 'true' : 'false'}`}>
      <NavItem/>
    </NavMobileWrapper>
  );
};

export default MobileNav;
