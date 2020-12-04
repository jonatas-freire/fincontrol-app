export const AuthService = (email, code) => 
    fetch('http://localhost:8080/api/v1/user/authenticate', {
        method: 'POST',
        body: JSON.stringify({
            "email": email,
            "code": code
        }),
        headers: {
            "Content-Type" : "application/json"
        }
    })