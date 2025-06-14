# Message Decipher (Node.js)

**Message Decipher** is a Node.js script that performs both encoding and decoding of text files using classical ciphers. It uses a Caesar cipher to encode messages and an Atbash cipher to decode them.

## Features

- **Caesar Cipher Encoding**  
  - Reads from `message.txt`  
  - Shifts alphabetic characters by a user-defined number  
  - Saves output to `encoded-message.txt`

- **Atbash Cipher Decoding**  
  - Reads from `secret-message.txt`  
  - Reverses alphabetic characters (e.g., A ↔ Z, b ↔ y)  
  - Saves output to `decoded-message.txt`

- Preserves non-letter characters as-is
- Interactive command-line input using `sync-input`

## Requirements

- Node.js v14+
- `sync-input` package

Install the dependency:

   npm install sync-input

## Usage

1. Ensure `message.txt` and `secret-message.txt` exist in the script directory.
2. Run the script:

   node index.js

3. Enter a Caesar shift value when prompted.
4. Output will be written to `encoded-message.txt` and `decoded-message.txt`.

## Notes

- Caesar cipher shifts wrap around the alphabet (e.g., 'z' + 1 → 'a')
- Atbash cipher inverts the alphabet positions
