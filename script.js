console.log('Remove this console log and get started!')


var totallyspies = [

  "https://www.youtube.com/embed/_njIwS92LyY",

"https://www.youtube.com/embed/NhYEQm53Oy0",

"https://www.youtube.com/embed/-IpTBeZbsIM",

"https://www.youtube.com/embed/sxUkje9Hv7Y"

            ];

function totallyspiesplay() {
  // get iframe element by id
  var el = document.getElementById('ifr');

  // get new url
  var newUrl = totallyspies[Math.floor(Math.random()*totallyspies.length)];
  // assign new url to src property
  el.src = newUrl; 
}


var benten = [

  "https://www.youtube.com/embed/-zxaK_j4TJQ",
  "https://www.youtube.com/embed/4aIwR4gHC0k",
  "https://www.youtube.com/embed/SybJw-Sedlw",
  "https://www.youtube.com/embed/39_nGXQptD8" 
            ];

function bentenplay() {
  // get iframe element by id
  var el = document.getElementById('ifr');

  // get new url
  var newUrl = benten[Math.floor(Math.random()*benten.length)];
  // assign new url to src property
  el.src = newUrl; 
}


var tomnjerry = [


  "https://www.youtube.com/embed/X6gSqJgFQUU",
  "https://www.youtube.com/embed/GU4T2esZ7oM",
  "https://www.youtube.com/embed/lQXiXYlKfrM",
  "https://www.youtube.com/embed/W4xuNu8VYDg"

            ];

function tomnjerryplay() {
  // get iframe element by id
  var el = document.getElementById('ifr');

  // get new url
  var newUrl = tomnjerry[Math.floor(Math.random()*tomnjerry.length)];
  // assign new url to src property
  el.src = newUrl; 
}
