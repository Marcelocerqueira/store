import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  .card {
    box-shadow: 0 2px 10px gray;
    border-radius: 10px;
    padding: 10px;
    img {
      width: 300px;
      height: 300px;
    }
  }

  h2 {
    font-size: 17px;
    font-weight: 600;
  }

  .card-btn {
    width: 100%;
    display: flex;
    align-items: center;
    /* border: 2px solid #000; */
    justify-content: space-between;

    p {
      font-size: 22px;
      margin-top: 10px;
      color: #00a650;
      font-weight: 600;
    }

    button {
      width: 35px;
      background: #00bfff;
      color: white;
      border-radius: 5px;
      font-size: 15px;
      display: flex;
      justify-content: center;
    }
  }
`;
