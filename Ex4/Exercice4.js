var ol = document.getElementById("list");

var listItems = ol.getElementsByTagName("li");

for(li of  listItems){
  li.addEventListener('click', function(){
      document.getElementsByTagName("li").style.color = red;
      //"rgb(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256))";
   
  })
}

changecolor(id)
{
    //document.getElementById(id).style.color = rgb(Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256));
    document.getElementById(id).style.color = "red";
}