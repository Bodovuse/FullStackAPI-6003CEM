import { Input } from 'antd';
import { PageHeader } from '@ant-design/pro-components';
import PostGrid from './postgrid';
import BlogGrid from './bloggrid';

const { Search } = Input;

function Home(props) {
  return (
    <>
      <div className="site-layout-content">
        <div style={{ padding: '2% 20%' }}>
          <Search placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={null}/>
          <PageHeader className="site-page-header"
            title="Web API Social Media Page"
            subTitle="Welcome to the site."/>
        </div>  
        <BlogGrid />
      </div>
    </>  
  );
}

export default Home;
