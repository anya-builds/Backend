// user registered 
// send a welcome email
// write a log
// notify some other seervice

import { EventEmitter } from "node:events";

// emitt one event -> listener listen to this event, do something

// .on() -> register one lsitener
// .once() ->  register oone listener that runs only one time
// .emit() -> triggers an event and sends to the listeners

const appEvents = new EventEmitter()

type UserRegisterPayload = {
    id: number;
    email : string
}

appEvents.on("user:registered",(user: UserRegisterPayload)=>{
    console.log(`email listener: welcome email sent to this user ${user.email}`)
})

appEvents.on("user:registered", (user: UserRegisterPayload)=>{
    console.log(`log listener: user ${user.id} and email is ${user.email}`)
});

appEvents.once("app.started",()=> {
    console.log("once listener: app started");
})



function regsiterUser(): void{
    const user = {
        id: 1,
        email: 'ankitaarya@gmail.com'
    }
    console.log("user saved");

    appEvents.emit("user:registered", user)

    console.log("register user: event listeners completed.")
}

appEvents.emit("app.started");
appEvents.emit("app.started");
regsiterUser()