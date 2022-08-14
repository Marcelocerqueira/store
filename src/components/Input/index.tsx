import React from "react";
import { useState } from "react";

import { FaSistrix } from "react-icons/fa";

import { Container } from "./styles";

const Input = () => {
  const [inputText, setInputText] = useState("");

  return (
    <Container>
      <FaSistrix />

      <input
        type="text"
        placeholder="Buscar"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </Container>
  );
};

export default Input;
