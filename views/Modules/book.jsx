const React = require('react');

class Book extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="ml-2 mt-5">
        <div className="row">
          <div className="col-2">
            <img src={this.props.book.image} />
          </div>
          <div className="col-8">
            <h3>{this.props.book.title}</h3>
            {this.props.book.author.firstname && <p> by {this.props.book.author.lastname}</p>}
            <p>Rating: {this.props.book.rating}</p>
            <p>{this.props.book.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Book;