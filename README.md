

** Hill Cipher Encryption **
This project implements the Hill Cipher, an early cipher technique based on matrix multiplication. It was invented by Lester S. Hill in 1929. This implementation provides an interactive way to input a plaintext message, encrypt it using the Hill Cipher algorithm, and display the encrypted ciphertext.

 ** Features **
Text Input: Enter a message (plaintext) for encryption.

 + Matrix-Based Encryption: Encrypt the message using matrix multiplication based on the Hill cipher algorithm.

 + Handling Empty Input: The "Encrypt" button is disabled if the input is empty.

+ Automatic Padding: If the plaintext length is not a multiple of 3, it is padded with 'x' to make it divisible by 3 for Hill Cipher encryption.

 # Setup 
To use this implementation:

 + Clone this repository to your local machine.

 + Open the HTML file in a browser to see the interactive encryption tool.

bash

Copy
git clone [https://github.com/prosper615/Hill-Cipher-/tree/master]
 
cd Hill-Cipher-

open index.html

# How It Works 

 + Input Handling: The user inputs plaintext (a message). When the message is typed, the "Encrypt" button is automatically enabled or disabled based on whether the input is empty.

+ Button Click Event: When the "Encrypt" button is clicked, the message is processed and encrypted using the Hill cipher.

 + Padding: If the input length is not a multiple of 3, padding characters ('x') are added until the length is divisible by 3.

 + Encryption: The Hill Cipher encrypts the message by performing matrix multiplication on the message's characters, which are mapped to numeric values based on the alphabet (a=0, b=1, ..., z=25). The matrix operations are performed on 3x3 blocks of characters, and the result is transformed back into ciphertext.

Cipher Output: After encryption, the resulting ciphertext is displayed.
  

  # Example Usage
  
 + Enter a message in the input field (e.g., hello).

 + Press the "Encrypt" button to get the encrypted result.

+ If the length of the input is not divisible by 3, the algorithm will add padding characters ('x') to make it a multiple of 3.

    
__ There are some potential improvements and fixes to consider: __

 + Review how padding is handled for input lengths that aren't a multiple of 3 (currently, padding with 'x' could cause unintended behavior if the result isn't properly divisible by 3).

 + Improve the UI to provide feedback on errors or invalid inputs.

# Bugs 
The padding mechanism (x) could introduce problems for inputs that aren’t multiples of 3, such as when adding x creates an input that's still not a multiple of 3. For example, adding an 'x' to an input of length 13 would give 14, which still isn't divisible by 3.


 # Technology Used
 + HTML: To structure the input forms and display the results.

 + JavaScript/TypeScript: For implementing the Hill Cipher algorithm and handling user interactions.

+  CSS: Styling for the interactive elements and layout.
  
 * Any suggestions or improvements ? *
