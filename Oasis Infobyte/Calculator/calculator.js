let input1 = document.getElementById('input1')
let buttons = document.querySelectorAll('button')

let string =''

buttons.forEach(element =>{
    element.addEventListener('click', (b)=> {
        if(b.target.innerText == '='){
            string = String(eval(string))
            input1.value= string;
        }

        else if(  b.target.innerText == 'AC'){

             string =''
             input1.value = string;


        }
        else if(b.target.innerText == 'DEL'){
            string = string.substring(0,string.length-1)
            input1.value = string;
        }
        else if (b.target.id == 'both'){
            string = String(-eval(string))
            input1.value = string;
        }
        else{
            string += b.target.innerText
            input1.value = string
        }
    })
})