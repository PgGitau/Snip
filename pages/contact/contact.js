// (
// const form = document.getElementById('form');
// const firstName = document.getElementById('firstName');
// const lastName = document.getElementById('lastName');
// const email = document.getElementById('email');
// const number = document.getElementById('phone');
// const message = document.getElementById('message');
// const terms = document.getElementById('terms');

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     checkInput();
// });

// function checkInput() {
//     //get the values from the inputs
//     const firstnameValue = firstName.value.trim();
//     const lastnameValue = lastName.value.trim();
//     const emailValue = email.value.trim();
//     const numberValue = number.value.trim();
//     const messageValue = message.value.trim();
//     const termsValue = terms.value;

//     // firstname
//     if (firstnameValue === '') {
//         // show error and add error class using setErrorFor()
//         setErrorFor(firstName, 'First Name cannot be blank');
//         // scrollTo() to scroll to the error;
//         window.scrollTo(72, 100);
//     } else {
//         // add success class
//         setSuccessFor(firstName);
//     }

//     // last name
//     if (lastnameValue === '') {
//         // show error and add error class using setErrorFor()
//         setErrorFor(lastName, 'Last Name cannot be blank');
//         // scrollTo() to scroll to the error;
//         // window.scrollTo(72, 50);
//     } else {
//         // add success class
//         setSuccessFor(lastName);
//     }

//     // email
//     if (emailValue === '') {
//         // show error and add error class using setErrorFor()
//         setErrorFor(email, 'Email cannot be blank');
//         // scrollTo() to scroll to the error;
//         // window.scrollTo(72, 300);
//     } else {
//         // add success class
//         setSuccessFor(email);
//     }

//     // number
//     if (numberValue === '') {
//         // show error and add error class using setErrorFor()
//         setErrorFor(number, 'Phone number cannot be blank');
//         // scrollTo() to scroll to the error;
//         // window.scrollTo(72, 50);
//     } else {
//         // add success class
//         setSuccessFor(number);
//     }

//     // message
//     if (messageValue === '') {
//         // show error and add error class using setErrorFor()
//         setErrorFor(message, 'The message cannot be blank');
//         // scrollTo() to scroll to the error;
//         // window.scrollTo(72, 50);
//     } else {
//         // add success class
//         setSuccessFor(message);
//     }

//     // checkbox
//     if (termsValue) {
//         // add success class
//         setSuccessFor(terms);
//     } else {
//         // show error and add error class using setErrorFor()
//         setErrorFor(terms, 'You need to accept the terms to continue');
//         // scrollTo() to scroll to the error;
//         // window.scrollTo(72, 50);
//     }
// }

// // add error message and error class
// function setErrorFor(input, message) {
//     const formControl = input.parentElement // .form-control class
//     const small = formControl.querySelector('small');

//     // add error message inside small
//     small.innerText = message;

//     // add error class
//     formControl.className = 'form-control error';
// }

// // add success class
// function setSuccessFor(input) {
//     const formControl = input.parentElement // .form-control class
//     // add success class
//     formControl.className = 'form-control success';
// }

// // function to get the x and y coordinates for an element
// function getOffset(el) {
//     const rect = el.getBoundingClientRect();
//     return {
//       left: rect.left + window.scrollX,
//       top: rect.top + window.scrollY
//     };
// }
// // to be used in window.scrollTo() function
// console.log(getOffset(firstName).left); // x coord
// console.log(getOffset(firstName).top); // y coord


// )