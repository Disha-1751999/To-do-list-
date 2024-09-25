function addItem(){
    let inputBox=document.getElementById('input-box');
    if(inputBox.value==''){
        alert('Please type the text!')
    } else {
       document.getElementById('list-container').innerHTML+= `<li><span class="text">${inputBox.value}</span><span class="remove" id="remove">&#10006;</span></li> ` 
       
    } 
    
    inputBox.value=  '';  
    saveData()
    
    
  
}

let listContainer=document.getElementById('list-container');

listContainer.addEventListener("click",function(e){

 if(e.target.tagName==='LI'){
    
     e.target.classList.toggle('checked');
     saveData();
 } else if(e.target.className=='remove'){
    e.target.parentElement.remove();
    saveData();
 }

});

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showList(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showList();

