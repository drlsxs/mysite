/*
 * @Author: yangshilin
 * @Date: 2023-07-04 13:18:33
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-07-06 12:31:55
 * @FilePath: src\styles\media.js
 * @Description: 请添加文件描述
 */
import styled from "styled-components";

const NavContainer = styled.div`
  //屏幕宽度小于990px,隐藏pc端导航栏，显示移动端导航栏
  @media (max-width: 990px) {
    .nav {
      .nav-wrap {
        display: none;
      }

      .nav-mobile {
        display: block;
      }
    }

  }



`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  padding: 10px;
  @media (max-width: 768px) {
    .intro {
      font-size: 39px;
      line-height: 39px;
    }
  }


`;

export {
  Container,
  NavContainer
};
