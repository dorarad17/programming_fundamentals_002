// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger",
  "Dracula by Bram Stoker",
  "Between the Assassinations by Aravind Adiga",
  "Wolf Hall by Hilary Mantel",
  "Bring Up The Bodies by Hilary Mantel",
  "A Place of Greater Safety by Hilary Mantel",
  "Giving Up the Ghost by Hilary Mantel",
  "The Assassination of Margaret Thatcher by Hilary Mantel",
  "The Yellow Wallpaper by Charlotte Perkins Gilman",
  "Conversations With Friends by Sally Rooney",
  "Normal People by Sally Rooney",
  "Everything I Never Told You by Celeste Ng",
  "2666 by Robert Bolaño",
  "By Night In Chile by Robert Bolaño",
  "A Tale of Two Cities by Charles Dickens",
  "Oliver Twist by Charles Dickens",
  "Great Expectations by Charles Dickens",
  "The Blind Assassin by Margaret Atwood",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson",
  "The Origin of Species by Charles Darwin"
];

function countBooks() {
  return catalogue.length
}

function checkBook(book) {
  return catalogue.includes(book);
}

function countBooksByFirstLetter(letter) {

  let matchesCount = 0;

  catalogue.forEach(function(title) {
    let firstLetter = title[0];
    if (firstLetter === letter){
      console.log(firstLetter)
      matchesCount++;
    }
  })
  return matchesCount
}

function countBooksByKeyword(keyword) {
  let count = 0;
  for(let i=0; i < catalogue.length; i++) {
    if(catalogue[i].toLowerCase().includes(keyword.toLowerCase())) {
      count++;
    }
  }
  return count;
}

function getBooksByAuthor(author) {
  let booksFound = []
  catalogue.forEach(function(title) {
    if(title.toLowerCase().includes(author.toLowerCase())) {
      booksFound.push(title)}
  })
  return booksFound
}

module.exports = {
  countBooks,
  checkBook,
  countBooksByFirstLetter,
  countBooksByKeyword,
  getBooksByAuthor
};
