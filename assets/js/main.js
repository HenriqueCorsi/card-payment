document.querySelector('.input-number-card').oninput = () =>{
    document.querySelector('.card-number').innerText = 
    document.querySelector('.input-number-card').value;
}

document.querySelector('.input-holder-card').oninput = () =>{
    document.querySelector('.card-name').innerText = 
    document.querySelector('.input-holder-card').value;
}

document.querySelector('.month-input').oninput = () =>{
    document.querySelector('.mm').innerText = 
    document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () =>{
    document.querySelector('.yy').innerText = 
    document.querySelector('.year-input').value;
}