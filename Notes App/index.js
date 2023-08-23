const btnel = document.getElementById("btn");
const appel = document.getElementById("app");


function createnoteEl(id, content){
    const element = document.createElement("textarea")
    element.classList.add("note")
    element.placeholder = "Empty Note"
    element.value = content

    element.addEventListener("dblclick", ()=>{
        const warning = confirm("Do you want to delete this note ?")
        if(warning){
            deletenote(id, content)
        }
    });

    element.addEventListener("input", ()=>{
        updatenote(id, element.value)
    });
    
    return element;
}

function deletenote(){

}

function updatenote(){

}


function addnote(){
    const noteobj = {
        id: Math.floor(Math.random() * 100000),
        content: "",
    };
    noteel = createnoteEl(noteobj.id, noteobj.content)
    appel.insertBefore(noteel, btnel);
}
btnel.addEventListener("click", addnote);
