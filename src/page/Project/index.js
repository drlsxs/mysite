/*
 * @Author: yangshilin
 * @Date: 2023-07-04 13:18:15
 * @LastEditors: yangshilin
 * @LastEditTime: 2023-07-06 12:21:11
 * @FilePath: src\page\Project\index.js
 * @Description: 请添加文件描述
 */
import React from 'react';
import styled from "styled-components";
import Introduce from "../../components/Introduce";
import ProduceItem from "../../components/ProduceItem";
import {Container} from "../../styles/media";
import gif from "../../assets/gif/dpt.gif";

const ProjectWrapper = styled.div`
  .container2 {
    max-width: 1600px;
    display: flex;
    justify-content: center;
  }

  .wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    > div {
      margin-bottom: 20px;
    }
  }
`;


const Project = () => {
  const productList = [
    {
      name: '星杓大数据平台',
      desc: '星杓大数据平台是星杓gis服务的基础地理产品，数据中心，服务中心，算法中心，是Gis应用系统的基础建设平台，包含的功能有数据资产管理（不同分类数据入库，空间数据转换，关连关系挂接），数据即服务（数据服务发布，地图专题图发布，同源格式互转），多维度数据分发（按属性条件过滤分发，按空间位置分发，手绘，上传，现有三种叠加区域分发），数据资产一张图（二三维专题呈现，二三维一体化叠加），算法工具库（路径规划，坐标转换，地理编码，字符编码转换，相交分析，裁切分析等高效空间分析服务），样式库（个性化定制图层样式，样式管理中心），接口管理（系统接口输出，接口文档）',
      time: '2021年10月',
      cover: gif
    },
    {
      name: '某风景区可视化管控系统',
      desc: '某风景区可视化管控系统某风景区可视化管控系统某风景区可视化管控系统某风景区可视化管控系统某风景区可视化管控系统',
      time: '2022年4月',
    },
    {
      name: '某市综合管理一体化总览平台',
      desc: '某市综合管理一体化总览平台某市综合管理一体化总览平台某市综合管理一体化总览平台某市综合管理一体化总览平台',
      time: '2022年7月',
    },
  ];
  return (
    <ProjectWrapper>
      <Introduce>
        {{
          header: <div>
            这是, <br/>
            我的最新项目
          </div>,
          content: <div>
            这里记录了我从2021年来开发的一些地理信息化系统和unity游戏引擎的应用，网页等
          </div>
        }}
      </Introduce>
      <Container className="container2">
        <div className="wrap project-wrap">
          {
            productList.map(product => {
              return <ProduceItem name={product.name} desc={product.desc} time={product.time} cover={product.cover}/>
            })
          }
        </div>
      </Container>
    </ProjectWrapper>
  );
};

export default Project;
