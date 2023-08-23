const btnel = document.getElementById("btn")

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
    })

    element.addEventListener()
}

function deletenote(){

}

function addnote(){
    const noteobj = {
        id: Math.floor(Math.random() * 100000),
        content: "",
    };
    noteel = createnoteEl(noteobj.id, noteobj.content)
}
btnel.addEventListener("click", addnote);
