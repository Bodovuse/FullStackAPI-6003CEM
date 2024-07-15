import React from 'react';
import { Col, Row } from 'antd';
import PostCard from './postcard';
	
class BlogGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.setState({
      posts: require('../data/postsList.json')
    })
  }

  render() {
    if (!this.state.posts.length) {
      return <h3>Loading posts...</h3>
    }
    // the next line does the Array.map() operation on the posts
    // to create an array of React elements to be rendered
    const cardList = this.state.posts.map(post => {
      return (
        <div style={{padding:"10px"}} key={post.id}>
          <Col span={6}>
            <PostCard {...post} />  
             
          </Col>
        </div>
      )
    });
    return (
      <Row type="flex" justify="space-around">
        {cardList}
      </Row>
    );
}
}

export default BlogGrid;

