

const mySubmit = (event) => {
  event.preventDefault();

  let subject = document.getElementById("subject").value;
  let description = document.getElementById("description").value;
  let date = document.getElementById("date").value;

  if (subject === "" || description === "" || date === "") {
    document.getElementById(
      "message"
    ).innerHTML = `<h2 style ="color: red" >My friend please fill in all 
        the inputs!!!</h2>`;
  } else {
    document.getElementById(
      "message"
    ).innerHTML = `<h2 style ="color: green">Thanks for filling in all 
        the inputs ;)</h2>`;
    myDisplay();
    resetForm();
  }
};

const resetForm = () => {
  document.getElementById("container").reset();
};

const myEdit = () => {
 const subject = document.getElementById("showMe").innerHTML;
 const description = document.getElementById("showMe1").innerHTML;
 const date = document.getElementById("showMe2").innerHTML;

 document.getElementById("editForm").style.display = "block";
 document.getElementById("editForm").innerHTML = `
 <h1>Edit content</h1>
  <label for="editSubject">Subject: <input id="editSubject" type="text" value="${subject}"></label>
  <label for="editDescription">Description: <input id="editDescription" type="text" value="${description}"></label>
  <label for="editDate">Date: <input id='editDate' type="date" value="${date}"></label><br>
  <br>
  <button onclick="cancel()">Cancel</button>
  <button onclick="save()">Save</button>
  `
};

const myDelete = (id) => {
  let element = document.getElementById(id);
  element.remove();
};

const save = () =>{
  const subject = document.getElementById("editSubject").value;
  const description = document.getElementById("editDescription").value;
  const date = document.getElementById("editDate").value;

  document.getElementById("showMe").innerHTML = subject;
  document.getElementById("showMe1").innerHTML = description;
  document.getElementById("showMe2").innerHTML = date;
  document.getElementById("editForm").style.display = "none";
}

const cancel = () =>{
 document.getElementById("editForm").style.display = "none";
}
var id = 0;
const myDisplay = () => {
  document.getElementById("display1").innerHTML += `
        <tr id="${id}">
        <td id="showMe">${subject.value}</td>
        <td id="showMe1">${description.value}</td>
        <td id="showMe2">${date.value}</td>
        <td id="showMe3">
        <button id="edit" onclick = "myEdit()">Edit</button>
        <button id="del" onclick = "myDelete(${id})" >Delete
        </td>
        </tr>       
        `;
        id++;
};
