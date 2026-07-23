// handle the data piece by piece
// nt loading the data everything at once
// read large files
// upload files
// downloading fies
// video/audio processing
// compression

import { Readable, Transform, Writable } from "node:stream";
import {pipeline} from "node:stream/promises"

// chunks

// here is my full 500mb files
// here is chunk1
// here is chunk 2
// here is chunk 3
// here is chunk 4
// here is chunk 5


// memeory efficient
// readable streams -> surce of data
// writable stream -> destination where the data is written
// transform stream -> read the data, change it and pass that forward

const readableStream = Readable.from([
    "hello ",
    "from ",
    "node.js ",
    "streams"
])

// callback(error, result)
const uppercaseTransform = new Transform({
    transform(chunk, encoding, callback){
        const text = chunk.toString();
        callback(null, text.toUpperCase())
    }
})

const writableStream = new Writable({
    write(chunk, encoding, callback){
        console.log('received chunk',chunk.toString());
    }
})

async function main():Promise<void>{
    try{
        await pipeline(readableStream, uppercaseTransform, writableStream)
        console.log("Stream completed")
    }catch(error){
        const msg = error instanceof Error ? error.message : "Unknown error"
        console.error("stream failed",msg);
    }
}

main();