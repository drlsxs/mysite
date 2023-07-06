/*
 * @Author: yangshilin
 * @Date: 2023-07-04 13:17:21
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-07-06 12:06:15
 * @FilePath: src\components\Nav\index.js
 * @Description: 请添加文件描述
 */
import React from 'react';
import styled from "styled-components";
import {useState} from "react";
import githubIcon from "../../assets/site/logo-github-filled.png";
import {Link} from "react-router-dom";
import more from "../../assets/icon/more.svg";

const NavItemWrap = styled.div`
  .nav-wrap {
    display: flex;
  }

  .nav-wrap > div {
    margin-right: 125px;
    font-family: ZhenyanGB;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0px;
    text-align: left;
    cursor: pointer;

    &.active {
      a {
        color: white;
      }
    }

    a {
      color: rgb(196, 196, 196);
    }
  }
`;

const NavWrapper = styled.div`
  display: flex;
  align-items: center;

  .nav-mobile {
    margin-right: 30px;
    cursor: pointer;
    display: none;
    width: 23px;
  }

  img {
    cursor: pointer;
  }
`;

export function NavItem() {
  const NavList = [
    {
      name: "首页",
      path: '/',
    },
    {
      name: '项目',
      path: '/project',
    },
    {
      name: '博客',
      path: '/blog',
    },
    {
      name: '联系方式',
      path: '/contact',
    },
  ]
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <NavItemWrap className="nav-pc">
      <div className="nav-wrap">
        {NavList.map((nav, index) => (
          <div
            onClick={() => setActiveIndex(index)}
            className={activeIndex === index ? 'active' : ''}
            key={nav.path}>
            <Link to={nav.path}>{nav.name}</Link>
          </div>
        ))}
      </div>
    </NavItemWrap>
  );
}


function Nav(props) {
  function handleOpenNav() {
    props.getMsg();
  }

  return (
    <NavWrapper className="nav">
      <NavItem/>
      <img src={more} alt="" className="nav-mobile" onClick={handleOpenNav}/>
      <Link to="https://github.com/drlsxs">
        <img src={githubIcon} alt=""/>
      </Link>
    </NavWrapper>
  );
}

export default Nav;
