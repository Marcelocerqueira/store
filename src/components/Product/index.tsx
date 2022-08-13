import React from "react";

// import computImage from "../../assets/comput.jpeg";
import CardImagem from "../CardImagem";

import { Container } from "./styles";

const Product = () => {
  return (
    <>
      <Container>
        <h1>Produtos</h1>
        <CardImagem />
        <CardImagem />
      </Container>
    </>
  );
};

export default Product;
