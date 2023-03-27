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

function Introduce(props) {
    const {header,content} = props.children;
    return (
        <Container>
            <IntroduceWrapper>
                {header}
            </IntroduceWrapper>
            <Detail>
                {content}
            </Detail>
        </Container>
    );
};

export default Introduce;