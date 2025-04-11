




/*

I'm writing tests without using Jest due to compatibility issues.

Jest doesn't fully support ES modules, causing issues when using default CommonJS.

I've had trouble with importing and exporting files due to TypeScript configuration issues.

After experimenting with the tsconfig, I've decided to write the functions directly in JavaScript.

*/


/* have already tested and verified on the dom via a pen calculated operation but 

 also want to do so with code   */



function TestdotProduct(arr1, arr2) {

  const DotedProduct = arr1.reduce(function (acc, val, index) { return acc + val * parseInt(arr2[index], 10) }, 0)% 26 ;
  // This is because js % return negative value if dividend is negative 
  if (DotedProduct < 0) {

      DotedProduct += 26;

  }

  return DotedProduct;

}






  function DoTest (thedescription, callback){


    try {

      callback()
      console.log( ` Passed: ${thedescription}`)
      
      
        
      } catch (error) {
      
        console.log( ` Failed: ${thedescription}`)
        
      }




  }
 




function assertit ( thecondition, errormessage ){

if(!thecondition){


throw new Error(errormessage)



}


  }









  DoTest(" This should perform the dot product of the value provided ", ()=>{


const Value1 = [ 1, 2 ,3 ]

const Value2 = ["4" , "5",  "6" ]


const dotProduct_result =  TestdotProduct([1,2,3], ["4" , "5",  "6" ])


assertit( dotProduct_result ==6,"Expected result of dot product should be 32" )


    
  }


  )




  DoTest("This should handle empty arrays", () => {
    const input1 = [];
    const input2 = [];
    const result = TestdotProduct(input1, input2);
    assertit(result === 0, `Expected 0 but got ${result}`);
  });




  function TestToCiphertext(changetocipher) {
    var CipherMapping = {
        0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g', 7: 'h', 8: 'i', 9: 'j',
        10: 'k', 11: 'l', 12: 'm', 13: 'n', 14: 'o', 15: 'p', 16: 'q', 17: 'r', 18: 's', 19: 't',
        20: 'u', 21: 'v', 22: 'w', 23: 'x', 24: 'y', 25: 'z',
    };
    var TobeReplaced = changetocipher;
    var Ciphering = TobeReplaced.map(function (num) { return CipherMapping[num] || num; });
    return Ciphering;
  }




  DoTest("This should convert numbers to corresponding ciphertext letters", () => {
    const input = [0, 1, 2, 3, 4, 25];
    const expectedOutput = ['a', 'b', 'c', 'd', 'e', 'z'];
    const result = TestToCiphertext(input);
    assertit(JSON.stringify(result) === JSON.stringify(expectedOutput), `Expected ${JSON.stringify(expectedOutput)} but got ${JSON.stringify(result)}`);
  });




  DoTest("This should leave numbers outside the range of 0-25 unchanged", () => {
    const input = [0, 1, 2, 26, 27];
    const expectedOutput = ['a', 'b', 'c', 26, 27];
    const result = TestToCiphertext(input);
    assertit(JSON.stringify(result) === JSON.stringify(expectedOutput), `Expected ${JSON.stringify(expectedOutput)} but got ${JSON.stringify(result)}`);
  });




   



// Below commented is the jest testing i initailly planned to use 


// I would like to come back to it and really know why my configurations doesn't compat with jest

 


/*


describe('dotProduct function', () => {
  
  it('should return the correct dot product modulo 26', () => {
    const arr1 = [1, 2, 3];
    const arr2 = ["4", "5", "6"];
    
    // (1 * 4 + 2 * 5 + 3 * 6) % 26 = (4 + 10 + 18) % 26 = 32 % 26 = 6
    const result = dotProduct(arr1, arr2);
     
    expect(result).toBe(6);
  });

  it('should return 0 when all values are zero', () => {
    const arr1 = [0, 0, 0];
    const arr2 = ["1", "2", "3"];
    
    // (0 * 1 + 0 * 2 + 0 * 3) % 26 = 0 % 26 = 0
    const result = dotProduct(arr1, arr2);
    
    expect(result).toBe(0);
  });

  it('should handle larger values correctly', () => {
    const arr1 = [10, 20, 30];
    const arr2 = ["5", "5", "5"];
    
    // (10 * 5 + 20 * 5 + 30 * 5) % 26 = (50 + 100 + 150) % 26 = 300 % 26 = 14
    const result = dotProduct(arr1, arr2);
    
    expect(result).toBe(14);
  });


  
  
  it('should handle negative values correctly', () => {
    const arr1 = [-1, -2, -3];
    const arr2 = ["4", "5", "6"];
    
    // (-1 * 4 + -2 * 5 + -3 * 6) % 26 = (-4 + -10 + -18) % 26 = -32 % 26 = 20
    const result = dotProduct(arr1, arr2);
    
    expect(result).toBe(20);
  });

});





// Now am testing the ToCiphertext function to check if it really maps the number to alphabets correctly



describe('ToCiphertext function', () => {
  
  it('should map numbers 0-25 to corresponding letters a-z', () => {

    const input = [0, 1, 2, 3, 25]; // Should map to ['a', 'b', 'c', 'd', 'z']

    const result = ToCiphertext(input);

    expect(result).toEqual(['a', 'b', 'c', 'd', 'z']);

  });


  it('should handle numbers outside the 0-25 range by returning the number itself', () => {
     
    const input = [30, 50, 0, 2]; // Numbers 30, 50 should remain as they are, others map

    const result = ToCiphertext(input);

    expect(result).toEqual([30, 50, 'a', 'c']);

  });

  it('should return an empty array if input is empty', () => {

    const input: number[] = []; // Empty array should return an empty array

    const result = ToCiphertext(input);

    expect(result).toEqual([]);

  });

  it('should handle a single number in the array', () => {

    const input = [0]; // Should map to ['a']

    const result = ToCiphertext(input);

    expect(result).toEqual(['a']);

  });


  it('should return the same array if all numbers are out of range', () => {
     
    const input = [30, 40, 100]; // None of these should map to letters, they should stay the same

    const result = ToCiphertext(input);

    expect(result).toEqual([30, 40, 100]);

  });

});


 /*

describe("Plaintext input listener", () => {

    let PlaintextElement : HTMLInputElement ;

    let encryptionButtonElement : HTMLButtonElement;
  
    beforeEach(() => {
      
      document.body.innerHTML = `
        <input id="Plaintext" type="text" />
        <button id="encryptionbutton" disabled>Encrypt</button>
      `;
  
      
      PlaintextElement = document.getElementById('Plaintext') as HTMLInputElement;

      encryptionButtonElement = document.getElementById('encryptionbutton') as HTMLButtonElement;

    });
  
    it("should disable the encryption button when input is empty", () => {

      
      PlaintextElement.value = '';

      PlaintextElement.dispatchEvent(new Event('input')); 
  
      
      expect(encryptionButtonElement.disabled).toBe(true);
    });
  
    it("should enable the encryption button when input is not empty", () => {
       
      PlaintextElement.value = 'Some text';

      PlaintextElement.dispatchEvent(new Event('input')); 
  
    
      expect(encryptionButtonElement.disabled).toBe(false);
       
    });

  });


  */