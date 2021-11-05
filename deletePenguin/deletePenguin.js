'use strict';

let idInput = document.querySelector('#idInput');
let idBtn = document.querySelector('#idBtn');

let deleteData = () => {
    let idValue = idInput.value;
    deleteRequest(idValue);
}

let deleteRequest = (id) => {
    fetch(`http://localhost:8083/get/${id}`, {
        method: 'DELETE'
    })
        .then((response) => {
            if (response.status !== 200) {
                console.error(`Status: ${response.statusText}`);
                return;
            }
            console.log(response);
        })
}

idBtn.addEventListener('click', deleteData);