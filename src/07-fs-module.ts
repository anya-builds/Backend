 import path from "node:path"
 import fs from 'node:fs'
import { resolve } from "node:dns"
const DEMO_FOLDER_PATH=  path.join(process.cwd(),'file-system','fs-demo')
const SYNC_FILE_PATH = path.join(DEMO_FOLDER_PATH,'sync-note.txt')
const CALLBACK_FILE_PATH= path.join(DEMO_FOLDER_PATH,"callback-note.txt")
const PROMISE_FILE_PATH=path.join(DEMO_FOLDER_PATH,"promise-note.txt")

type fileResult={
    style: string,
    fileName: string,
    content: string;
    sizeBytes: number
}
// fs- file system
// create folder
// write files
// read files
// check filesinformation
// delete files

// sync apis: fs.readFileSync
// callback api
//  promise api

// small startup scripts
// build scripts
// local demos
// not good or even bad practices
// http req hndlers
// high traffic apis
// background apis

function ensureDemoFolderExists(): void{
    if(!fs.existsSync(DEMO_FOLDER_PATH)){
        fs.mkdirSync(DEMO_FOLDER_PATH,{recursive: true})
    }
}
function runSyncExample():  fileResult{
    // wriite content to a file
    fs.writeFileSync(SYNC_FILE_PATH,"created using sync fs",'utf-8')

    fs.appendFileSync(SYNC_FILE_PATH,"Appended using sync fs ",'utf-8')

    const content=fs.readFileSync(SYNC_FILE_PATH,'utf-8')
    const stats = fs.statSync(SYNC_FILE_PATH);

    return {
        style: "sync",
        content,
        fileName: path.basename(SYNC_FILE_PATH),
        sizeBytes: stats.size,
    }

}

async function main(): Promise<void>{
    try{
        ensureDemoFolderExists()
        const syncResult = runSyncExample();
        console.log(syncResult)
    } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown Error";
    console.error("File system error:", message);
}
} 
// main()

function runCallbackExample(): Promise<fileResult>{
    return new Promise((resolve, reject)=>{
        fs.writeFile(
            CALLBACK_FILE_PATH,
            "created using callback fs",
            "utf-8",
            (writeError)=>{
                if(writeError){
                    reject(writeError)
                    return
                }
                fs.appendFile(
                    CALLBACK_FILE_PATH,
                    "Append using callback fs ",
                    "utf-8",
                    (appendError)=> {
                        reject(appendError)
                        return
                    }

                )
            }
        )
    })
}