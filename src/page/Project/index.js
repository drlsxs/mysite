import React from 'react';
import styled from "styled-components";
import Introduce from "../../components/Introduce";
import ProduceItem from "../../components/ProduceItem";
import {Container} from "../../styles/media";

const ProjectWrapper = styled.div`
    .wrap{
      display: flex;
    }
`;

const Project = () => {
    const productList = [
        {
            name: '地理信息大数据平台',
            desc: '地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台',
            time: '2021年10月',
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
            <Container>
               <div className="wrap">
                   {
                       productList.map(product => {
                           return <ProduceItem name={product.name} desc={product.desc} time={product.time}/>
                       })
                   }
               </div>
            </Container>
        </ProjectWrapper>
    );
};

export default Project;