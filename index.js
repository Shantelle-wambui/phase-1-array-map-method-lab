const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?"
];

function titleCased() {
  const preserveWords = ["API", "NaN", "OO", "JSONP", "==", "===", "StopPropagation", "PreventDefault"];
  return tutorials.map(title => {
    return title
      .split(" ")
      .map(word => {
        const cleanWord = word.replace(/[^a-zA-Z0-9=]/g, ""); // Remove punctuation for matching
        const preserved = preserveWords.find(p => p.toLowerCase() === cleanWord.toLowerCase());
        return preserved ? word.replace(cleanWord, preserved) : word[0].toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  });
}