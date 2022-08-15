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
      id: 1,
      title: "Computador",
      money: 30,
      url: "http://heitec.com.br/wp-content/uploads/2016/09/HPp62005UK2._V165305585_-1170x570.jpg",
    },
    {
      id: 2,
      title: "Livros",
      money: 10,
      url: "https://portalvidalivre.com/uploads/content/image/88478/Design_sem_nome__1___1_.jpg",
    },
    {
      id: 3,
      title: "Computador",
      money: 15,
      url: "http://heitec.com.br/wp-content/uploads/2016/09/HPp62005UK2._V165305585_-1170x570.jpg",
    },

    {
      id: 4,
      title: "Planta",
      money: 80,
      url: "https://st4.depositphotos.com/2714617/23820/i/1600/depositphotos_238204304-stock-photo-woman-vegetable-garden-laptop-computer.jpg",
    },
  ]);
  return (
    <Container>
      {data.map((item) => (
        <div className="card">
          <img alt="imagem" src={item.url} />
          <h2>{item.title}</h2>
          <div className="card-btn">
            <p>R${item.money}</p>
            <button
              onClick={() => {
                let object = {
                  title: item.title,
                  money: item.money,
                  url: item.url,
                };
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
