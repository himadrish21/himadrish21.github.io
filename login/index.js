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

