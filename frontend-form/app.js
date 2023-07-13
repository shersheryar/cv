"use strict";
//-------------------------Image---------------------------
document.addEventListener("DOMContentLoaded", function () {
  let fileInput = document.getElementById("pic");
  let customLabel = document.querySelector(".custom-file-label");
  let fileInputChangeEventFired = false;

  customLabel.addEventListener("click", function () {
    if (!fileInputChangeEventFired) {
      fileInput.click();
      fileInputChangeEventFired = true;
    }
  });

  fileInput.addEventListener("change", function () {
    let selectedFile = this.files[0];
    if (selectedFile) {
      customLabel.textContent = selectedFile.name;
    } else {
      customLabel.textContent = "Choose Image";
    }
    fileInputChangeEventFired = false; // Reset the flag
  });
});
// //-----------------Experience Section-------------------
let ExpCount = 1;
function duplicateExp() {
  let expMainCol = document.getElementById("expMainCol");
  let clonedRow = expMainCol.cloneNode(true);

  ExpCount++;

  let h5Element = clonedRow.querySelector("h5");
  h5Element.textContent = ExpCount + ":";
  let posiInput = clonedRow.querySelector("input[name='position']");
  posiInput.value = "";
  let orgnInput = clonedRow.querySelector("input[name='organization']");
  orgnInput.value = "";
  let joinInput = clonedRow.querySelector("input[name='join']");
  joinInput.value = "";
  let resignInput = clonedRow.querySelector("input[name='resign']");
  resignInput.value = "";

  expMainCol.parentNode.appendChild(clonedRow);
}

// //---------------------Skill Section-----------------------
// Function to duplicate skill section
let skillCount = 1;

function duplicateSkill() {
  let skillMainCol = document.getElementById("skillMainCol");
  let clonedRow = skillMainCol.cloneNode(true);

  skillCount++;

  let h5Element = clonedRow.querySelector("h5");
  h5Element.textContent = skillCount + ":";

  // Clear the input value in the cloned row
  let skillInput = clonedRow.querySelector("input[name='skill']");
  skillInput.value = "";

  skillMainCol.parentNode.appendChild(clonedRow);
}
// //---------------------Education Section-----------------------
let eduCount = 1;
function duplicateEdu() {
  let eduMainCol = document.getElementById("eduMainCol");
  let clonedRow = eduMainCol.cloneNode(true);

  eduCount++;

  let h5Element = clonedRow.querySelector("h5");
  h5Element.textContent = eduCount + ":";
  let titleInput = clonedRow.querySelector("input[name='title']");
  titleInput.value = "";
  let instInput = clonedRow.querySelector("input[name='institute']");
  instInput.value = "";
  let fromInput = clonedRow.querySelector("input[name='from']");
  fromInput.value = "";
  let toInput = clonedRow.querySelector("input[name='to']");
  toInput.value = "";
  let marksInput = clonedRow.querySelector("input[name='marks']");
  marksInput.value = "";
  eduMainCol.parentNode.appendChild(clonedRow);
  // console.log("hello world");
  // console.log("hello world");
}

// -------------------------------Function to handle form submission
function formSubmit() {
  // if (validateForm()) {
  getData();
  // }
}

// Function to validate the form
function validateForm() {
  let form = document.getElementById("myForm");
  let unfilledField = null;

  // Validate CNIC
  let cnicField = document.getElementById("cnic");
  if (cnicField.value.length !== 13) {
    alert("Your CNIC should be 13 digits long.");
    cnicField.focus();
    return false;
  }

  // Validate Phone Number
  let phoneField = document.getElementById("phoneno");
  if (phoneField.value.length !== 11) {
    alert("Your phone number should be 11 digits long.");
    phoneField.focus();
    return false;
  }

  // Additional validation logic for other fields...

  // Check if any required field is unfilled
  let requiredFields = form.querySelectorAll("[required]");
  for (let i = 0; i < requiredFields.length; i++) {
    if (!requiredFields[i].value) {
      unfilledField = requiredFields[i];
      break;
    }
  }

  if (unfilledField) {
    unfilledField.focus();
    alert("Please fill in all required fields.");
    return false;
  }

  return true;
}

