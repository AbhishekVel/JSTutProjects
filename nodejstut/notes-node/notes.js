console.log('Starting notes.js');

var name = 'bro';

var addNote = (title, body) => {
  console.log(`Adding note ${title} : ${body}`)
};

var getAll = () => {
  console.log('Getting all notes');
}

var getNote = (title) => {
  console.log(`Reading note ${title}`);
}

var removeNote= (title) => {
  console.log(`Removing note ${title}`);
}



module.exports = {
  addNote, // same thing as addNote : addNote
  getAll,
  getNote,
  removeNote,
};
