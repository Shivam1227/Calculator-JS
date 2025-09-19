let AllOperations = "";

const buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (button.innerHTML == '=') {
            // Replace π with Math.PI before evaluating
            AllOperations = AllOperations.replaceAll('π', Math.PI);
            
            try {
                AllOperations = eval(AllOperations);
                document.querySelector('.input').value = AllOperations;
            } catch (error) {
                document.querySelector('.input').value = "Error";
            }
        }

        else if(button.innerHTML == 'AC'){
            AllOperations = ""
            document.querySelector('.input').value = AllOperations;
        }
        else if(button.innerHTML == 'C'){
            AllOperations = document.querySelector('.input').value;
            AllOperations = AllOperations.slice(0, -1);
            document.querySelector('.input').value = AllOperations;
        }
        else if(button.innerHTML == 'π'){
            AllOperations = AllOperations + 'π';
            document.querySelector('.input').value = AllOperations;
        }
        else{
            AllOperations = AllOperations + button.innerHTML;
            document.querySelector('.input').value = AllOperations;
        }
    });


    window.addEventListener('onkeydown', (e) => {
        if (button.innerHTML == '=') {
            // Replace π with Math.PI before evaluating
            AllOperations = AllOperations.replaceAll('π', Math.PI);
            
            try {
                AllOperations = eval(AllOperations);
                document.querySelector('.input').value = AllOperations;
            } catch (error) {
                document.querySelector('.input').value = "Error";
            }
        }

        else if(button.innerHTML == 'AC'){
            AllOperations = ""
            document.querySelector('.input').value = AllOperations;
        }
        else if(button.innerHTML == 'C'){
            AllOperations = document.querySelector('.input').value;
            AllOperations = AllOperations.slice(0, -1);
            document.querySelector('.input').value = AllOperations;
        }
        else if(button.innerHTML == 'π'){
            AllOperations = AllOperations + 'π';
            document.querySelector('.input').value = AllOperations;
        }
        else{
            AllOperations = AllOperations + button.innerHTML;
            document.querySelector('.input').value = AllOperations;
        }
    });

})
