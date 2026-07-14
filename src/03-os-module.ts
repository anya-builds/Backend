// os
// cpu infor
// memory
// home/temp dir

import * as os from 'node:os'
function runOsDemo(): void{
    console.log('platform',os.platform());
    console.log("architecture", os.arch());
    console.log('os type',os.type())
    console.log("os release",os.release());
    console.log("home directory", os.homedir());
    console.log("temp dir",os.tmpdir())
}

runOsDemo();