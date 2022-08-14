import styled from "styled-components";

export const Container = styled.div`
  width: 113%;
  height: 60px;
  margin-top: 3px;
  background: #00bfff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .cart-item {
    width: 16px;
    height: 17px;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    border-radius: 50%;
    /* position: relative; */
    /* padding: 1px; */
    background: yellow;
    /* font-size: 10px; */
    position: absolute;
    top: 4px;
    /* z-index: 10px; */
    right: 55px;
  }

  svg {
    font-size: 29px;
    color: white;
    margin-right: 60px;
  }

  h1 {
    padding: 7px;
    margin-left: 52px;
    font-size: 25px;
    color: white;
  }
`;
