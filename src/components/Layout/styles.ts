import styled from "styled-components";
import { Modal } from "antd";

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
  border: 1px solid red;
`;

export const Sider = styled.div`
  background: #eee;
  padding: 20px;
  border: 1px solid #ccc;

  input {
    width: 30vh;
    height: 3vw;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: white;
    padding: 3px;
  }

  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    width: 300px;
    height: 40px;
    border-radius: 4px;
    padding: 20px;
  }

  select {
    width: 100%;
    height: 40px;
    background: white;
    border-radius: 5px;
    border-radius: 1px solid #ccc;
    margin-bottom: 12px;
  }
`;
export const ModalContainer = styled(Modal)`
  .modal-resumo {
    border: 1px solid blue;
  }

  .chekout-title {
    display: flex;
    gap: 100px;
    border: 1px solid #000;
  }
`;

export const Checkout = styled.div`
  width: 100%;
  border: 1px solid red;

  .checkout-modal {
    display: flex;
    gap: 200px;
    border: 1px solid #000;
  }
`;
