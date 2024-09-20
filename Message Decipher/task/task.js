const input = require('sync-input');
// We have imported the 'sync-input' package for you.
// You will use this in later stages.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));
const fs = require('node:fs');

    fs.readFile('secret-message.txt', 'utf8', (err, data) => {

        let decodedMessage = '';
        for (let i = 0; i < data.length; i++) {
            let char = data[i];
            if (char.match(/[a-z]/i)) {
                let code = data.charCodeAt(i);
                if (code >= 65 && code <= 90) {
                    char = String.fromCharCode(90 - (code - 65));
                } else if (code >= 97 && code <= 122) {
                    char = String.fromCharCode(122 - (code - 97));
                }
            }
            decodedMessage += char;
        }
        console.log('Finished decoding the file');

        fs.writeFile('decoded-message.txt', decodedMessage, (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('Finished writing the file');
        }
    );
        fs.readFile('message.txt', 'utf8', (err, data) => {
            let encodedMessage = '';
            let shift = Number(input("Enter the shift number: "));
            for (let i = 0; i < data.length; i++) {
                let char = data[i];
                if (char.match(/[a-z]/i)) {
                    let code = data.charCodeAt(i);
                    if (code >= 65 && code <= 90) {
                        char = String.fromCharCode((code - 65 + shift) % 26 + 65);
                    } else if (code >= 97 && code <= 122) {
                        char = String.fromCharCode((code - 97 + shift) % 26 + 97);
                    }
                }
                encodedMessage += char;
            }
            console.log('Finished encoding the file');
            fs.writeFile('encoded-message.txt', encodedMessage, (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('Finished writing the file');
            });
            console.log('Finished writing the file');
        });


    });