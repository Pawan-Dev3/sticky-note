const addNoteBtn = document.getElementById("add-note-btn");
const textAreaContent = document.getElementById("notes-text");
const notesContainer = document.getElementById("notes-container");
const pTag = document.getElementById("empty-notes-container");

addNoteBtn.addEventListener("click", createNote);

function createNote() {
  if (textAreaContent.value === "") {
    textAreaContent.className = "animate";
    alert("Enter Some Text");
    setTimeout(() => {
      textAreaContent.className = "";
      return;
    }, 500);
    return;
  }

  const colorPicked = document.getElementById("pick-color");

  const noteDiv = document.createElement("div");
  const noteContent = document.createElement("p");
  const crossBtn = document.createElement("button");

  noteContent.innerText = textAreaContent.value;
  crossBtn.innerText = "X";
  noteDiv.style.backgroundColor = colorPicked.value;
  noteDiv.className = "note";
  crossBtn.className = "cross-btn";

  pTag.style.display = "none";
  noteDiv.appendChild(noteContent);
  noteDiv.appendChild(crossBtn);
  notesContainer.appendChild(noteDiv);

  textAreaContent.value = "";

  crossBtn.addEventListener("click", function () {
    noteContent.innerText = "";
    crossBtn.innerText = "";
    noteDiv.className = "vanish-note";
    setTimeout(() => {
      noteDiv.className = "";
      notesContainer.removeChild(noteDiv);
      if (!notesContainer.hasChildNodes()) {
        pTag.style.display = "block";
        pTag.innerText = "You have not added a note yet.";
      }
      return;
    }, 500);
  });
}
