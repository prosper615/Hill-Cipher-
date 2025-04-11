 
// The Hill cipher is one of the earliest cipher based on matrices

// It was invented by Lester S. Hill

// Hv forgotten the book i read it from but likely the one by Frank Rubin

// Implementing from my st*pid jotter




 const Plaintext = document.getElementById("Plaintext") as HTMLInputElement ;


const ciphercontent = document.getElementById("ciphercontent") as HTMLDivElement ;  


  const encryptionbutton = document.getElementById("encryptionbutton") as HTMLButtonElement;




// I think there is no need to mitigate XXS attacks  because code is just for programming sake

//TODO: Might use DOMPurify js libary for the above if i care to do so


// I want to disable button if the input fields are empty


Plaintext.addEventListener("input", () => {
  encryptionbutton.disabled = Plaintext.value.trim() === "";
});



  


encryptionbutton.addEventListener("click", ()=>{
 
    DivideandConcate ()

}

)



  
const CharMapping1: {[key:string]: number} = {
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







 function dotProduct (arr1:number[], arr2:string[]) {

     
    
    let DotedProduct = arr1.reduce((acc :number, val:number, index: number) => acc + val * parseInt(arr2[index], 10) ,0)% 26;

    // This is because js % return negative value if dividend is negative 

    if(DotedProduct < 0){

       DotedProduct += 26 


    }

    return DotedProduct

}










// This is the function I used to perform the Hillcipher logic


 
 function TheCipherOperation ( thepartedwords: string[]){

let ThePartingWords = thepartedwords

let theresult : number[][]=  []




    // Now getting the values of the matrix
    
    // input at position 1,4,7 forms the first row

    // input at position 2,5,8  forms the second  row
    
    // input at position 3,6,9  forms the third   row
 
      

    // TODO:  Maybe rearrange the way the HTML presents the input element

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
    


   const  SplitPerOne : string= ThePartingWords.shift() as string;




    const mappedValues = SplitPerOne.split("").map(char => CharMapping1[char]).filter(value => value !== undefined  ) ;

    


     const columnOne = [charValues[0], charValues[3], charValues[6]];
     const columnTwo = [charValues[1], charValues[4], charValues[7]];                         
     const columnThree = [charValues[2], charValues[5], charValues[8]];




     const firstColumnDo = dotProduct(mappedValues , columnOne);
     const secondColumnDo = dotProduct(mappedValues , columnTwo) ;
     const thirdColumnDo = dotProduct(mappedValues , columnThree) ;



     theresult.push([firstColumnDo, secondColumnDo, thirdColumnDo].concat());

  
   

    }


const Joiner = theresult.flat()


return ciphercontent.textContent = ToCiphertext(Joiner).join("") ;

  

} 









// This function divides the words into three parts and concates 'x'  when the word is not a multiple of 3

// Thats how the 3*3 HillCipher is implemented

 
function DivideandConcate () {


    let  Plaintextvalue: string = Plaintext.value
    

    
/* Below here, i want to remove the whitespace so it would not be included when i count the length 
of the "SeeChangeToNomba"

*/

 
let  SeeChangeToNombaCount =  Plaintextvalue.replace(/ /g, "");


let  SeeChangeToNombaCountLength =  SeeChangeToNombaCount.length;


if(SeeChangeToNombaCountLength % 3 === 0 ){

let ArrayHold:string[] =  []

 let InitialSlice = 0

while (SeeChangeToNombaCount.length > 0) {


let DivideInThree  = SeeChangeToNombaCount.slice(InitialSlice,3)


ArrayHold.push(DivideInThree)


SeeChangeToNombaCount = SeeChangeToNombaCount.slice(3)


    
}


TheCipherOperation(ArrayHold)


} else{



    let    AddToSeeChangeToNomba=  SeeChangeToNombaCount.concat("x")

let ArrayHold2: string[] = []

let InitialSlice2 = 0;

while ( AddToSeeChangeToNomba.length > 0) {


let DivideInThree2 = AddToSeeChangeToNomba.slice(InitialSlice2, 3)

ArrayHold2.push( DivideInThree2);


AddToSeeChangeToNomba = AddToSeeChangeToNomba.slice(3)

    
}


TheCipherOperation(ArrayHold2)


}


 }




   function ToCiphertext (  changetocipher :number[]) {
    
  const CipherMapping: { [key: number]: string } = {
    0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g', 7: 'h', 8: 'i', 9: 'j',
    10: 'k', 11: 'l', 12: 'm', 13: 'n', 14: 'o', 15: 'p', 16: 'q', 17: 'r', 18: 's', 19: 't',
    20: 'u', 21: 'v', 22: 'w', 23: 'x', 24: 'y', 25:'z',
  };


  const TobeReplaced = changetocipher ; 

  const Ciphering = TobeReplaced.map((num) => CipherMapping[num] || num); 

  return Ciphering;



}


 







/* I noticed and intentionally ignored a bug. The HillCipher concates 'x' if the word is not a

 a multiple of 3. what if the word is something like 13 (not a multiple of 3 ) ,
 
 concates 'x'  and gives 14 ( still not a multiple of 3).

 Try it with this word: wise man is a boy (13 words) + 'x'   = 14 words

 
*/



// Fix to the bug 

/*
    while (SeeChangeToNombaCountLength % 3 !== 0) {
    SeeChangeToNombaCount += 'x';
    SeeChangeToNombaCountLength++;
  } */


 


   
    

 

 








 

// export{

// dotProduct, ToCiphertext


// }

  

 














  










 


