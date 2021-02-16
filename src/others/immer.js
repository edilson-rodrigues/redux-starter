const { produce } = require('immer');

let book = { title: 'Harry Potter' };

function publish(book) {
  return produce(book, draftBook => {
    draftBook.isPublished = true;
  })
}

let updated = publish(book);
console.log('original book', book)
console.log('book', updated);