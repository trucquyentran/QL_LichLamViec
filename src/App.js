import logo from './logo.svg';
import './App.css';
import ListUser2 from './Components/Admin/demo';
import SiderComponent from './Components/Admin/sider';
import FooterComponent from './Components/Admin/Footer';
import HeaderComponent from './Components/Admin/Header';
import { Layout } from 'antd';
import BreadcrumbComponent from './Components/Admin/Breadcrumb';

function App ()
{
  return (
    <div >
      <Layout>
        <HeaderComponent />
        <Layout>
          <SiderComponent />
          <Layout style={ {
            padding: '0 24px 24px',
          } }>
            <BreadcrumbComponent />
           <ListUser2/>
          </Layout>
        </Layout>
        <FooterComponent />
      </Layout>
      {/* <ListUser2/> */}
    </div>
  );
}

export default App;
