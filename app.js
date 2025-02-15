let inputText=document.querySelector("#list");
let btn=document.querySelector("#btn");
let listConatiner=document.querySelector(".list-container");




const addtask=()=>{
    if(inputText.value==""){
        alert("You write Something");
    }
    else{
        let li=document.createElement("li");
        li.innerText=inputText.value;
        listConatiner.append(li);
    }
    inputText.value="";
    
}

listConatiner.addEventListener("click",(e)=>{
    if(e.target.tagName=="LI"){
               e.target.remove();
    }
});
























btn.addEventListener("click",addtask);