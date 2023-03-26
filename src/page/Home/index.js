import React from 'react';
import Header from "../../components/Header";
import Introduce from "../../components/Introduce";
import styled from "styled-components";
import {Container} from "../../styles/media";
import Herobg from "../../assets/site/Herobg.png";
import Terminal from "../../components/Terminal";

const BtnWrapper = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;
const Button = styled.button`
  width: 114px;
  height: 46px;

  border-radius:
          36px;

  /* 自动布局 */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* Inside Auto Layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 15px;
  color: white;
  cursor: pointer;
  font-family: Noto Sans SC;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  text-align: left;
  background-color: ${props => props.more ? 'transparent' : 'rgb(114, 20, 255)'};
  border:  ${props => props.more ? '1px solid rgb(40, 45, 69)' : 'none'};
`;
const HomePage1 = styled.div`
  height: calc(100vh - 83px);
  background: url(${Herobg}) no-repeat center/100% 100%;
`;

function Home() {
    return (
        <div>
            <Header />
            <HomePage1>
                <Introduce />
                <Container>
                    <BtnWrapper>
                        <Button>下载简历</Button>
                        <Button more>了解更多</Button>
                    </BtnWrapper>
                    <Terminal />
                </Container>
            </HomePage1>
        </div>
    );
}

export default Home;
