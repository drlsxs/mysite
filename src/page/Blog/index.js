import React from 'react';
import styled from "styled-components";
import Introduce from "../../components/Introduce";
import {Container} from "../../styles/media";
import BlogItem from "../../components/BlogItem";
const BlogWrapper = styled.div`
`;

const Blog = () => {
    const blogList = [
        {
            name: '地理信息大数据平台',
            desc: '地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台',
            time: '2021年10月',
            cover: 'https://knomed.oss-cn-hangzhou.aliyuncs.com/images/20230406235022.png',
            category: 'cesium',
            tags: ['cesium','gis'],
        },
        {
            name: '地理信息大数据平台',
            desc: '地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台',
            time: '2021年10月',
            cover: 'https://knomed.oss-cn-hangzhou.aliyuncs.com/images/20230406235022.png',
            category: 'cesium',
            tags: ['cesium','gis'],
        },
        {
            name: '地理信息大数据平台',
            desc: '地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台',
            time: '2021年10月',
            cover: 'https://knomed.oss-cn-hangzhou.aliyuncs.com/images/20230406235022.png',
            category: 'cesium',
            tags: ['cesium','gis'],
        },
    ];
    return (
        <BlogWrapper>
            <Introduce>
                {{
                    header: <div>
                        这是, <br/>
                        我的最新博客
                    </div>,
                    content: <div>
                        这里记录了我从2019年自己记录的一些文章，知识，教程，学习心得等
                    </div>
                }}
            </Introduce>
            <Container>
                <div className="wrap">
                    {
                        blogList.map(blog => {
                            return <BlogItem />
                        })
                    }
                </div>
            </Container>
        </BlogWrapper>
    );
};

export default Blog;