export const LoginService = (email, password) => 
    fetch('http://localhost:8080/api/v1/login', {
        method: 'POST',
        body: JSON.stringify({
            "email": email,
            "password": password
        }),
        headers: {
            "Content-Type" : "application/json"
        }
    })