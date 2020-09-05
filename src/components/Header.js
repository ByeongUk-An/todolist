import React from "react";
import styled from "styled-components";

const HeaderWrap = styled.header`
  width: 100%;
  height: 100px;
  background: pink;
  & > h2 {
    text-align: center;
    line-height: 100px;
    font-size: 36px;
  }
`;

function Header() {
  return (
    <HeaderWrap>
      <h2>TODO LIST</h2>
    </HeaderWrap>
  );
}

export default Header;
