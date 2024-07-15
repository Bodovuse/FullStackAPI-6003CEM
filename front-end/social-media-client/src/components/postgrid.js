import { Card, Row, Col ,Avatar} from 'antd';
import { Link, Routes, Route, Router} from "react-router-dom";
import Post from './post';
const { Meta } = Card;

const grid = (
  <>
  
  <Row type="flex" justify="space-around" gutter={16}>
      <Col span={6}>
        <Link to='/post/1'>
            <Card hoverable bordered={false} style={{ width: 400 }} cover={<img alt="example" src="https://www.utilitydesign.co.uk/wp/wp-content/uploads/2017/06/HAC_photo_by_Iwan_Baan_2.jpg"/>}>
                <Meta 
                avatar={<Avatar src="https://gameacademy.co/static/img/default_avatar.png"/>}
                title="default card" description="blabla.com"/>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content 123</p>
            </Card>
        </Link>
      </Col>

      <Col span={6}>
        <Link to='/post/2'>
            <Card hoverable bordered={false} style={{ width: 400 }} cover={<img alt="example" src="https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-eye-opening-iconic-buildings-of-modern-architecture.jpg"/>}>
                <Meta 
                avatar={<Avatar src="https://gameacademy.co/static/img/default_avatar.png"/>}
                title="default card" description="blabla.com"/>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content 123</p>
            </Card>
        </Link>
      </Col>
      <Col span={6}>
        <Card hoverable bordered={false} style={{ width: 400 }} cover={<img alt="example" src="https://i0.wp.com/boingboing.net/wp-content/uploads/2020/12/brazil-house.jpg?fit=1500%2C1000&ssl=1"/>}>
          <Meta 
          avatar={<Avatar src="https://gameacademy.co/static/img/default_avatar.png"/>}
          title="default card" description="blabla.com"/>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content 123</p>
        </Card>
      </Col>
    </Row>

    <Row type="flex" justify="space-around" gutter={16}>
      <Col span={6}>
        <Card hoverable bordered={false} style={{ width: 400 }} cover={<img alt="example" src="https://www.utilitydesign.co.uk/wp/wp-content/uploads/2017/06/HAC_photo_by_Iwan_Baan_2.jpg"/>}>
          <Meta 
          avatar={<Avatar src="https://gameacademy.co/static/img/default_avatar.png"/>}
          title="default card" description="blabla.com"/>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content 123</p>
        </Card>
      </Col>
      <Col span={6}>
        <Card hoverable bordered={false} style={{ width: 400 }} cover={<img alt="example" src="https://www.arch2o.com/wp-content/uploads/2022/10/Arch2O-10-of-the-most-eye-opening-iconic-buildings-of-modern-architecture.jpg"/>}>
          <Meta 
          avatar={<Avatar src="https://gameacademy.co/static/img/default_avatar.png"/>}
          title="default card" description="blabla.com"/>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content 123</p>
        </Card>
      </Col>
      <Col span={6}>
        <Card hoverable bordered={false} style={{ width: 400 }} cover={<img alt="example" src="https://i0.wp.com/boingboing.net/wp-content/uploads/2020/12/brazil-house.jpg?fit=1500%2C1000&ssl=1"/>}>
          <Meta 
          avatar={<Avatar src="https://gameacademy.co/static/img/default_avatar.png"/>}
          title="default card" description="blabla.com"/>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content 123</p>
        </Card>
      </Col>
    </Row> 

    
  </>
);

function PostGrid(props) {
  return grid;
}

export default PostGrid;
