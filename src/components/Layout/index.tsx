import React, { useEffect, useState } from "react";
// import Product from "../Product";
import HeaderMenu from "../Menu";
import Input from "../Input";
import CardImagem from "../CardImagem";

import { Container, Wrapper, Content, Sider, Checkout } from "./styles";
import { Breadcrumb, Layout, Menu, MenuProps, Modal, Select } from "antd";
import { NotificationOutlined, UserOutlined } from "@ant-design/icons";
import { useAuth } from "../../hooks/carts";

// const { Sider } = Layout;

const items2: MenuProps["items"] = [UserOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,

      children: new Array(1).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);

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
          <Modal
            title="Basic Modal"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            {countCart.map((item: any) => {
              // setTotal(item.money);
              // setTotal((old: any) => [...old, item?.money]);
              return (
                <>
                  <Checkout>
                    <div>{item.title}</div>
                    <div>{item.money}</div>
                  </Checkout>
                </>
              );
            })}
            <div>R${total}</div>
            <div>R${total + 10}</div>
          </Modal>

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
