let formData = [];

const mySubmit = (event) => {
  event.preventDefault();

  let subject = document.getElementById("subject").value;
  let description = document.getElementById("description").value;
  let date = document.getElementById("date").value;
  
  
  if (subject === "" || description === "" || date === "") {
    document.getElementById(
      "message"
    ).innerHTML = `<h2 style ="color: red" >My friend please fill in all the inputs!!!</h2>`;
  } else {
    document.getElementById(
      "message"
    ).innerHTML = `<h2 style ="color: green">Thanks for filling in all the inputs ;)</h2>`;
    formData.push(subject,description,date);
    myDisplay();
    resetForm();
  }
  
};

const resetForm = () =>{
  document.getElementById("container").reset()
};

const myEdit = () =>{}

const myDelete = (event) =>{ 
  let element = document.getElementById("row");
  element.parentNode.removeChild(element);
};

const myDisplay = () =>{        
        document.getElementById('display1').innerHTML +=`
        <tr id="row">
        <td id="showMe">${subject.value}</td>
        <td id="showMe1">${description.value}</td>
        <td id="showMe2">${date.value}</td>
        <td id="showMe3">
        <button id="edit" onclick = "myEdit()">Edit</button>
        <button id="del" onclick = "myDelete(event)" >Delete
        </td>
        </tr>       
        `
    
};