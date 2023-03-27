import React from 'react';
import styled from "styled-components";
import {useState} from "react";
import githubIcon from "../../assets/site/logo-github-filled.png";
import {Link} from "react-router-dom";

const NavWrapper = styled.div`
    display: flex;
  align-items: center;
  >div{
    margin-right: 125px;
    font-family: ZhenyanGB;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0px;
    text-align: left;
    cursor: pointer;
    &.active{
      a{
        color: white;
      }
    }
    a{
      color: rgb(196, 196, 196);
    }
  }
  img{
    cursor: pointer;
  }
`;



function Nav(props) {
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
        <NavWrapper>
            {NavList.map((nav,index) => (
                <div
                    onClick={()=>setActiveIndex(index)}
                    className={activeIndex === index ? 'active' : ''}
                    key={nav.path}>
                    <Link to={nav.path}>{nav.name}</Link>
                </div>
            ))}
            <img src={githubIcon} alt=""/>
        </NavWrapper>
    );
}

export default Nav;
