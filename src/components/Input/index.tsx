import { FaSistrix } from "react-icons/fa";

import { Container } from "./styles";

const Input = () => {
  return (
    <Container>
      <FaSistrix />

      <input type="text" placeholder="Buscar" />
    </Container>
  );
};

export default Input;
