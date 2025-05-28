/*
refrance:
Math.floor(Math.random() * 10);
https://www.youtube.com/watch?v=UZqSpuUJPa0&themeRefresh=1
*/

/*

// First solution

var lastnum = -1;
function quotef() {
  do {
    var num = Math.floor(Math.random() * 11);
  } while (num === lastnum);

  switch (num) {
    case 0:
      document.getElementById(
        "quote"
      ).innerHTML = `“Be yourself; everyone else is already taken.”
― Oscar Wilde`;

      break;

    case 1:
      document.getElementById(
        "quote"
      ).innerHTML = `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
― Marilyn Monroe`;

      break;

    case 2:
      document.getElementById(
        "quote"
      ).innerHTML = `“So many books, so little time.”
― Frank Zappa`;

      break;

    case 3:
      document.getElementById(
        "quote"
      ).innerHTML = `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
― Albert Einstein`;

      break;

    case 4:
      document.getElementById(
        "quote"
      ).innerHTML = `“A room without books is like a body without a soul.”
― Marcus Tullius Cicero`;

      break;

    case 5:
      document.getElementById(
        "quote"
      ).innerHTML = `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
― Bernard M. Baruch`;

      break;

    case 6:
      document.getElementById(
        "quote"
      ).innerHTML = `“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”
― William W. Purkey`;

      break;

    case 7:
      document.getElementById(
        "quote"
      ).innerHTML = `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
― Dr. Seuss`;

      break;

    case 8:
      document.getElementById(
        "quote"
      ).innerHTML = `“You only live once, but if you do it right, once is enough.”
― Mae West`;

      break;

    case 9:
      document.getElementById(
        "quote"
      ).innerHTML = `“Be the change that you wish to see in the world.”
― Mahatma Gandhi`;

      break;

    case 10:
      document.getElementById(
        "quote"
      ).innerHTML = `“In three words I can sum up everything I've learned about life: it goes on.”
― Robert Frost`;

      break;

    default: // لن تحدث ابدا
      document.getElementById(
        "quote"
      ).innerHTML = `“If you tell the truth, you don't have to remember anything.”
― Mark Twain`;
      break;
  }

  lastnum = num;
}


*/

/*
// second solution


var quotes = [
  `“Be yourself; everyone else is already taken.”
― Oscar Wilde`,
  `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
― Marilyn Monroe`,
  `“So many books, so little time.”
― Frank Zappa`,
  `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
― Albert Einstein`,
  `“A room without books is like a body without a soul.”
― Marcus Tullius Cicero`,
  `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
― Bernard M. Baruch`,
  `“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”
― William W. Purkey`,
  `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
― Dr. Seuss`,
  `“You only live once, but if you do it right, once is enough.”
― Mae West`,
  `“Be the change that you wish to see in the world.”
― Mahatma Gandhi`,
  `“In three words I can sum up everything I've learned about life: it goes on.”
― Robert Frost`,
];

var lastnum = -1;

function quotef() {
  do {
    var num = Math.floor(Math.random() * quotes.length);
  } while (num === lastnum);

  document.getElementById("quote").innerHTML = quotes[num];

  lastnum = num;
}
*/

//third solution



var quotes = [
  {
    title: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },

  {
    title:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: "Marilyn Monroe",
  },

  {
    title: "So many books, so little time.",
    author: "Frank Zappa",
  },

  {
    title:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },

  {
    title: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },

  {
    title:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch",
  },

  {
    title: `You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.`,
    author: "William W. Purkey",
  },

  {
    title:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Mae West",
  },

  {
    title: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },

  {
    title:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
];

var lastnum = -1;

function quotef() {
  do {
    var num = Math.floor(Math.random() * quotes.length);
  } while (num === lastnum);

  document.getElementById("quote").innerHTML = `"${quotes[num].title}" --  ${quotes[num].author}`;

  lastnum = num;
}
