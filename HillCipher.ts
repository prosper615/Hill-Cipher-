 



const  Plaintext = document.getElementById("Plaintext") as HTMLInputElement;


const encryptionbutton = document.getElementById("encryptionbutton") as HTMLButtonElement;



encryptionbutton.addEventListener("click", ()=>{
 

    /* Now am going to assign  numerical value to the alphabets and then change the to it's
    corresponding numerical value, like A or a = 1, Bor b=2 and so forth

    */


    let  Plaintextvalue: string = Plaintext.value

    
/* Below here, i want to remove the whitespace so it would not be included when i count the length 
of the "SeeChangeToNomba"

*/


let  SeeChangeToNombaCount =  Plaintextvalue.replace(/ /g, "");


let  SeeChangeToNombaCountLength =  SeeChangeToNombaCount.length;


if(SeeChangeToNombaCountLength % 3 === 0 ){


console.log("The plaintext is a multiple of 3") 



let ArrayHold:string[] =  []

 let InitialSlice = 0


while (SeeChangeToNombaCount.length > 0) {


let DivideInThree  = SeeChangeToNombaCount.slice(InitialSlice,3)


ArrayHold.push(DivideInThree)


SeeChangeToNombaCount = SeeChangeToNombaCount.slice(3)


    
}



console.log(ArrayHold)



// let ThePartingWords = ["pay", "Pro", "Ret"];

let ThePartingWords = ArrayHold;



const theresult = []


    // Now getting the values of the matrix
    
    // input at position 1,4,7 forms the first row

    // input at position 2,5,8  forms the second  row
    
    // input at position 3,6,9  forms the third   row
 
      

    // TODO:  Need to rearrange the way the HTML presents the input element

    const charValues = [
        ( document.getElementById("char1") as HTMLInputElement).value,
        ( document.getElementById("char2") as HTMLInputElement).value, 
        ( document.getElementById("char3") as HTMLInputElement).value,
        ( document.getElementById("char4") as HTMLInputElement).value,
        ( document.getElementById("char5") as HTMLInputElement).value,
        ( document.getElementById("char6") as HTMLInputElement).value,
        ( document.getElementById("char7") as HTMLInputElement).value, 
        ( document.getElementById("char8") as HTMLInputElement).value,
        ( document.getElementById("char9") as HTMLInputElement).value,
 
           
     ];
  



while(ThePartingWords.length > 0) {



   const  SplitPerOne = ThePartingWords.shift();


    const mappedValues = SplitPerOne.split("").map(char => CharMapping1[char]).filter(value => value !== undefined  ) ;

    


     const columnOne = [charValues[0], charValues[3], charValues[6]];
     const columnTwo = [charValues[1], charValues[4], charValues[7]];
     const columnThree = [charValues[2], charValues[5], charValues[8]];




     const firstColumnDo = dotProduct(mappedValues , columnOne);
     const secondColumnDo = dotProduct(mappedValues , columnTwo) ;
     const thirdColumnDo = dotProduct(mappedValues , columnThree) ;



     theresult.push([firstColumnDo, secondColumnDo, thirdColumnDo]);

  


    }



return console.log(theresult)








} else{




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




const CharMapping1 = {
    a: 0, A: 0,
    b: 1, B: 1,
    c: 2, C: 2,
    d: 3, D: 3,
    e: 4, E: 4,
    f: 5, F: 5,
    g: 6, G: 6,
    h: 7, H: 7,
    i: 8, I: 8,
    j: 9, J: 9,
    k: 10, K: 10,
    l: 11, L: 11,
    m: 12, M: 12,
    n: 13, N: 13,
    o: 14, O: 14,
    p: 15, P: 15,
    q: 16, Q: 16,
    r: 17, R: 17,
    s: 18, S: 18,
    t: 19, T: 19,
    u: 20, U: 20,
    v: 21, V: 21,
    w: 22, W: 22,
    x: 23, X: 23,
    y: 24, Y: 24,
    z: 25, Z: 25
};







function dotProduct (arr1, arr2) {

    return arr1.reduce((acc :number, val:number, index: number) => acc + val * arr2[index], 0) % 26;


}


console.log( dotProduct([15, 0, 24], [17, 21, 2]))





/*

const TestingArrayOp = document.getElementById("TestingArrayOp")   as HTMLButtonElement

TestingArrayOp.addEventListener("click", () => {

    let ThePartingWords = ["pay", "Pro", "Ret"];


const theresult = []


    // Now getting the values of the matrix
    
    // input at position 1,4,7 forms the first row

    // input at position 2,5,8  forms the second  row
    
    // input at position 3,6,9  forms the third   row
 
      

    // TODO:  Need to rearrange the way the HTML presents the input element

    const charValues = [
        ( document.getElementById("char1") as HTMLInputElement).value,
        ( document.getElementById("char2") as HTMLInputElement).value, 
        ( document.getElementById("char3") as HTMLInputElement).value,
        ( document.getElementById("char4") as HTMLInputElement).value,
        ( document.getElementById("char5") as HTMLInputElement).value,
        ( document.getElementById("char6") as HTMLInputElement).value,
        ( document.getElementById("char7") as HTMLInputElement).value, 
        ( document.getElementById("char8") as HTMLInputElement).value,
        ( document.getElementById("char9") as HTMLInputElement).value,
 
           
     ];
  



while(ThePartingWords.length > 0) {



   const  SplitPerOne = ThePartingWords.shift();


    const mappedValues = SplitPerOne.split("").map(char => CharMapping1[char]).filter(value => value !== undefined  ) ;

    


     const columnOne = [charValues[0], charValues[3], charValues[6]];
     const columnTwo = [charValues[1], charValues[4], charValues[7]];
     const columnThree = [charValues[2], charValues[5], charValues[8]];




     const firstColumnDo = dotProduct(mappedValues , columnOne);
     const secondColumnDo = dotProduct(mappedValues , columnTwo) ;
     const thirdColumnDo = dotProduct(mappedValues , columnThree) ;



     theresult.push([firstColumnDo, secondColumnDo, thirdColumnDo]);

  


    }



return console.log(theresult)



});



*/























    

 







const worder = ["cool",   "kind",   "best"]

// console.log( worder.shift())

while(worder.length > 0){

  let shifter = worder.shift()

  console.log( shifter)




}


 

 




















 






 

  


  /*


  const TestingArrayOp = document.getElementById("TestingArrayOp") as HTMLInputElement


TestingArrayOp.addEventListener("click", () => {

    

    // input at position 1,4,7 forms the first row

    // input at position 2,5,8  forms the second  row
    
    // input at position 3,6,9  forms the third   row
 
      

    // TODO:  Need to rearrange the way the HTML presents the input element

    const charValues = [
       ( document.getElementById("char1") as HTMLInputElement).value,
       ( document.getElementById("char2") as HTMLInputElement).value, 
       ( document.getElementById("char3") as HTMLInputElement).value,
       ( document.getElementById("char4") as HTMLInputElement).value,
       ( document.getElementById("char5") as HTMLInputElement).value,
       ( document.getElementById("char6") as HTMLInputElement).value,
       ( document.getElementById("char7") as HTMLInputElement).value, 
       ( document.getElementById("char8") as HTMLInputElement).value,
       ( document.getElementById("char9") as HTMLInputElement).value,

          
    ];





    
});


const arrayCarryNumber = ["15", "0", "24"];


*/












/*

// Function to calculate the dot product of two arrays
function dotProduct(arr1, arr2) {
    return arr1.reduce((acc, val, index) => acc + val * arr2[index], 0);
}

// Function to perform the Hill cipher calculation
function hillCipher(charValues, arrayCarryNumber) {
    const result = [];

    arrayCarryNumber.forEach((numStr) => {
        const cutFromArray = numStr.split("");

        const columnOne = [charValues[0], charValues[3], charValues[6]];
        const columnTwo = [charValues[1], charValues[4], charValues[7]];
        const columnThree = [charValues[2], charValues[5], charValues[8]];

        const firstColumnDo = dotProduct(cutFromArray, columnOne) % 26;
        const secondColumnDo = dotProduct(cutFromArray, columnTwo) % 26;
        const thirdColumnDo = dotProduct(cutFromArray, columnThree) % 26;

        result.push([firstColumnDo, secondColumnDo, thirdColumnDo]);
    });

    return result;
}

// Event listener for the button click
document.getElementById("TestingArrayOp").addEventListener("click", () => {
    const charValues = [
        document.getElementById("char1").value,
        document.getElementById("char2").value,
        document.getElementById("char3").value,
        document.getElementById("char4").value,
        document.getElementById("char5").value,
        document.getElementById("char6").value,
        document.getElementById("char7").value,
        document.getElementById("char8").value,
        document.getElementById("char9").value,
    ];

    const arrayCarryNumber = ["123", "523", "892", "246"];

    const result = hillCipher(charValues, arrayCarryNumber);

    console.log(result);
});


*/

 














  










 


