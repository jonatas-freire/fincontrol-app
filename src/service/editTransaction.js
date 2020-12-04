export const EditTransactionService = (token, id, amount, name, description, type) => 
    fetch('http://localhost:8080/api/v1/transaction/edit/' + id, {
        method: 'POST',
        body: JSON.stringify({
            "name": name, 
            "description":description, 
            "date":"2018-09-04T10:44:46", 
            "monthly": false, 
            "amount": amount, 
            "category": 0, 
            "type": type
       }),
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : "Bearer " + token
        }
    })