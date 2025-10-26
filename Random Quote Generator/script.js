const quotes = [
  { text: "Believe in yourself and all that you are.", author: "Christian D. Larson" },
  { text: "Every moment is a fresh beginning.", author: "T.S. Eliot" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "The harder you work, the luckier you get.", author: "Gary Player" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
  { text: "Wherever you go, go with all your heart.", author: "Confucius" },
  { text: "Difficulties in life are intended to make us better, not bitter.", author: "Dan Reeves" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Rhyanna Watson" },
  { text: "Great things never come from comfort zones.", author: "Roy T. Bennett" },
  { text: "Dream it. Wish it. Do it.", author: "Les Brown" },
  { text: "Success doesn’t just find you. You have to go out and get it.", author: "Marva Collins" },
  { text: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
  { text: "Don’t stop when you’re tired. Stop when you’re done.", author: "Marilyn Monroe" },
  { text: "Wake up with determination. Go to bed with satisfaction.", author: "George Horace Lorimer" },
  { text: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery" },
  { text: "Little things make big days.", author: "Isabel Marant" },
  { text: "Don’t wait for opportunity. Create it.", author: "George Bernard Shaw" },
  { text: "The key to success is to focus on goals, not obstacles.", author: "Unknown" },
  { text: "Work hard in silence, let success make the noise.", author: "Frank Ocean" },
  { text: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" },
  { text: "The best view comes after the hardest climb.", author: "Unknown" },
  { text: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier" },
  { text: "Make each day your masterpiece.", author: "John Wooden" },
  { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "If you can dream it, you can do it.", author: "Walt Disney" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "Be the change you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "What we think, we become.", author: "Buddha" },
  { text: "Happiness is not by chance, but by choice.", author: "Jim Rohn" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
  { text: "The best revenge is massive success.", author: "Frank Sinatra" },
  { text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
  { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { text: "Fall seven times, stand up eight.", author: "Japanese Proverb" },
  { text: "Dare to be different.", author: "Coco Chanel" },
  { text: "If it doesn’t challenge you, it won’t change you.", author: "Fred DeVito" },
  { text: "Be fearless in the pursuit of what sets your soul on fire.", author: "Jennifer Lee" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Go the extra mile. It’s never crowded there.", author: "Wayne Dyer" },
  { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
  { text: "If opportunity doesn’t knock, build a door.", author: "Milton Berle" },
  { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Winners are not those who never fail but those who never quit.", author: "Edwin Louis Cole" },
  { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" }
];



let quote = document.getElementById("quote");
let authors = document.getElementById("auth");
let liked = document.getElementById("liked");
let number = document.getElementById("number");
let likes = document.getElementById("likbtn");
let likedCount = document.getElementById("counts");
let count = 0;


function change() {
    let arrLength = quotes.length;
    let condition = Math.random() * arrLength;
    let coditiion2 = Math.floor(condition)
    quote.innerHTML =  `" ${quotes[coditiion2].text} "`
    authors.innerHTML = "-" + quotes[coditiion2].author
    number.innerHTML =  "Quote No : " + coditiion2
    likes.style.display = "block";
    liked.style.backgroundColor = "";
}

function like(){
    liked.style.backgroundColor = "palevioletred";
    likedCount.innerHTML = `Liked Quotes : ${count+=1}`;
}