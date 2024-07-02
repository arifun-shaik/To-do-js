const input=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
const btn=document.getElementById("btn");

function check(){
    if(input.value ===''){
        alert("you have to write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        listContainer.appendChild(li);

        // creating a span tag
        let span=document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    // to make the input empty after clicking the button

    input.value= '';
    saveData();
}
// to check the list and delete if clicked on cross icon

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);

}
function showTask(){
         listContainer.innerHTML=localStorage.getItem("data");
}
showTask();
