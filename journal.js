//Created a function to access the title an the content.
class Journal {
 constructor(title, content) {
  this.title = title;
  this.content = content;
  }
}
// array for the title
let title = [
  "Hello world", "today's news", "today's program"
]
 // content of the jurnal
let content = [
  "Welcome to the javascript's word, you're going to have a great fun here, so enjoy",
  "we are going to have meeting today don't forget to circle this news to your frinds most of whom are not here",
  "today we are going to learn html, css and javascript, please be prepared for debuging your code"
]

//function to create an full journal: title + content.
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
//promt of the start menu.
let startMenu = prompt('Welcome to Onja journal! \n Choose(1) for listing all the entires \n Choose (2) for adding a new entry \n Choose (3) to quit \n Choose (4) to delete the last jornal \n Choose (5) to delete a specific journal');
while (startMenu !== "3") {
  let startMenu = prompt('Welcome to Onja journal! \n Choose(1) for listing all the entires \n Choose (2) for adding a new entry \n Choose (3) to quit \n Choose (4) to delete the last jornal \n Choose (5) to delete a specific jouranl')
// if the start menu equal to one, desplay existance jouranl
  if (startMenu === "1") {
      myJournal();
      //if the strat menu is equal to 2, give them a prompt to enter a new joournal.
  } else if (startMenu === "2") {
    //ask them if they still have more journal
    let newjournalToday = "yes";
    while (newjournalToday === "yes") {
      //prompt of a new journal title
      let newJournalTitle = prompt("enter your journal title");
        title.push(newJournalTitle);
        //promt of the new journal content
      let newJournalContent = prompt("enter your journal content")
        content.push(newJournalContent);
          myJournal();
          //added for loop to go through what they user have entered
      for (let i = 3; i < title.length; i++) {
        let  newJournal = new Journal(title[i], content[i]);
        let newJournalList = (`Title: "${newJournal.title}" \n Content: ${newJournal.content}`);
        alert(newJournalList);
    }
    //promt to ask the user if they still have more news.
      newjournalToday = prompt("Do you still have a new journal?(yes) (no)")
    }
    alert("Come back if you have new journal to update")
  } else if (startMenu === "4") {
      title.pop();
      content.pop();
    myJournal();
  } else if (startMenu === "5") {
    let deleteJouranl = prompt("Which jouranl do you want to delete");
      for (let i = 0; i < title.length; i++) {
        // title.indexOf(deleteJouranl).pop();
        // content.indexOf(deleteJouranl).pop();
        console.log(title.length);
        console.log(deleteJouranl);
        // console.log(title);
    }
  }
  myJournal();
}