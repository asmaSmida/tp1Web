
document.getElementById("Button").addEventListener("click",function(){
    var text1 = document.getElementById("Name").value ;
    var text2 = document.getElementById("Content").value;
    var i=1;
    if((text1!="") &&(text2!="")){
        var text = text1 + " " + text2;
        var newNode=document.createElement("div");
        newNode.innerText = text ;
        newNode.id =  i +"";
        document.getElementById("add").appendChild(newNode);
        
        var newNode2=document.createElement("button");
        //newNode2.style.backgroundColor = "transparent" ;
        //newNode2.style.outline = "transparent";
        newNode2.id=  i + "";
        newNode2.className = "btn"
        newNode.appendChild(newNode2);
        

        var newNode3 = document.createElement("img")
        newNode3.src="delete.jpg";
        newNode3.width="20";
        newNode3.height="15";
        newNode2.appendChild(newNode3);

        //newNode2.onclick = reply(newNode2.id);
        i++;
    }

function reply(id)
{  
    document.getElementById(id).remove();
}   

document.getElementsByClassName("btn").addEventListener("click",function(){
    
    
    //var id = document.getElementById("todo").parentNode.remove();
   // var todo = document.getElementById("todo");
    //todo.remove();
})
    
})