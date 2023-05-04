'use strict'
const fs = require('fs');
const util = require('./utility')
const {hash, readFile, writeFile} = require("./utility");
const {createHash} = require("crypto");


    function passwordjs() {

        // if (process.argv.length != 5) return 'false';

        var filename = process.argv[2]
        var email = process.argv[3]
        var password = process.argv[4]

        function splitPass(password) {
            let data = readFile(password)

            let passes = [];
            for (let i = 0; i < data.length; i++) {
                let doc = data[i].split('\n')

                passes.push(doc[0])
            }
            return passes
        }

        try {
            let variable = [];
            for (let i = 0; i < 8; i++) {
                let newp = hash(password[i])
                variable.push(newp)
            }
            let data = splitPass('newfile.txt')


            let x = 0;
            while(x < data.length){
                let b = false;
                if(variable[x] === data[x]) {

                    b = true;
                }else b = false
                x++
            }
            return b;
        }catch (err){
            console.log(err)
        }

        // if(password == 'bestpassword'){
        //     return true
        // } else return false
    }

if (require.main === module) {
    console.log(passwordjs()) // print out true or false
}


module.exports = passwordjs();

// try {
//     function splitPass(password) {
//         let data = readFile(password)
//
//         let passes = [];
//         for (let i = 0; i < data.length; i++) {
//             let doc = data[i].split('\n')
//
//             passes.push(doc[0])
//         }
//         return passes
//     }
//     let mep = splitPass('../newfile.txt')
//     let variable = [];
//     for (let i = 0; i < mep.length; i++) {
//         let newp = hash(mep[i])
//         variable.push(newp)
//     }
//     console.log(variable)
// }catch (err){
//     console.log(err)
// }

