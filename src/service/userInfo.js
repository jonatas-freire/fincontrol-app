export const UserInfoService = (token) => 
    fetch('http://localhost:8080/api/v1/user/info', {
        headers: {
            "Authorization" : "Bearer " + token
        }
    })