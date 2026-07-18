type User=[{
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
)