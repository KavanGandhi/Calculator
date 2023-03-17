let string="";
let string1="";
let buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string=eval(string);
            document.querySelector('input').value= string;
        }
        else if(e.target.innerHTML == 'MC'){
            string1 = string;
            string="";
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'M+'){
           string = string + string1;
           document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'M-'){
            string = string - string1;
            document.querySelector('input').value = string;
         }
        else if(e.target.innerHTML == 'C'){
            string="";
            document.querySelector('input').value= string;
        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
        
    })
}); 