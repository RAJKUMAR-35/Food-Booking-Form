var subBut = document.getElementById("submit");
// console.log(subBut);
subBut.addEventListener("click", (e)=>{
    e.preventDefault();
   // Getting input text values
   let firstName = document.getElementById('first-name').value;
   let lastName = document.getElementById('last-name').value;
   let address = document.getElementById('address').value;
   let pincode = document.getElementById('pincode').value;
   let state = document.getElementById('formState').value;
   let country = document.getElementById('formCountry').value;
  //  console.log(firstName, lastName, address, pincode, state, country);

    // Getting radio box value
    const genderInputs = document.getElementsByName('gender');
    let gender = '';
    for (let GI of genderInputs) {
      if (GI.checked) {
        gender = GI.value;
        break;
      }
    }
    // console.log(gender);

  // Getting check box values
  const foodInputs = document.getElementsByName('foodCheck');
  // console.log(foodInputs);
  let selectedFood = [];
  for (let FI of foodInputs) {
    if (FI.checked) {
      selectedFood.push(FI.value);
    }
  }
  if (selectedFood.length < 2) {
    alert('Please select at least 2 food options.');
  }else{
    selectedFood = selectedFood.join(', ');
    // console.log(selectedFood);
  
        // Creating table dynamic row
        let tBody = document.getElementById('tBody');
        let newR = document.createElement('tr');
        newR.innerHTML = ` 
          <td>${firstName}</td>
          <td>${lastName}</td>
          <td>${gender}</td>
          <td>${address}</td>
          <td>${pincode}</td>
          <td>${state}</td>
          <td>${country}</td>
          <td>${selectedFood}</td>
        `;
        
        // adding new row
        tBody.append(newR);
        alert(`Your Opinion Successfully Added!`);
  
        // Clearing form fields
        document.getElementById('form').reset();
  }
  
  
});