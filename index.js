// Add your code here


function submitData(name, email) {
    const formData = {
        name,
        email,
    };

    const configurationObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
    }
    return fetch('http://localhost:3000/users', configurationObject)
        .then(response =>response.json())
        .then(data => {
            document.body.textContent = data.id;
        })

        .catch(error => {
            alert('Bad things! failed to execute!');
            document.body.textContent = error.message;
        })

}
 