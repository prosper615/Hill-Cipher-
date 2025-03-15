






const Typeshit : string = " I love to software engineering and hacking on cool stufs";


console.log(Typeshit);




    const EnterTheMatrice = document.getElementById("EnterTheMatrice") as HTMLInputElement;


    const MatriceInputs = document.getElementById("MatriceInputs") as HTMLElement;




    EnterTheMatrice.addEventListener('focus', () => {
        
        MatriceInputs.classList.remove('hidden');

        document?.getElementById('char1') ?.focus();


    });


    EnterTheMatrice.addEventListener('blur', () => {
        // Optional: Hide the character inputs when the trigger input loses focus
        // characterInputs.classList.add('hidden');
    });



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


            if (keydowntarget.key === 'Backspace' && index > 0 && ! keydowntarget.value) {

                charInputs[index - 1].focus();


            }
        });  
    });

