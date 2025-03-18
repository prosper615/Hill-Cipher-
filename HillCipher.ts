






const Typeshit : string = " I love to software engineering and hacking on cool stufs";


console.log(Typeshit);




    // const EnterTheMatrice = document.getElementById("EnterTheMatrice") as HTMLInputElement;


    const MatriceInputs = document.getElementById("MatriceInputs") as HTMLElement;


    MatriceInputs.style.display = 'hidden';



/*
    EnterTheMatrice.addEventListener('focus', () => {
        
        MatriceInputs.classList.remove('hidden');

        document?.getElementById('char1') ?.focus();


    });

   


    EnterTheMatrice.addEventListener('blur', () => {
        // Optional: Hide the character inputs when the trigger input loses focus
        // characterInputs.classList.add('hidden');
    });

     */



    const Check : string = "Love blockchain engineering";

    console.log(Check)




const  Plaintext = document.getElementById("Plaintext") as HTMLInputElement;


    const charInputs = document.querySelectorAll('.char-input') as NodeListOf<HTMLInputElement>;

    charInputs.forEach((input, index) => {

        input.addEventListener('input', (event) => {

            const target =  event.target as HTMLInputElement

            if (target.value.length === 1 && index < charInputs.length - 1) {

                charInputs[index + 1].focus();

            }
        });



        input.addEventListener('keydown', (event) => {


            const keydowntarget = event.target as HTMLInputElement

            const Keydownkey = event.key


            // This is having some anamalous behaviour which i would come back to later

            if (Keydownkey === 'Backspace' && index > 0 && !keydowntarget.value) {

                charInputs[index - 1].focus();


            }
        });  
    });




    // Now it seems like am going to write  a function to carry out the task in my mind

    // I would write a function that would take in the plaintext and the key and return the encrypted text

    // The key would be a 3*3 matrix, which means the cipher text would be divided into 3 parts/words 
    // before encryption

    // If the plaintext is not a multiple of 3, then we would add some random characters to make it a multiple of 3






    /* Now it's time to get the values of the matrix, which would be used for the multiplication of the plaintexts */








const encryptionbutton = document.getElementById("encryptionbutton") as HTMLButtonElement;



