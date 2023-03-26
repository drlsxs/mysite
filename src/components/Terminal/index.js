import React from 'react';
import styled from "styled-components";

const TerminalWrapper = styled.div`
  width: 808px;
  height: 513px;
  box-sizing: border-box;
  /* Neutral/gray 800 */
  background: rgb(14, 19, 48);
  /* Neutral/gray 500 */
  border: 1px solid rgb(40, 45, 69);
  border-radius: 6px;
  margin: 0 auto;

  .terminal-head {
    height: 29px;
    box-sizing: border-box;

    /* Neutral/gray 500 */
    background: rgb(40, 45, 69);
    /* Neutral/gray 500 */
    border: 1px solid rgb(40, 45, 69);
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 16px;
    .terminal-point{
      width: 10px;
      height: 10px;
      border-radius: 50%;
      /* Neutral/gray 800 */
      background: rgb(14, 19, 48);
      margin-right: 6px;
    }
  }
`;

const Terminal = () => {
    return (
        <TerminalWrapper>
            <div className="terminal-head">
                <div className="terminal-point terminal-point1"></div>
                <div className="terminal-point terminal-point2"></div>
                <div className="terminal-point terminal-point3"></div>
            </div>
        </TerminalWrapper>
    );
};

export default Terminal;