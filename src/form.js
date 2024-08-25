console.log("form");

function onSubmit(event) { //event = action when clicked
  event.preventDefault(); //form won’t be sent to the server + collect data

  //collecting data
  const firstName = document.getElementById("firstName").value; //first name
  const lastName = document.getElementById("lastName").value; //last name
  const selectedRadio = document.querySelector('input[name="html"]:checked'); //html
  //const selectedRadio = variable for radio button element

  
  //getElementById + querySelector = get form element value / querySelectorAll = checkbox
  document.querySelector('input[name="css"]:checked'); //css
  document.querySelector('input[name="js"]:checked'); //js
  const vehicles = document.querySelectorAll('input[name="vehicle"]:checked'); //vehicle
  const selectedCar = document.getElementById("cars").value; //cars


  //print data
  console.log("First Name:", firstName); //first name
  console.log("Last Name:", lastName); //last name
  console.log('Language:' ); //html
  console.log("Selected:", vehicles); //car type
  console.log("Selected:", selectedCar); //car brand
}
