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
      url: "https://a-static.mlcdn.com.br/800x560/smart-tv-32-hd-led-tcl-s615-va-60hz-android-wi-fi-e-bluetooth-google-assistente-2-hdmi/magazineluiza/230531900/a74f79c5e2ff63182a417c62f521a25a.jpg",
    },
    {
      title: "Cama",
      money: 10,
      url: "https://a-static.mlcdn.com.br/800x560/smart-tv-32-hd-led-tcl-s615-va-60hz-android-wi-fi-e-bluetooth-google-assistente-2-hdmi/magazineluiza/230531900/a74f79c5e2ff63182a417c62f521a25a.jpg",
    },
    {
      title: "SOM",
      money: 15,
      url: "https://www.amazon.com.br/Computador-Desktop-Completo-EasyPC-Standard/dp/B089BYNGPW",
    },

    {
      title: "Mesa",
      money: 80,
      url: "https://a-static.mlcdn.com.br/800x560/smart-tv-32-hd-led-tcl-s615-va-60hz-android-wi-fi-e-bluetooth-google-assistente-2-hdmi/magazineluiza/230531900/a74f79c5e2ff63182a417c62f521a25a.jpg",
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
