import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import {Layout, Menu, theme } from 'antd';


function SiderComponent ()
{
  const {Sider} = Layout;
  const items1 = [ '1', '2', '3' ].map( ( key ) => ( {
    key,
    label: `nav ${ key }`,
  } ) );
  const items2 = [ UserOutlined, LaptopOutlined, NotificationOutlined ].map( ( icon, index ) =>
  {
    const key = String( index + 1 );
    return {
      key: `sub${ key }`,
      icon: React.createElement( icon ),
      label: `subnav ${ key }`,
      children: new Array( 4 ).fill( null ).map( ( _, j ) =>
      {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${ subKey }`,
        };
      } ),
    };
  } );
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    
        <Sider
          width={ 200 }
          style={ {
            background: colorBgContainer,
          } }
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={ [ '1' ] }
            defaultOpenKeys={ [ 'sub1' ] }
            style={ {
              height: '100%',
              borderRight: 0,
            } }
            items={ items2 }
          />
        </Sider>
        
  );
};
export default SiderComponent;