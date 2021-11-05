'use strict';

let nameInput = document.querySelector('#nameInput');
let ageInput = document.querySelector('#ageInput');
let happyFeetInput = document.querySelector('#happyFeetInput');
let createBtn = document.querySelector('#createBtn');

// Saves the values of the input fields
let postData = () => {
    let nameValue = nameInput.value;
    let ageValue = ageInput.value;
    let happyFeetValue = happyFeetInput.value;
    let newPenguin = {
        name: nameValue,
        age: ageValue,
        happyFeet: happyFeetValue
    };
    // Run fetch function
    postFetch(newPenguin);
}

let postFetch = (object) => {
    fetch('http://localhost:8083/createPenguin', {
        method: 'POST',
        headers: {
            "Content-type": "application/JSON"
        },
        body: JSON.stringify(object)
    })
        .then((response) => {
            if (response.status !== 201) {
                console.error(`Status is: ${response.status}`);
                return;
            }
            response.json()
                .then((data) => {
                    console.log(data);
                })
        })
}

createBtn.addEventListener('click', postData);