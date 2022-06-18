var y = Math.floor(Math.random() * 10)+1;
var b= document.getElementById("input").value;
function result(){
    var b= document.getElementById("input").value;
  
    if(b==y){
        alert("CONGRATULATIONS!! YOU GUESSED RIGHT NUMBER");
    }
    if(b>10 && b<1){
        alert("ENTERED VALUE IS NOT IN THE RANGE BETWn 1-10");
    }
    if(b!=y){
        alert("BADLUCK!! YOUR GUESS IS NOT CORRECT AS THE SECRET NO IS:"+y +".");
    }
    if( document.getElementById("input").value="")
    {
        alert("ENTER A VALUE");
    }
   
    
}
function reload(){
    location.reload();
    document.getElementById("input").value="";
}
