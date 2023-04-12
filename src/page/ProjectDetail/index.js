import React from 'react';
import styled from "styled-components";
import {Container} from "../../styles/media";
import BgShape from "../../assets/site/BGshape.png";


const ProHead = styled.div`
  box-sizing: border-box;

  /* Neutral/gray 800 */
  background: rgb(14, 19, 48);
  /* Neutral/gray 500 */
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  
  
  
  padding:  100px 351px;
  position: relative;
  
  
  
  
  .bg{
    background: url(${BgShape}) no-repeat center/163% 110%;
    width: 100%;
    height: 600px;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
  }
  .title {
    color: rgb(255, 255, 255);
    font-family: Noto Sans SC;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 0px;
    text-align: left;
    margin-bottom: 20px;
    z-index: 100;
  }
  .orientation{
    color: rgb(255, 255, 255);
    font-family: zcoolqingkehuangyouti;
    font-size: 23px;
    font-weight: 400;
    line-height: 39px;
    letter-spacing: 0px;
    text-align: left;
    z-index: 100;

  }
`;

const ProDetailWrapper = styled.div`
    color: white;
  margin-top: 40px;
  z-index: 102;
  position: relative;
  .info-title{
    background: linear-gradient(180.00deg, rgba(255,255,255,1.00),rgba(255,255,255,0.00));
    -webkit-background-clip:
            text;
    -webkit-text-fill-color:
            transparent;
    background-clip:
            text;
    text-fill-color:
            transparent;
    font-family: Noto Sans SC;
    font-size: 33px;
    font-weight: 700;
    line-height: 49px;
    letter-spacing: 0px;
    text-align: left;
    margin: 15px 0;
  }
  .info-detail{
    color: rgb(255, 255, 255);
    font-family: Noto Sans SC;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0px;
    text-align: left;
  }
`;

const ProDetail = () => {
    return (
        <div>
            <ProHead>
                <div className="title">
                    地理信息大数据平台
                </div>
                <div className="orientation">
                    为地理信息可视化提供基础服务
                </div>
                <div className="bg">

                </div>
            </ProHead>
            <Container>
                <ProDetailWrapper>
                    <div className="info">
                        <div className="info-item">
                            <div className="info-title">
                                项目介绍
                            </div>
                            <div className="project-desc info-detail">
                                地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-title">
                                技术栈
                            </div>
                            <div className="project-desc info-detail">
                                vue,cesium,geoserver,postgis,java
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-title">
                                在线地址
                            </div>
                            <div className="project-desc info-detail">
                                https://gitee.com/dotnetchina/SmartSQL
                            </div>
                        </div>
                    </div>
                </ProDetailWrapper>
            </Container>
        </div>
    );
};

export default ProDetail;