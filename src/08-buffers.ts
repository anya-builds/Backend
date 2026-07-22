// buffers - raw binary data
// binary data means - when u have ur data shared in bytes

// reading files
// receiveing http req bodies
// working with streams
// handling images, pdf files, vides
// encrypt and hashing

// string - human readable text
// buffer - raw bytes

const textBuffer = Buffer.from("Node")
console.log(textBuffer)

// N - 4e
// o-6f
// d-64

console.log(textBuffer.toString('utf-8'))

const engBuffer = Buffer.from("hello");
console.log(engBuffer.length)