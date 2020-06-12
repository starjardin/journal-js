// use object to crate smt
// create a prompt for the user
// array contains the journal entries
// while loop to ask the user until they choose quit
// if prompt === 1 display already exist entry
// if prompt === 2 here where we entered the new journal.

function Journal(title, content ) {
  this.title = title;
  this.content = content;
}

Journal.prototype = {
  getTitle: function() {return this.title},
  getContent: function() {return this.content},
}

let title = [
  "hello world", "today's news", "today's program"
]
 
let content = [
  "we are going to have meeting today don't forget to circle this news to your frinds most of whom are not here",
  "today is my birthday, so everyone of you shold give me a present",
  "today we are going to learn html, css and javascript, please be prepared for debuging your code"
]
const myJournal = () => {
  let firstJournal = new Journal(title[0], content[0]);
  let journal1 = (`title: "${firstJournal.title}" \n content: ${firstJournal.content}`)
  alert(journal1)
  
  let secondJouranl = new Journal(title[1], content[1]);
  let journal2 = (`title: "${secondJouranl.title}" \n content: ${secondJouranl.content}`);
  alert(journal2)
  
  let thihrdJournal = new Journal(title[2], content[2])
  let journal3 = (`title: "${thihrdJournal.title}" \n contnent: ${thihrdJournal.content}`)
  alert(journal3);
  return myJournal;
}

let startMenu = prompt('Welcome to Onja journal! \n Choose(1) for listing all the entires \n Choose (2) for adding a new entry \n Choose (3) to quit')

if (startMenu === "1") {
    myJournal();
} else if (startMenu === "2") {
  let newJournalTitle = prompt("enter here the title");
  title.push(newJournalTitle);
  let newJournalContent = prompt("here is your journal content")
  content.push(newJournalContent);
} else if (startMenu === "3") {
  alert("bye bye!!!!")
}