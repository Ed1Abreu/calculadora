
document.addEventListener('keypress', (event) => {
     switch (event.key) {
         case '1': document.querySelector('#resultado').innerHTML += 1 ;
            break;
         case '2': document.querySelector('#resultado').innerHTML += 2 ; 
            break;
         case '3': document.querySelector('#resultado').innerHTML += 3 ; 
            break;
         case '4': document.querySelector('#resultado').innerHTML += 4 ; 
            break;
         case '5': document.querySelector('#resultado').innerHTML += 5 ; 
            break;
         case '6': document.querySelector('#resultado').innerHTML += 6 ; 
            break;
         case '7': document.querySelector('#resultado').innerHTML += 7 ; 
            break;
         case '8': document.querySelector('#resultado').innerHTML += 8 ; 
            break;
         case '9': document.querySelector('#resultado').innerHTML += 9 ; 
            break;
         case '0': document.querySelector('#resultado').innerHTML += 0 ; 
            break;
         case '/': document.querySelector('#resultado').innerHTML += '/'; 
            break;
         case '-': document.querySelector('#resultado').innerHTML += '-'; 
            break;
         case '+': document.querySelector('#resultado').innerHTML += '+'; 
            break;
         case '*': document.querySelector('#resultado').innerHTML += '*'; 
            break;
         case '.': document.querySelector('#resultado').innerHTML += '.'; 
            break;
         case '!': fatorial(); 
            break;
         case 'C': document.querySelector('#resultado').innerHTML -= '1';
            break;
        
        case 'Enter': document.querySelector('#enviar').click();
            break;
         
     }
     
}) 
