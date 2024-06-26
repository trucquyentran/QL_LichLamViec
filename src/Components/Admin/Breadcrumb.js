import React from 'react';
import { Breadcrumb} from 'antd';


function BreadcrumbComponent ()
{

  return (
          <Breadcrumb
            style={ {
              margin: '16px 0',
            } }
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
          </Breadcrumb>
          
  );
};
export default BreadcrumbComponent;