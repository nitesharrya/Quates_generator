// api=https://type.fit/api/quotes

let quotes = document.querySelector("#quotes");
let author = document.querySelector("#author");
let btn = document.getElementById("newQ");
let watshapMe=document.getElementById("watshapme")

let realDat = "";
let QuotesData=""


function getRandomColor() {
  // Generate random values for red, green, and blue channels
  var r = Math.floor(Math.random() * 256); // Random between 0-255
  var g = Math.floor(Math.random() * 256); // Random between 0-255
  var b = Math.floor(Math.random() * 256); // Random between 0-255

  // Construct the RGB color string
  var color = "rgb(" + r + ", " + g + ", " + b + ")";
  console.log(color);
  return color;
}


const watshapNow=()=>{
window.open(`https://api.whatsapp.com/send?phone=8303020540&text=${QuotesData.text}`)
}


const randomQuotes = () => {
  let rnum = Math.floor(Math.random() * 17);
//   console.log(realDat[rnum].text);
QuotesData=realDat[rnum]
  quotes.innerText = QuotesData.text;
  quotes.style.color=getRandomColor();
  QuotesData.author==null?(author.innerText="Unknown")
  :(author.innerText = "By: "+QuotesData.author.slice(0, -10));
};


const getQuotes = async () => {
  const api = "https://type.fit/api/quotes";
  try {
    let data = await fetch(api);
    realDat = await data.json();
    randomQuotes();
    
  } catch (error) {}
};
getQuotes();

watshapMe.addEventListener("click",watshapNow)
btn.addEventListener("click", randomQuotes);

// var randomColor = 
