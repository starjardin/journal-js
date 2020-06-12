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
  let journal1 = (`Title: "${firstJournal.title}" \n Content: ${firstJournal.content}`)
  alert(journal1)
  
  let secondJouranl = new Journal(title[1], content[1]);
  let journal2 = (`Title: "${secondJouranl.title}" \n Content: ${secondJouranl.content}`);
  alert(journal2)
  
  let thihrdJournal = new Journal(title[2], content[2])
  let journal3 = (`Title: "${thihrdJournal.title}" \n Contnent: ${thihrdJournal.content}`)
  alert(journal3);
  return myJournal;
}

let startMenu = prompt('Welcome to Onja journal! \n Choose(1) for listing all the entires \n Choose (2) for adding a new entry \n Choose (3) to quit')

if (startMenu === "1") {
    myJournal();
} else if (startMenu === "2") {
  let newjournalToday = "yes";
while (newjournalToday === "yes") {
  let newJournalTitle = prompt("enter your journal title");
  title.push(newJournalTitle);
  let newJournalContent = prompt("enter your journal content")
  content.push(newJournalContent);
  myJournal();
  for (let i = 2; i < title.length; i++) {
    let  newjournal = new Journal(title[i], content[i]);
    let newjournal1 = (`Title: $"${newjournal.title}" \n Content: ${newjournal.content}`);
    alert(newjournal1);
  }
  newjournalToday = prompt("Do you have new journal?(yes) (no)")
}
} else if (startMenu === "3") {
  alert("good bye, have a good day")
}