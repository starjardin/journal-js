const links = [
  {
    title: "Madagascar news",
    url: `"htpp://news-madagascar.com"`,
    author: "HoneyMoon",
  },
  {
    title: "African news",
    url: `"htpp://news-african.com"`,
    author: "HoneyMoon",
  },
  {
    title: "American news",
    url: `"htpp://news-american.com"`,
    author: "HoneyMoon",
  },
];

const linkList = () => {
  for (let i = 0; i < links.length; i++) {
    let myLink = `${links[i].title} ${links[i].url} ${links[i].author}`;
    alert(myLink)
  }
};

const addNweLink = () => {
  const linTtitle = prompt("Enter here your link title");
  const linkAuthor = prompt("Enter here your link Author");
  const linkUrl = prompt("Enter here your link url");
  links.title.push(linkTitle)
}

const startMenuString = `Choose an option:
1 : Show links
2 : Add a link
3 : Remove a link
0 : Quit`

let menuStart = Number(prompt(startMenuString));

while(menuStart !== 0) {
  switch(menuStart) {
    case 1:
      linkList();
      break;
    case 2:
      addNweLink();
      break;
    case 3:
      alert("Do you want to delerte a link");
      break;
    default:
      alert("Sorry not found");
      break;
  }
  menuStart = Number(prompt(startMenuString));
}
alert("Good bye")
console.log(menuStart);

