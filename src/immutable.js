const { Map } = require('immutable');

let book = Map({ title: 'Harry Potter' });

function publish(book) {
  return book.set("isPublished", true);
}

book = publish(book);

console.log(book.toJS());