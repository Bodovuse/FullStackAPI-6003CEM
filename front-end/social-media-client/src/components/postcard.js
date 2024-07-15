import React from 'react';
import { Card, Avatar} from 'antd';
import PostIcon from './posticon';
import NavImage from './navimage';

const { Meta } = Card;

class PostCard extends React.Component {

  constructor(props) {
    super(props);
    this.toggleLike = this.toggleLike.bind(this);
    this.togglePinned = this.togglePinned.bind(this);
  }

  toggleLike(isSelected) {
    console.log(`toggle LIKE on post ${this.props.id}`);
    console.log(`new value ${isSelected}`);
    // code can be added here to update the API with new liked status
  }

  togglePinned(isSelected) {
    console.log(`toggle PINNED on post ${this.props.id}`);
    console.log(`new value ${isSelected}`);
    // code can be added here to update the API with new pinned status
  }

  render() {
    const postID = this.props.id;
    
    return (
      <Card
        style={{ width: 320 }}
        cover={<NavImage alt={`Post ${postID}`} src={this.props.imgURL} to={`/post/${postID}`} />}
        hoverable={true}
        actions={[
          <PostIcon type="like" count={this.props.likes} selected={this.props.liked}
              handleToggle={this.toggleLike}/>,
          <PostIcon type="message" count={this.props.comments} viewOnly={true}/>,
          <PostIcon type="pushpin" selected={this.props.pinned}
              handleToggle={this.togglePinned}/>
        ]}>
        
        <Meta title={this.props.title} description={this.props.summary} avatar = {<Avatar src={this.props.avatarURL}/>}/>
      </Card>
    );
  }
}

export default PostCard; 