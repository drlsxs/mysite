import React from 'react';
import styled from "styled-components";
import BlogImages from "../../assets/site/Blog images.png";

const BlogWrapper = styled.div`
  height: 230px;
  box-sizing: border-box;
  width: 100%;



  /* 自动布局 */
  display: flex;
  border-radius: 5px;
  overflow: hidden;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;
  margin-bottom: 39px;
  background: rgb(14, 19, 48);
  border: 1px solid rgb(40, 45, 69);
  .blog-cover {
    img{
      width: 340px;
      height: 230px;
      object-fit: cover;
    }
  }
  .blog-detail {
    width: calc(100% - 340px);
    height: 100%;
    padding: 25px 37px;
    .blog-title{
      color: rgb(255, 255, 255);
      font-family: ZhenyanGB;
      font-size: 24px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0%;
      text-align: left;
      margin-bottom: 15px;
    }
    .blog-content{
      color: rgb(255, 255, 255);
      font-family: Noto Sans SC;
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0%;
      text-align: left;
      height: 100px;
    }
  }
`;

const BlogItem = (props) => {
    return (
        <BlogWrapper>
            <div className="blog-cover">
                <img src={BlogImages} alt=""/>
            </div>
            <div className="blog-detail">
                <div className="blog-title">
                    地理信息大数据平台
                </div>
                <div className="blog-content">
                    地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台地理信息大数据平台
                </div>
                <div className="blog-info">
                    <div className="bloginfoitem date">

                    </div>
                </div>
            </div>
        </BlogWrapper>
    );
};

export default BlogItem;