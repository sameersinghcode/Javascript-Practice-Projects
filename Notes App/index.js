const btnel = document.getElementById("btn");
const appel = document.getElementById("app");

getNotes().forEach((note)=>{
    const noteel = createnoteEl(note.id, note.content);
    appel.insertBefore(noteel, btnel);
})


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

function deletenote(id, content){
    const notes = getNotes();
    const target = notes.filter((note)=>note.id != id);
    savenote(target);
    location.reload();
}

function updatenote(id, content){
    const notes = getNotes();
    const target = notes.filter((note)=>note.id == id)[0];
    target.content = content;
    savenote(notes);
}


function addnote(){
    const notes = getNotes();
    const noteobj = {
        id: Math.floor(Math.random() * 100000),
        content: "",
    };
    noteel = createnoteEl(noteobj.id, noteobj.content)
    appel.insertBefore(noteel, btnel);

    notes.push(noteobj);
    savenote(notes);


}

function savenote(notes){
    localStorage.setItem("note-app",JSON.stringify(notes));
}


function getNotes(){
    return JSON.parse(localStorage.getItem("note-app") || "[]");
}
btnel.addEventListener("click", addnote);
