import React from 'react';
import Menu from 'antd/es/menu';

const LeftMenu = (props) => {
    return (
        <Menu style={{width:"200px"}} mode="inline" onSelect={props.handleChange}>
          <Menu.SubMenu
          key="sub4"
          title={
            <span>
              <span>D. Discretas</span>
            </span>
            }
          >
          <Menu.Item key="binomial">Binomial</Menu.Item>
          <Menu.Item key="bn1">B. Negativa (v1)</Menu.Item>
          <Menu.Item key="bn2">B. Negativa (v2)</Menu.Item>
          <Menu.Item key="geometrica">Geométrica</Menu.Item>
          <Menu.Item key="pascal">Pascal</Menu.Item>
          <Menu.Item key="hipergeometrica">Hipergeométrica</Menu.Item>
          <Menu.Item key="Poisson">Poisson</Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu
          key="sub4"
          title={
            <span>
              <span>D. Continuas</span>
            </span>
            }
          >
          <Menu.Item key="uniforme">Uniforme</Menu.Item>
          <Menu.Item key="normal">Normal</Menu.Item>
          <Menu.Item key="exponencial">Exponencial</Menu.Item>
          <Menu.Item key="erlang">Erlang</Menu.Item>
          <Menu.Item key="gamma">Gamma</Menu.Item>
          <Menu.Item key="beta">Beta</Menu.Item>
          </Menu.SubMenu>

        </Menu>
    );
}

export default LeftMenu