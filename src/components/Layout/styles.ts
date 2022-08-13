import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 16px;
`;

export const Content = styled.div`
  display: flex;
`;

export const Sider = styled.div`
  background: #eee;
  padding: 20px;
  border: 1px solid #ccc;
  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    width: 400px;
    height: 40px;
  }
`;

export const Checkout = styled.div`
  border: 1px solid red;
`;
