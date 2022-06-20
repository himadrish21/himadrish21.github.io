

// THIS WILL COLLECT THE INPUT FORM THE FORM 
let form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    let FirstName = document.getElementById('FirstName').value;
    console.log(FirstName);
    let LastName = document.getElementById('LastName').value;
    let Email = document.getElementById('Email').value;
    console.log(Email);
    let password = document.getElementById('password').value;
    console.log(password);
    e.preventDefault()
    localStorage.setItem('FirstName', `${FirstName}`);
    localStorage.setItem('LastName', `${LastName}`)
    localStorage.setItem('Email', `${Email}`)
    localStorage.setItem('password', `${password}`)
})

//  I NEED TO DISPLAY THE DATA IN INDEX2.HTML BUT I AM GETTING NULL VAL WHEN I INCULE THIS CODE BELLOW IN THIS JS FILE



// let tables_row = document.getElementById('row');
// tables_row.innerHTML += `
//         <td>${localStorage.getItem('FirstName')}</td>
//         <td>${localStorage.getItem('LastName')}</td>
//         <td>${localStorage.getItem('Email')}</td>
//         <td>${localStorage.getItem('password')}</td>
//         <br>
//         `

