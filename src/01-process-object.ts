// env varibles
// commaand line arguments
// exit code
// process lifecycle events

// read backend port from env files
// read secrets - db urls, api keys, password, google search auth secret
// read cli arguments in scripts

//process.env

// import process from "node:process";

// const nodeEnv = process.env.NODE_ENV ?? "development";

// process.env values are always string r undefined
// const port = Number(process.env.PORT?? 3000)


// process.argv ->
// [
//     "/path/to/node",
//     "src/01-process-object.ts",
//     "start"
// ]
// process.argv[2]

const command = process.argv[2] ?? "start";
// fail flag
// crash flag

const shouldFail =  process.argv.includes("--fail")
const shouldCrash = process.argv.includes("--crash")

// do not start async here
// node is already shutting down
// final log, final cleanup

process.on("exit",(code)=>{
    console.log(`Process finished with exit code ${code}`)
});

function runApp():void{
    console.log({
        command,
    });
    if(shouldFail){
        console.log("Manual failure triggered with --fail flag");
    }   
    if(shouldCrash){
        console.log("Manual crash triggered with -- crash flag")
    }
}
runApp();


