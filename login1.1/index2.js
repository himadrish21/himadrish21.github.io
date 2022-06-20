let tables_row = document.getElementById('row');
tables_row.innerHTML += `
        <td>${localStorage.getItem('FirstName')}</td>
        <td>${localStorage.getItem('LastName')}</td>
        <td>${localStorage.getItem('Email')}</td>
        <td>${localStorage.getItem('password')}</td>
        <br>
        `
