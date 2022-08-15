import React, { useEffect, useState } from "react";
import HeaderMenu from "../Menu";
import Input from "../Input";
import CardImagem from "../CardImagem";

import {
  Container,
  Wrapper,
  Content,
  Sider,
  Checkout,
  ModalContainer,
} from "./styles";

import { useAuth } from "../../hooks/carts";

// const { Sider } = Layout;

const LayoutCompeent: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [total, setTotal] = useState<any>(0);
  const { countCart } = useAuth();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const totalCheckout = () => {
    let total: any = 0;
    countCart.map((item: any) => {
      total += item.money;
    });
    setTotal(total);
    return total;
  };

  useEffect(() => {
    totalCheckout();
  }, [countCart]);
  return (
    <Container>
      <Wrapper>
        <HeaderMenu setIsModalVisible={setIsModalVisible} />

        {/* <Product /> */}

        <Content>
          <ModalContainer
            title="CARRINHO"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            width={1200}
          >
            <div
              style={{
                // border: "1px solid red",
                display: "flex",
              }}
            >
              <div>
                <div className="chekout-title">
                  <h2>imagem</h2>
                  <h2>Nome do produto</h2>
                  <h2>Valor</h2>
                  <h2>Quantidade</h2>
                </div>

                {countCart.map((item: any) => {
                  return (
                    <>
                      <Checkout key={item.id}>
                        <div className="checkout-modal">
                          <div>
                            <img src={item.url} alt="" />
                          </div>
                          <div>{item.title}</div>
                          <div>{item.money}</div>
                          <div className="btn">
                            - <input type="text" />+
                          </div>
                        </div>
                      </Checkout>
                    </>
                  );
                })}
              </div>
              <div className="modal-resumo">
                <div>
                  <h1>Resumo</h1>
                </div>
                <div className="produto">
                  <h3>Produto</h3> R${total}
                </div>
                <div className="fret">
                  <h3>Frete</h3> R${10}
                </div>
                <div>Descontos</div>
                <hr />
                <div className="total">
                  <h1>Total</h1> R${total + 10}
                </div>
                <button>Finaliza Compra</button>
              </div>
            </div>
          </ModalContainer>

          <Sider>
            <div>
              <h1>Filtrar</h1>
              <h2>
                Preço <hr /> de
              </h2>
            </div>
            <input type="text" value="R$ 0,00" />
            <div>
              <h2>Até</h2>
            </div>
            <input type="text" value="R$ 0,00" />
            <div>
              <h1>Ordenar</h1>
              <h4>Preço</h4>
            </div>

            <select>
              <option value="item1">Menor preço </option>
              <option value="item1">Maior preço </option>
            </select>

            <div>
              <h4>Data de inclusão</h4>
            </div>

            <select>
              <option value="item1">Mais recente</option>
              <option value="item1">Menos recente </option>
            </select>
          </Sider>
          <div
            style={{
              padding: 10,
            }}
          >
            <Input />

            <CardImagem setIsModalVisible={setIsModalVisible} />
          </div>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default LayoutCompeent;
