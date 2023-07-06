/*
 * @Author: yangshilin
 * @Date: 2023-07-04 11:58:07
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-07-04 13:17:40
 * @FilePath: src\components\Terminal\index.js
 * @Description: 请添加文件描述
 */
import React from 'react';
import styled from "styled-components";
import avatar from "../../assets/site/Ellipse 6.png";
import gitRepo from "../../assets/svg/矢量 1.svg";
import Vector from "../../assets/svg/Vector.svg";
import Vector1 from "../../assets/svg/Vector (1).svg";
import Vector2 from "../../assets/svg/Vector (2).svg";
import GitHubCalendar from "github-calendar";
import {useEffect} from "react";

const TerminalWrapper = styled.div`
  width: 90%;
  height: 513px;
  box-sizing: border-box;
  /* Neutral/gray 800 */
  background: rgb(14, 19, 48);
  /* Neutral/gray 500 */
  border: 1px solid rgb(40, 45, 69);
  border-radius: 6px;
  margin: 0 auto;

  .terminal-head {
    height: 29px;
    box-sizing: border-box;

    /* Neutral/gray 500 */
    background: rgb(40, 45, 69);
    /* Neutral/gray 500 */
    border: 1px solid rgb(40, 45, 69);
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 16px;

    .terminal-point {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      /* Neutral/gray 800 */
      background: rgb(14, 19, 48);
      margin-right: 6px;
    }
  }

  .terminal-content {
    height: calc(100% - 29px);
    padding: 35px;
  }

  .top {
    display: flex;
    align-items: center;
    margin-bottom: 27px;

    .avatar {
      margin-right: 15px;
    }

    .info {
      .welcome {
        color: rgb(246, 246, 247);
        font-family: Source Han Serif CN;
        font-size: 20px;
        font-weight: 700;
        line-height: 20px;
        margin-bottom: 7px;
      }

      .detail {
        /* Paragraph/SM */
        color: rgb(143, 155, 183);
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        text-align: left;
      }
    }
  }

  .split {
    width: 100%;
    height: 2px;
    background: rgb(40, 45, 69);;
  }

  .infos {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 设置四个等宽的列 */
    grid-gap: 10px; /* 设置列与列之间的间距 */
    grid-column-gap: 10px;
    margin-top: 20px;

    .info-item {
      height: 110px;
      padding: 12px 0 10px 18px;
      /* Neutral/black 1000 */
      background: rgb(6, 11, 39);

      border-radius: 4px;

      .icon {
        img {
          width: 25px;
          height: 25px;
        }
      }

      .typename {
        color: rgb(246, 246, 247);
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      }

      .value {
        color: rgb(246, 246, 247);
        font-family: Noto Sans SC;
        font-size: 20px;
        font-weight: 500;
        line-height: 32px;
      }
    }
  }

  .calendar {
    border: none;
    margin-top: 30px;
  }

  rect.ContributionCalendar-day[data-level='1'] {
    fill: #637de8
  }

  rect.ContributionCalendar-day[data-level='2'] {
    fill: #3e5de0
  }

  rect.ContributionCalendar-day[data-level='3'] {
    fill: #244ce7
  }

  rect.ContributionCalendar-day[data-level='4'] {
    fill: #0f38ef
  }

  .width-full {
    color: white;
  }
`;


const Terminal = () => {
  useEffect(() => {
    GitHubCalendar(".calendar", "drlsxs", {
      responsive: true,
      tooltips: true,
      global_stats: false,
      cache: 1,
    }).then();
  });
  return (
    <TerminalWrapper>
      <div className="terminal-head">
        <div className="terminal-point terminal-point1"></div>
        <div className="terminal-point terminal-point2"></div>
        <div className="terminal-point terminal-point3"></div>
      </div>
      <div className="terminal-content">
        <div className="top">
          <div className="avatar">
            <img src={avatar} alt=""/>
          </div>
          <div className="info">
            <div className="welcome">
              感谢相遇！
            </div>
            <div className="detail">
              我觉得我现在距离梦想又近了一步！
            </div>
          </div>
        </div>
        <div className="split">
        </div>
        <div className="infos">
          <div className="info-item">
            <div className="icon">
              <img src={gitRepo} alt=""/>
            </div>
            <div className="typename">
              git仓库数量
            </div>
            <div className="value">
              50
            </div>
          </div>
          <div className="info-item">
            <div className="icon">
              <img src={Vector} alt=""/>
            </div>
            <div className="typename">
              代码贡献次数
            </div>
            <div className="value">
              2034
            </div>
          </div>
          <div className="info-item">
            <div className="icon">
              <img src={Vector1} alt=""/>
            </div>
            <div className="typename">
              项目数量
            </div>
            <div className="value">
              12
            </div>
          </div>
          <div className="info-item">
            <div className="icon">
              <img src={Vector2} alt=""/>
            </div>
            <div className="typename">
              文章数
            </div>
            <div className="value">
              234
            </div>
          </div>
        </div>
        <div className="calendar"></div>
      </div>
    </TerminalWrapper>
  );
};

export default Terminal;