encryptionbutton.addEventListener("click", ()=>{





    // TODO:  Need to rearrange, if i feel like later the way the HTML presents the input elements

    /* From the way i arranged the assumed matrix input element

input at position 1,4,7 forms the first row

input at position 2,5,8  forms the second  row

  input at position 3,6,9  forms the third   row


    */


  const char1 = document.getElementById( "char1")  as HTMLInputElement

  const char2 = document.getElementById( "char2")  as HTMLInputElement

  const char3 = document.getElementById( "char3")  as HTMLInputElement

  const char4 = document.getElementById( "char4")  as HTMLInputElement

  const char5 = document.getElementById( "char5")  as HTMLInputElement

  const char6= document.getElementById( "char6")  as HTMLInputElement

  const char7 = document.getElementById( "char7")  as HTMLInputElement

  const char8 = document.getElementById( "char8")  as HTMLInputElement

  const char9 = document.getElementById( "char9")  as HTMLInputElement


  




  console.log( char1.value)

  console.log( char2.value)

  console.log( char3.value)

  console.log( char4.value)

  console.log( char5.value)

  console.log( char6.value)

  console.log( char7.value)

  console.log( char8.value)

  console.log( char9.value)



    /* Now am going to assign  numerical value to the alphabets and then change the to it's
    corresponding numerical value, like A or a = 1, Bor b=2 and so forth

    */
    let  Plaintextvalue: string = Plaintext.value

   const TheReplaced:  RegExp = new RegExp(/[a-z]/gi )
    
 let  ChangeToNomba = Plaintextvalue.replace(TheReplaced, (Nomba)=>{





switch (Nomba) {

    case "a": 
    case "A":
    return 0;


    case "b": 
    case "B":
    return 1;



    case "c": 
    case "C":
    return 2;



    case "d": 
    case "D":
    return 3;


    case "e": 
    case "E":
    return 4;


    case "f": 
    case "F":
    return 5;

    case "g": 
    case "G":
    return 6;


    case "h": 
    case "H":
    return 7;



    case "i": 
    case "I":
    return 8;


    case "j": 
    case "J":
    return 9;



    case "k": 
    case "K":

    return 10;



    case "l": 
    case "L":

    return 11;



    case "m": 
    case "M":
    return 12;


    case "n": 
    case "N":
    return 13;


    case "o": 
    case "O":
    return 14;



    case "p": 
    case "P":
    return 15;



    case "q": 
    case "Q":
    return 16;



    case "r": 
    case "R":

    return 17;



    case "s": 
    case "S":
    return 18;



    case "t": 
    case "T":
    return 19;



    case "u": 
    case "U":
    return 20;



    case "v": 
    case "V":
    return 21;


    case "w": 
    case "W":
    return 22;


    case "x": 
    case "X":
    return 23;


    case "y": 
    case "Y":
    return 24;


    case "z": 
    case "Z":
    return 25;


    
    default:


    return Nomba
        
}






})



const SeeChangeToNomba = ChangeToNomba


/* Below here, i want to remove the whitespace so it would not be included when i count the length 
of the "SeeChangeToNomba"

*/


/* FixMe: lol i just wanted to use the "FixMe" statement, funny enough i just learnt it is a better way to
tell your fellow dev u want to fix an issue. Read it on Airbnb Js guildliness. Never mind if i don't really
follow the guildlines.  Soon I would adhere to the standards

*/

let  SeeChangeToNombaCount = SeeChangeToNomba.replace(/ /g, "");


let  SeeChangeToNombaCountLength =  SeeChangeToNombaCount.length;


if(SeeChangeToNombaCountLength % 3 === 0 ){


console.log("The plaintext is a multiple of 3");



let ArrayHold:string[] =  []

 let InitialSlice = 0


while (SeeChangeToNombaCount.length > 0) {


let DivideInThree  = SeeChangeToNombaCount.slice(InitialSlice,3)


ArrayHold.push(DivideInThree)


SeeChangeToNombaCount = SeeChangeToNombaCount.slice(3)


    
}



console.log(ArrayHold)




} else{



console.log( "Am a blockchain wizard")


    /* Same thing should just happen the difference is just that I
    added the lettter x to pad the word to be a  multiple of 3, when it's not
    
    This is just a rule in Hill Cipher encryption.

    So am gonna cocatenate with the x, so this means am gonna get the equivaalent of it in numbers


    */


    let    AddToSeeChangeToNomba=  SeeChangeToNombaCount.concat("x")


    console.log(AddToSeeChangeToNomba)

console.log("I need to concatenate something")

let ArrayHold2: string[] = []

let InitialSlice2 = 0;

while ( AddToSeeChangeToNomba.length > 0) {


let DivideInThree2 = AddToSeeChangeToNomba.slice(InitialSlice2, 3)

ArrayHold2.push( DivideInThree2);


AddToSeeChangeToNomba = AddToSeeChangeToNomba.slice(3)

    
}




console.log( ArrayHold2)




}






}




)




const Testing = document.getElementById("Testing") as HTMLButtonElement;


Testing.addEventListener( "click" , ()=>{

// TODO:  Need to rearrange, if i feel like later the way the HTML presents the input elements

    /* From the way i arranged the assumed matrix input element

input at position 1,4,7 forms the first row

input at position 2,5,8  forms the second  row

  input at position 3,6,9  forms the third   row


    */


    const char1 = document.getElementById( "char1")  as HTMLInputElement

    const char2 = document.getElementById( "char2")  as HTMLInputElement

    const char3 = document.getElementById( "char3")  as HTMLInputElement

    const char4 = document.getElementById( "char4")  as HTMLInputElement

    const char5 = document.getElementById( "char5")  as HTMLInputElement

    const char6= document.getElementById( "char6")  as HTMLInputElement

    const char7 = document.getElementById( "char7")  as HTMLInputElement

    const char8 = document.getElementById( "char8")  as HTMLInputElement

    const char9 = document.getElementById( "char9")  as HTMLInputElement


    console.log( char1.value)

    console.log( char2.value)

    console.log( char3.value)

    console.log( char4.value)

    console.log( char5.value)

    console.log( char6.value)

    console.log( char7.value)

    console.log( char8.value)

    console.log( char9.value)


    // Testing out somethin here again


    let ArrayCarryNumber = [   "123", "246",  "369" ]


     console.log(ArrayCarryNumber.join(,))





})



 


