
function hitOrMiss(x) {
    if ( x > 3) {
      return "miss";
    } else {
      return "hit";
    }
  }

 function fight(){
    document.getElementById("demo").innerHTML = hitOrMiss(Math.floor(Math.random() * 10));
 }
 
 

