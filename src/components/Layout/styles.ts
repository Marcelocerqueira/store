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
    border: 1px solid #ccc;
    width: 200px;
    height: 200px;
    border-radius: 6px;
    background: #ccc;

    button {
      width: 100%;
      background: #00bfff;
      color: white;
      border-radius: 5px;
      font-size: 15px;
      display: flex;
      justify-content: center;
    }
  }

  .chekout-title {
    display: flex;
    justify-content: space-around;
    gap: 100px;
    border: 1px solid #000;
  }
`;

export const Checkout = styled.div`
  width: 100%;
  box-shadow: 0 2px 10px gray;
  border-radius: 10px;
  padding: 14px;
  margin-top: 20px;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
  }

  .checkout-modal {
    display: flex;
    justify-content: space-around;

    gap: 200px;
    /* border: 1px solid #000; */

    .btn {
      /* width: 30px; */
      /*  */
      background: white;
      color: #00bfff;
      /* border-radius: 5px; */
      font-size: 35px;
      gap: 10px;
      align-items: center;
      display: flex;
      justify-content: center;
      /* border: 1px solid #ccc; */
      /* border: none; */

      input {
        height: 30px;
        width: 30px;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
    }
  }
`;
