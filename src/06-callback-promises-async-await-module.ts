import { error } from "node:console";

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

findUserWithCallbck(3,(error, user)=>{
    if(error){
        console.log('callback error', error.message);
        return;
    }
    console.log("callback result", user?.id, user?.name, user?.role);
})