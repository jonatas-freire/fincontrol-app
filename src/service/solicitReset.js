export const SolicitResetService = (email) => 
    fetch('http://localhost:8080/api/v1/user/solicit/password', {
        method: 'POST',
        body: JSON.stringify({
            "email": email,
        }),
        headers: {
            "Content-Type" : "application/json"
        }
    })