const quotes = [
  "Success doesn't come from what you do occasionally, it comes from what you do consistently.",
  "Push yourself, because no one else is going to do it for you.",
  "Don’t wait for opportunity. Create it.",
  "You are stronger than you think.",
  "Dream big. Work hard. Stay focused.",
  "Great things never come from comfort zones.",
  "Be so good they can’t ignore you. – Steve Martin",
  "Discipline is the bridge between goals and accomplishment. – Jim Rohn",
  "Winners are not afraid of losing. But losers are. – Robert Kiyosaki",
  "The future depends on what you do today. – Mahatma Gandhi",
  "Knowing yourself is the beginning of all wisdom. – Aristotle",
  "In the middle of difficulty lies opportunity. – Albert Einstein",
  "Do not be afraid to give up the good to go for the great. – John D. Rockefeller",
  "A person who never made a mistake never tried anything new. – Albert Einstein",
  "Success is a journey, not a destination.",
  "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
  "It always seems impossible until it's done. – Nelson Mandela",
  "He who opens a school door, closes a prison. – Victor Hugo",
  "Life is 10% what happens to us and 90% how we react to it.",
  "Don’t raise your voice. Improve your argument. – Desmond Tutu",
  "Success is not in what you have, but who you are.",
  "Don’t be afraid to give up the good to go for the great.",
  "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
  "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  "Work hard in silence, let your success make the noise.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Opportunities don't happen. You create them. – Chris Grosser",
  "Success doesn’t just find you. You have to go out and get it.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "Strive not to be a success, but rather to be of value. – Albert Einstein",
  "Every day is a chance to get better.",
  "If you want to fly, give up everything that weighs you down.",
  "It’s not whether you get knocked down. It’s whether you get up.",
  "Do something today that your future self will thank you for.",
  "Your only limit is your mind.",
  "Growth begins when we start to accept our own weakness.",
  "Make today count. You’ll never get it back.",
  "Success starts with self-discipline.",
  "Progress is progress, no matter how small.",
  "We become what we think about. – Earl Nightingale",
  "The mind is everything. What you think you become. – Buddha",
  "Life is not measured by the number of breaths we take, but by the moments that take our breath away.",
  "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
  "You don’t have to see the whole staircase, just take the first step. – Martin Luther King Jr.",
  "Peace begins with a smile. – Mother Teresa",
  "The only true wisdom is in knowing you know nothing. – Socrates",
  "Sometimes you win, sometimes you learn. – John C. Maxwell",
  "If you want to go fast, go alone. If you want to go far, go together. – African Proverb",
  "Be the change that you wish to see in the world. – Mahatma Gandhi"
];


const h2 = document.getElementsByTagName('h2')[0];

function call(){
    const ran = Math.floor(Math.random() * 51);
    h2.innerHTML = quotes[ran];
}

setInterval(call, 5000);

call();