// Function to retrieve skill values
function getData() {
  //-----------getting data of skill section----------------------------
  let skillInputs = document.querySelectorAll("#skillRow input[name='skill']");
  let skillValues = Array.from(skillInputs).map((input) => input.value);
  // ------------------------end of skill section-------------------------------

  //-----------getting data of education section----------------------------
  //----------title
  let titleInputs = document.querySelectorAll("#eduRow input[name='title']");
  let titleValues = Array.from(titleInputs).map((input) => input.value);
  //---------institute
  let instInputs = document.querySelectorAll("#eduRow input[name='institute']");
  let instValues = Array.from(instInputs).map((input) => input.value);
  //-----------from
  let fromInputs = document.querySelectorAll("#eduRow input[name='from']");
  let fromValues = Array.from(fromInputs).map((input) => input.value);
  //-----------to
  let toInputs = document.querySelectorAll("#eduRow input[name='to']");
  let toValues = Array.from(toInputs).map((input) => input.value);
  //-----------marks
  let marksInputs = document.querySelectorAll("#eduRow input[name='marks']");
  let marksValues = Array.from(marksInputs).map((input) => input.value);
  // ------------------------end of education section-------------------------------

  //-----------getting data of Experience section----------------------------
  //----------Position
  let posiInputs = document.querySelectorAll("#expRow input[name='position']");
  let posiValues = Array.from(posiInputs).map((input) => input.value);
  //---------organization
  let organInputs = document.querySelectorAll(
    "#expRow input[name='organization']"
  );
  let organValues = Array.from(organInputs).map((input) => input.value);
  //-----------join
  let joinInputs = document.querySelectorAll("#expRow input[name='join']");
  let joinValues = Array.from(joinInputs).map((input) => input.value);
  //-----------resignation
  let resignInputs = document.querySelectorAll("#expRow input[name='resign']");
  let resignValues = Array.from(resignInputs).map((input) => input.value);
  // ------------------------end of education section-------------------------------

  // Process the skill values as needed
  // let show = document.querySelector(".show");
  // show.innerHTML = `${posiValues}  ${organValues}  ${joinValues}  ${resignValues}`;
  // show.innerHTML = `${titleValues}  ${instValues}  ${fromValues}  ${toValues} ${marksValues}`;
  // console.log(skillValues);
}

// -------------------EXTRA------------------

// //------------------Submit Button Conformation----------------
// function validateForm() {
//   let form = document.getElementById("myForm");
//   let cnicField = document.getElementById("cnic");
//   let phoneField = document.getElementById("phoneno");
//   let skill = document.getElementById("skill");

//   // Validate CNIC
//   if (cnicField.value.length !== 13) {
//     alert("Your CNIC should be 13 digits long.");
//     cnicField.focus();
//     return false;
//   }

//   // Validate Phone Number
//   if (phoneField.value.length !== 11) {
//     alert("Your phone number should be 11 digits long.");
//     phoneField.focus();
//     return false;
//   }

//   // Additional validation logic for other fields...

//   // If all validations pass, submit the form

//   // let form = document.getElementById("myForm");
//   let elements = form.elements;
//   let unfilledFields = [];

//   for (let i = 0; i < elements.length; i++) {
//     let field = elements[i];

//     if (field.hasAttribute("required") && !field.value) {
//       unfilledFields.push(field);
//     }
//   }

//   if (unfilledFields.length === 0) {
//     return confirm("Are you sure you want to submit the form?" + skill.value);
//   } else {
//     unfilledFields[0].focus();
//     alert("Please fill in all required fields.");
//     return false;
//   }
// }
