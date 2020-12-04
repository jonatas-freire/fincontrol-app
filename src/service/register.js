export const RegisterService = (email, name, password) => 
    fetch('http://localhost:8080/api/v1/user/signup', {
        method: 'POST',
        body: JSON.stringify({
            "email" : email,
            "name": name,
            "password": password
        }),
        headers: {
            "Content-Type" : "application/json"
        }
    })