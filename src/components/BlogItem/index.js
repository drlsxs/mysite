import React from 'react';
import styled from "styled-components";
import BlogImages from "../../assets/site/Blog images.png";
import DateIcon from "../../assets/icon/path.svg";
import CateIcon from "../../assets/icon/path (1).svg";
import TagIcon from "../../assets/icon/path (2).svg";

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
    img {
      width: 340px;
      height: 230px;
      object-fit: cover;
      cursor: pointer;
    }
  }

  .blog-detail {
    width: calc(100% - 340px);
    height: 100%;
    padding: 25px 37px;

    .blog-title {
      color: rgb(255, 255, 255);
      font-family: ZhenyanGB;
      font-size: 24px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0%;
      text-align: left;
      margin-bottom: 15px;
      cursor: pointer;
    }

    .blog-content {
      color: rgb(143, 155, 183);
      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      font-weight: 400;
      line-height: 22px;
      text-align: left;
      height: 122px;
      cursor: pointer;
    }

    .blog-info {
      display: flex;
      align-items: center;

      .bloginfoitem {
        margin-right: 40px;
        display: flex;
        align-items: center;
        color:#8f9bb7;
        img {
          margin-right: 12px;
          width: 18px;
        }
        span {
          font-family: Noto Sans SC;
          font-size: 16px;
          font-weight: 400;
        }
        &.tag{
          span{
            margin-right: 10px;
          }
        }
      }
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
                    {props.title}
                </div>
                <div className="blog-content">
                    {props.content}
                </div>
                <div className="blog-info">
                    <div className="bloginfoitem date">
                        <img src={DateIcon} alt=""/>
                        <span>{props.time}</span>
                    </div>
                    <div className="bloginfoitem cate">
                        <img src={CateIcon} alt=""/>
                        <span>{props.category}</span>
                    </div>
                    <div className="bloginfoitem tag">
                        <img src={TagIcon} alt=""/>
                        {
                            props.tags.map(tag=> <span>{tag}</span> )
                        }
                    </div>
                </div>
            </div>
        </BlogWrapper>
    );
};

export default BlogItem;