
let keys=document.querySelectorAll("button")
let input=document.querySelector('.input');
let str="";
let mpm=[];

document.querySelector('.x').innerHTML='*';

let btn=Array.from(keys);
btn.forEach((key)=>{
    key.addEventListener('click',(event)=>{
        if(event.target.innerHTML == '=')
        { str=eval(str)
            input.value=str;
        }
        else if(event.target.innerHTML == 'C')
        {        str=""
                  input.value=str;
        }
        else
        {
     str= str + (event.target).innerHTML;
     input.value=str;
        }
    });
})