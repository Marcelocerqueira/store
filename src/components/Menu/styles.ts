import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 3px;
  background: #00bfff;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .cart-item {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: relative;
    padding: 1px;
    background: yellow;
    font-size: large;
  }

  svg {
    font-size: 29px;
    color: white;
  }

  h1 {
    padding: 7px;
    margin-left: 52px;
    font-size: 25px;
    color: white;
  }
`;
