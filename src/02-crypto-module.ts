import crypto from "node:crypto"

// built in node js module

//security related tasks
//creating random UUID, IDs
//creating secure token
//hashing data
// to verify of the data was not changed
//encrypt/decrypt

// crypto.randomUUID

// unique id
//user id, session id,order id

const requestId = crypto.randomUUID()

console.log(requestId)