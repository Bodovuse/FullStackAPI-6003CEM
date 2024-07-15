
import Nav from './components/nav';

import { Layout} from 'antd';
import './App.css';


const {Header, Content, Footer} =Layout;


function App() {
  return (
  <Layout className='Layout'>
    <Header>
      <Nav/>
    </Header>
    <Content>

    </Content>
      
  </Layout>

  );
}

export default App;
