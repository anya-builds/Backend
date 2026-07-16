// after some delay
// repeatedly after some interval - 2 seconds

// settimeout
// setintervaal
// cleartimeout
// clearinterval
// setimmediate
import { error } from 'node:console';
import {setTimeout as sleep} from 'node:timers/promises'
function runSetTimeoutExample(): void{
    console.log("1. setTimeout example started");

    setTimeout(()=> {
        console.log("2. this runs after 1 second");
    }, 1000);
    console.log("3. this run immediately. node doesn't wait");
}

function runClearTimeoutExample(): void{
    const timerId = setTimeout(()=> {
        console.log('this message will not run');
    }, 2000)
    // clearTimeout(timerId)
    console.log("4. cleartimeout cancelled the 2 second timer");

}

// setInterval is going to run the callbaack again and again after sme intervaal of time
function runSetIntervalExample(): void{
    let count=0;

    const intervalId = setInterval(()=>{
        count++

        console.log(`5. setInterval tick: ${count}`);

        if(count==3){
            clearInterval(intervalId)
            console.log("6. setInterval stopped");
        }
    }, 1000)
}

function runSetImmediateExample(): void{
    setImmediate(()=>{
        console.log("7. setImmediate callback ")
    });
    console.log("8. synchronous code after  setImmediate")
}

async function runPromiseTimerExample(): Promise<void>{
    console.log("9. waiting for promise based timer");
    await sleep(5500);
    console.log("10. promise based timer finishes after 1.5 seconds")
}

function runTimerDemo(): void {
    runSetTimeoutExample();
    runClearTimeoutExample();
    runSetIntervalExample();
    runSetImmediateExample();
}
runTimerDemo();

runPromiseTimerExample().catch((error: unknown)=>{
    console.error("timer based demo failed", error);
})