import React, { useState } from "react";

import { Container } from "./styles";

import computImage from "../../assets/comput.jpeg";
import { useAuth } from "../../hooks/carts";

interface Props {
  setIsModalVisible: any;
}

const CardImagem: React.FC<Props> = (props) => {
  const { setCountCart } = useAuth();
  const [newObject, setWewObject] = useState<any>([]);

  const [data, setData] = useState([
    {
      title: "TV",
      money: 30,
    },
    {
      title: "Cama",
      money: 10,
    },
    {
      title: "SOM",
      money: 15,
    },

    {
      title: "Mesa",
      money: 80,
    },
  ]);
  return (
    <Container>
      {data.map((item) => (
        <div className="card">
          <img alt="comput" src={computImage} />

          <h2>{item.title}</h2>

          <div className="card-btn">
            <p>R${item.money}</p>
            <button
              onClick={() => {
                let object = {
                  title: item.title,
                  money: item.money,
                };
                // setWewObject((old: any) => [...old, object]);
                setCountCart((old: any) => [...old, object]);
              }}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default CardImagem;
