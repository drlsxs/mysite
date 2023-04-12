import React from 'react';
import Introduce from "../../components/Introduce";
import styled from "styled-components";
import {Container} from "../../styles/media";
import Herobg from "../../assets/site/Herobg.png";
import Terminal from "../../components/Terminal";
import {getRes, getResume} from "../../api/resume";
import {json} from "react-router-dom";

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
   async  function handleClick() {
        var pass = prompt("请输入网站密码");
        if (pass == "ysl123") {
            let resume = await getResume();
            const url = window.URL.createObjectURL(resume); // 创建 URL 对象
            const link = document.createElement('a');
            link.href = url;
            link.download = '简历.pdf'; // 设置下载文件名
            link.click();
        } else {
            alert("密码错误");
        }
    }

    return (
        <HomePage1>
            <Introduce>
                {{
                    header:  <div>
                        欢迎，<br />
                        你好我的名字是杨世林
                    </div>,
                    content: <div>
                        我是一名全栈开发人员，拥有五年互联网开发经验，工作主要参与开发一些地理信息相关的数字信息<br /> 化系统，和unity游戏引擎的使用。
                    </div>
                }}
            </Introduce>
            <Container>
                <BtnWrapper>
                    <Button onClick={handleClick}>下载简历</Button>
                    <Button more>了解更多</Button>
                </BtnWrapper>
                <Terminal />
            </Container>
        </HomePage1>
    );
}

export default Home;
