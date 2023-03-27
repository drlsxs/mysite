import React from 'react';
import styled from "styled-components";
import Cover from "../../assets/site/Blog image.png";
const ProductItemWrapper = styled.div`
  /* Card */
  position: static;
  width: 33%;
  box-sizing: border-box;
  /* Neutral/gray 800 */
  background: rgb(14, 19, 48);
  /* Neutral/gray 500 */
  border: 1px solid rgb(40, 45, 69);

  border-radius:
          10px;

  /* 自动布局 */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 25px;


  /* Inside Auto Layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  margin: 0px 24px;
  .cover{
    img{
      height: 230px;
      margin-bottom: 19px;
    }
  }
  .project-name{
    /* H6 */
    position: static;
    width: 342px;
    /* Heading/H6 */
    color: rgb(246, 246, 247);
    font-family: Satoshi;
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    text-align: left;



    /* 自动布局 */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0px;


    /* Inside Auto Layout */
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin-bottom: 15px;
  }
  .project-desc{
    /* Paragraph/SM */
    position: static;
    width: 342px;
    height: 66px;


    /* Paragraph/SM */
    color: rgb(143, 155, 183);
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0%;
    text-align: left;



    /* 自动布局 */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0px;
    margin-bottom: 30px;
    position: relative;
    &::after{
      position: absolute;
      bottom: -15px;
      content: '';
      width: 100%;
      height: 1px;
      background: #242942;
    }
  }
  .project-info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .project-time{
      /* Paragraph/SM */
      color: rgb(143, 155, 183);
      font-family: Inter;
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      text-align: left;
    }
    .more{
      /* Button/RG */
      color: rgb(255, 255, 255);
      font-family: Satoshi;
      font-size: 16px;
      font-weight: 500;
      line-height: 16px;
      text-align: left;
      cursor: pointer;
    }
  }
  
`

const ProductItem = (props) => {
    return (
        <ProductItemWrapper>
            <div className="cover">
                <img src={Cover} alt=""/>
            </div>
            <div className="project-name">
                {props.name}
            </div>
            <div className="project-desc">
                {props.desc}
            </div>
            <div className="project-info">
                <div className="project-time">
                    {props.time}
                </div>
                <div className="more">
                    阅读更多
                </div>
            </div>
        </ProductItemWrapper>
    );
};

export default ProductItem;