import React from 'react';
import styled from "styled-components";
import Introduce from "../../components/Introduce";
import {Container} from "../../styles/media";
import BlogItem from "../../components/BlogItem";
import {useState} from "react";
import {useEffect} from "react";
import {getBlog} from "../../api/blog";
import {DateUtils} from "../../utils";
const BlogWrapper = styled.div`
`;

const Blog = () => {
    let [blogList,setBlogList] = useState([]);


    useEffect(() => {
        async function getBlogs() {
            let params = {
                pageNum: 1,
                pageSize: 10,
            };
            let response = await getBlog(params);
            if (response.ok) {
                setBlogList(response.data);
            }
        }

        getBlogs().then();

    }, []);

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
                            return <BlogItem ref={childRef} onClickImg={()=>handClick(blog)} key={blog.id}  title={blog.filename} content={blog.content} time={DateUtils().Date2Str(blog.mtime)} category={blog.ctime} tags={blog.tags} />
                        })
                    }
                </div>
            </Container>


        </BlogWrapper>
    );
};

export default Blog;