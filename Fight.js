
function randomNumber(x) {
    if ( x > 3) {
      return document.getElementById("img").src = "https://cdn.pixabay.com/photo/2016/08/17/22/22/pow-1601674_960_720.png";
    } else {
      return document.getElementById("img").src = "https://images.clipartof.com/thumbnails/440628-Royalty-Free-RF-Clip-Art-Illustration-Of-A-Cartoon-Baseball-Batter-Striking-Out.jpg";
    }
  }

 function fight(){
    document.getElementById("demo").innerHTML = randomNumber(Math.floor(Math.random() * 10));
 }
 
 

