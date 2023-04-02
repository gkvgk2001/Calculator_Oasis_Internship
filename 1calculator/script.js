let string  =  " ";
let buttons = document.querySelectorAll('.button');

let input = document.getElementsByClassName('input')

Array.from(buttons).forEach((button) =>{
    button.addEventListener('click',(e) => {

        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string;
        }

        else if(e.target.innerHTML == 'DEL'){

            string = string.substring(0,string.length-1);
            document.querySelector("input").value = string;

        }

        else{
            console.log(e.target)

            string = string + e.target.innerHTML;

            document.querySelector('input').value = string;
        }    
    })

})


var icon = document.getElementById('icon');

icon.onclick = function(){
    document.body.classList.toggle('dark-theme');

    if(document.body.classList.contains('dark-theme')){
        icon.src = 'moon.png';
    }

    else{

        icon.src = "sun.png";

    }
}


// let history = document.getElementById('history');

// let hsr = string; 

// hist.onclick = function calculation(hsr){
//     para = document.createElement('p');

//     data = hsr +" = " + eval(hsr);

//     para.innerText = data;

//     history.appendChild(para);

//     return eval(hsr)
// }

