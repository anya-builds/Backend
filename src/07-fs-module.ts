 import path from "node:path"
 import fs from 'node:fs'
const DEMO_FOLDER_PATH=  path.join(process.cwd(),'file-system','fs-demo')
const SYNC_FILE_PATH = path.join(DEMO_FOLDER_PATH,'sync-note.txt')

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
    if(!fs.existsSync(DEMO_FOLDER_PATH))
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
    }catch(error{
        const message = error instanceof Error ? error.message : "Unknown Error"
        console.error("file system error", message);

    }
} 
main()