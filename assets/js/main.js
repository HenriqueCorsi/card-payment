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

document.querySelector('.cv-input').onmouseenter = () =>{
    document.querySelector('.card-front').style.transform = 
    'perspective(1000px) rotateY(-180deg)'
    document.querySelector('.card-front').style.zIndex = '0'
    document.querySelector('.card-back').style.transform = 
    'perspective(1000px) rotateY(0deg)'
    document.querySelector('.card-back').style.backfaceVisibility = 
    'hidden'
}

document.querySelector('.cv-input').onmouseleave = () =>{
    document.querySelector('.card-front').style.transform = 
    'perspective(1000px) rotateY(0deg)'
    document.querySelector('.card-back').style.transform = 
    'perspective(1000px) rotateY(180deg)'
    document.querySelector('.card-back').style.zIndex = '0'
}

document.querySelector('.cv-input').oninput = () =>{
    document.querySelector('.get-cv').innerText = 
    document.querySelector('.cv-input').value
}

