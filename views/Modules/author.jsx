const React = require('react');
import styled from 'styled-components';

const StyledDiv = styled.div`
  font-family: sans-serif;
  font-size: 12px;
  display: inline-block;
  line-height 18px;
  text-align: left;
  color: #181818;

  .author-spotlight {
    width: 300px;
  }

  .author-header {
    display: inline-block;
    margin-bottom: 12px;
  }

  .author-info {
    float: left;
    display: inline-block;
    vertical-align: bottom;
    margin-top: 39px;
  }

  .avatar {
    float: left;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    margin-right: 8px;
  }

  .name {
    font-size: 16px;
    font-family: serif;
    font-weight: bold;
  }

  .followers {
    font-size: 9px;
    color: #999999;
  }
`;

class Author extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <StyledDiv className="author-spotlight">
        <div className="author-header">
          <img className="avatar" src={this.props.author.avatar} />
          <div className="author-info">
            <div className="name">{this.props.author.firstname + ' ' + this.props.author.lastname}</div>
            <div className="followers">Followers: {this.props.author.followers}</div>
          </div>
        </div>
        <div>{this.props.author.bio}</div>
      </StyledDiv>
    );
  }
}

module.exports = Author;