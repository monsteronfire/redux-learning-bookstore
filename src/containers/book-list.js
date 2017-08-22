import React from 'react';

class BookList extends React.Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className='list-group-item'>
          {book.title}
        <li>
      );
    });
  }

  render() {
    return (
      <ul className='book-list list-group col-sm-4'>
        {this.renderList}
      </ul>
    );
  }
}

export default BookList;
