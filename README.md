




Hill Cipher Encryption
This project implements the Hill Cipher, an early cipher technique based on matrix multiplication. It was invented by Lester S. Hill in 1929 and is one of the earliest ciphers to use linear algebra for encryption. This implementation provides an interactive way to input a plaintext message, encrypt it using the Hill Cipher algorithm, and display the encrypted ciphertext.

Features
Text Input: Enter a message (plaintext) for encryption.

Matrix-Based Encryption: Encrypt the message using matrix multiplication based on the Hill cipher algorithm.

Handling Empty Input: The "Encrypt" button is disabled if the input is empty.

Automatic Padding: If the plaintext length is not a multiple of 3, it is padded with 'x' to make it divisible by 3 for Hill Cipher encryption.

Setup
To use this implementation:

Clone this repository to your local machine.

Open the HTML file in a browser to see the interactive encryption tool.

bash
Copy
git clone <repo_url>
cd <repo_folder>
open index.html
How It Works
Input Handling: The user inputs plaintext (a message). When the message is typed, the "Encrypt" button is automatically enabled or disabled based on whether the input is empty.

Button Click Event: When the "Encrypt" button is clicked, the message is processed and encrypted using the Hill cipher.

Padding: If the input length is not a multiple of 3, padding characters ('x') are added until the length is divisible by 3.

Encryption: The Hill Cipher encrypts the message by performing matrix multiplication on the message's characters, which are mapped to numeric values based on the alphabet (a=0, b=1, ..., z=25). The matrix operations are performed on 3x3 blocks of characters, and the result is transformed back into ciphertext.

Cipher Output: After encryption, the resulting ciphertext is displayed.

Key Functions
1. dotProduct()
This function calculates the dot product of two arrays (one representing the input matrix and the other the key matrix) and returns the result modulo 26 to ensure the result falls within the alphabet's range.

2. TheCipherOperation()
This function takes the input message, splits it into 3x3 chunks, and applies the Hill Cipher encryption to each chunk using the dot product. The resulting values are combined to produce the final ciphertext.

3. DivideandConcate()
This function handles dividing the input plaintext into 3-character chunks and pads it with 'x' if the length is not a multiple of 3.

4. ToCiphertext()
After applying the Hill Cipher algorithm, this function converts the numeric results back into characters, forming the final ciphertext.

5. CharMapping1
This mapping associates each letter of the alphabet (both uppercase and lowercase) to a numeric value, allowing the message to be transformed into a numerical matrix.

6. Event Listeners
Input Event: The "Encrypt" button is disabled if the input field is empty and enabled when there is text.

Click Event: The "Encrypt" button triggers the encryption process by calling the DivideandConcate() function.

Example Usage
Enter a message in the input field (e.g., hello).

Press the "Encrypt" button to get the encrypted result.

If the length of the input is not divisible by 3, the algorithm will add padding characters ('x') to make it a multiple of 3.

Input:
nginx
Copy
hello
Output (Ciphertext):
nginx
Copy
kewxa
To Do
There are some potential improvements and fixes to consider:

Review how padding is handled for input lengths that aren't a multiple of 3 (currently, padding with 'x' could cause unintended behavior if the result isn't properly divisible by 3).

Improve the UI to provide feedback on errors or invalid inputs.

Bugs
The padding mechanism (x) could introduce problems for inputs that aren’t multiples of 3, such as when adding x creates an input that's still not a multiple of 3. For example, adding an 'x' to an input of length 13 would give 14, which still isn't divisible by 3.

License
This project is open-source. Feel free to modify and improve upon it.

Technology Used
HTML: To structure the input forms and display the results.

JavaScript/TypeScript: For implementing the Hill Cipher algorithm and handling user interactions.

CSS: Styling for the interactive elements and layout.

Feel free to open issues or submit pull requests if you have any suggestions or improvements!
