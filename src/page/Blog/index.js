import React from 'react';
import styled from "styled-components";
import Introduce from "../../components/Introduce";
import {Container} from "../../styles/media";
import BlogItem from "../../components/BlogItem";
import {useState} from "react";
import blogItem from "../../components/BlogItem";

const BlogWrapper = styled.div`
`;

const Blog = () => {
    let [blogList,setBlogList] = useState([
        {
            name: '地理信息大数据平台',
            desc: '地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台',
            time: '2021-12-12',
            cover: 'https://knomed.oss-cn-hangzhou.aliyuncs.com/images/20230406235022.png',
            category: 'cesium',
            tags: ['cesium', 'gis'],
        },
        {
            name: '地理信息大数据平台',
            desc: '地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台',
            time: '2022-5-4',
            cover: 'https://knomed.oss-cn-hangzhou.aliyuncs.com/images/20230406235022.png',
            category: 'cesium',
            tags: ['cesium', 'gis', 'vue'],
        },
        {
            name: '地理信息大数据平台',
            desc: '地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台',
            time: '2022-3-1',
            cover: 'https://knomed.oss-cn-hangzhou.aliyuncs.com/images/20230406235022.png',
            category: 'cesium',
            tags: ['cesium', 'gis'],
        },
    ]);

    function handClick(blog) {
        console.log('父组件')
        // childRef.current.handleClick();  父子组件相同事件互相调用无穷循环了
    }

    const childRef = React.createRef();

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
                            return <BlogItem ref={childRef} onClickImg={()=>handClick(blog)} key={blog.time}   title={blog.name} content={blog.desc} time={blog.time} category={blog.category} tags={blog.tags} />
                        })
                    }
                </div>
            </Container>
        </BlogWrapper>
    );
};

export default Blog;