'use strict';

let penguinInput = document.querySelector('#penguinInput');
let penguinBtn = document.querySelector('#penguinBtn');

// Function to save value of input field
let getData = () => {
    let inputValue = penguinInput.value;
    getPenguin(inputValue);
}

// GET request
let getPenguin = (id) => {
    fetch(`http://localhost:8083/get/${id}`)
        .then((response) => {
            if (response.status !== 200) {
                console.error(`Status: ${response.status}`);
                return;
            }
            response.json()
                .then((data) => {
                    console.log(data[`${id}`]);
                })
        }).catch((error) => {
            console.error(`${error}`);
        })
}

// Grab parent div for card
let parentDiv = document.querySelector('#parentDiv');

// Function to create card
let createCard = (data) => {
    // Create elements
    let newCard = document.createElement('div');
    let newCardBody = document.createElement('div');
}

penguinBtn.addEventListener('click', getData);