const React = require('react');
const Book = require('./Modules/book.jsx');
const Author = require('./Modules/author.jsx');

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Book book={this.props.book} />
        <Author author={this.props.book.author} />
      </div>
    );
  }
}

module.exports = App;