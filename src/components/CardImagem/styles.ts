import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  .card {
    box-shadow: 0 2px 10px gray;
    border-radius: 10px;
    padding: 10px;

    /* box-shadow: 0 0.1px 1em; */
    /* overflow: hidden; */
    /* background: #fffaf0; */
    /* border: 6px solid #00ff00; */
  }

  h2 {
    font-size: 28px;
    font-weight: 600;
  }

  .card-btn {
    width: 100%;
    display: flex;
    align-items: center;
    /* border: 2px solid #000; */
    justify-content: space-between;

    p {
      font-size: 30px;
      margin-top: 10px;
      color: #00a650;
      font-weight: 600;
    }

    button {
      width: 35px;
      background: #00bfff;
      color: white;
      border-radius: 5px;
      font-size: 30px;
      display: flex;
      justify-content: center;
    }
  }
`;
