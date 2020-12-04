export const DeleteTransactionService = (token, id) => 
    fetch('http://localhost:8080/api/v1/transaction/delete/' + id, {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + token
        }
    })