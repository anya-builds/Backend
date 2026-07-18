import { error } from "node:console";
import { resolve } from "node:dns";

type User={
    id: number,
    name: string,
    role: "user" | "super-admin";
}
const users: User[]=[{
    id: 1,
    name: "Ankita",
    role:'super-admin'
},
{
    id:2,
    name:'john',
    role: 'user'
},{
    id:3,
    name:'Rahul',
    role:'user'
}];


// callback is function that is paassed through another function as  parameter
// callback(error, result)--> *** imp concepts -? claassic node js pattern

function findUserWithCallbck(
    userId: number,
    callbaack: (error: Error | null, user?: User)=> void
): void {
    setTimeout(()=>{
        // u are actual aapi cll
        const user = users.find(currentUser=> currentUser.id === userId)
        if(!user){
            callbaack(new Error(`user with id ${userId} was not found`))
            return;
        }
        callbaack(null, user)
    },500)
}

// findUserWithCallbck(3,(error, user)=>{
//     if(error){
//         console.log('callback error', error.message);
//         return;
//     }
//     console.log("callback result", user?.id, user?.name, user?.role);
// })

function findUserWithPromise(userId: number): Promise<User>  {

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
                const user = users.find(currentUser=> currentUser.id === userId)
                if(!user){
                    reject(new Error(`user with ${userId} data was not found`))
                    return
                }
                resolve(user)
        },1000)
    })
}
 async function findUserWithAsyncAwait(userId: number): Promise<void>{
    try{
        const user= await findUserWithPromise(userId)
        console.log('async/await', user.name);
    }catch(error){
        const message = error instanceof Error ? error.message : 'Unknown error'
        console.log("async/await", message);
    }
 }

// findUserWithPromise(100).then((user)=>{
//     console.log("promise result", user?.id, user?.name, user?.role)
// }).catch((error: Error)=>{
//     console.log("promise error", error.message)
// })

findUserWithAsyncAwait(100)