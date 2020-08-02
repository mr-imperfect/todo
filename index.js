var txt;
function changeTxt(){
    txt=event.target.value; 
}


function addItem(){
    var ul=document.getElementById('ul');
    var li=document.createElement("li");
    
    li.innerHTML=txt;
    ul.appendChild(li);
    var span=document.createElement("Span");
    var x=document.createTextNode('\u00D7');
    span.setAttribute("id","span")
    span.appendChild(x);
    li.appendChild(span);
    if(document.getElementById('input').value==""){
        alert("Please enter an item");
        li.innerHTML="";
        li.remove();
    }
    document.getElementById("input").value="";
    span.onclick=function(){
        li.remove();
    }
    li.onclick=function(event){
        li.setAttribute("class","checked");
    }
 
} 

