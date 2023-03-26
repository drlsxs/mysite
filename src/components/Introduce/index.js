import React from 'react';
import styled from "styled-components";
import {Container} from "../../styles/media";
const IntroduceWrapper = styled.div`
  color: rgb(143, 155, 183);
  font-family: PangMenZhengDao;
  font-size: 48px;
  font-weight: 400;
  line-height: 50px;
  letter-spacing: 0;
  text-align: center;


  /* 自动布局 */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 70px 0px 0px 0px;
`;
const Detail = styled.div`
  color: rgb(143, 155, 183);
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  text-align: center;
  /* 自动布局 */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
  margin-bottom: 30px;
`;

const Introduce = () => {
    return (
        <Container>
            <IntroduceWrapper>
                <div className="welcome">
                    欢迎，<br />
                    你好我的名字是杨世林
                </div>
            </IntroduceWrapper>
            <Detail>
                我是一名全栈开发人员，拥有五年互联网开发经验，工作主要参与开发一些地理信息相关的数字信息<br /> 化系统，和unity游戏引擎的使用。
            </Detail>
        </Container>
    );
};

export default Introduce;