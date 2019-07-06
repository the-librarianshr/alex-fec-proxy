const React = require('react');

class Author extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div>{this.props.author.firstname + ' ' + this.props.author.lastname}</div>
        <img src={this.props.author.avatar} />
        <div>{this.props.author.bio}</div>
        <h6>Followers: {this.props.author.followers}</h6>
      </div>
    );
  }
}

module.exports = Author;