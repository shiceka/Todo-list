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
  }
};
const myEdit = () =>{}
const myDelete = () =>{}

const myDisplay = () =>{
    // let formOutput = {subject:subject.value, description:description.value, date:date.value}
    // formData.push(formOutput);
    // let ls = localStorage.setItem('To be done',JSON.stringify(formData))
    
    // let output = JSON.parse(localStorage.getItem('To be done'));
    // console.log('output', output);
    // output.forEach(function(element){
        // for(let i = 0; i < output.length; i++){
        
        document.getElementById('display1').innerHTML +=`
        <td id="showMe">${subject.value}</td>
        <td id="showMe1">${description.value}</td>
        <td id="showMe2">${date.value}</td>
        <td id="showMe3"><button onclick = "myEdit()">Edit</button>
        <button onclick = "myDelete()" >Delete</td>       
        `
    
}