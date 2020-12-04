export const ResetService = (email, code, password, confPassword) => 
    fetch('http://localhost:8080/api/v1/user/reset/password', {
        method: 'POST',
        body: JSON.stringify({
            "email" : email,
            "code": code,
            "password": password,
            "confPassword": confPassword
        }),
        headers: {
            "Content-Type" : "application/json"
        }
    })