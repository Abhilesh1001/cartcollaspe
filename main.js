let handleClickDisabled = false;
let handleClickDisabled2 = false;
let handleClickDisabled3 = false;

document.getElementById('container1').addEventListener('click', () => {

    let element1 = document.getElementsByClassName('firstHidden')[0];
    let element3 = document.getElementsByClassName('thirdHidden')[0];
    let element2 = document.getElementsByClassName('secondHidden')[0];
    
    if(element1.style.display == 'block'){
        handleClickDisabled = true;
    }
    handleClickDisabled2 = false
    handleClickDisabled3 = false

    if (!handleClickDisabled) {
       
        if (element1.style.display === 'none') {
            element1.style.display = 'block';
        } else {
            element1.style.display = 'none';
        }

        element2.style.display = 'none';
        element3.style.display = 'none';
        document.getElementById('radio1').checked = true;
        
    }
});



document.getElementById('container2').addEventListener('click', () => {

    let element1 = document.getElementsByClassName('firstHidden')[0];
    let element3 = document.getElementsByClassName('thirdHidden')[0];
    let element2 = document.getElementsByClassName('secondHidden')[0];
    handleClickDisabled = false
    handleClickDisabled3 = false

    if(element2.style.display == 'block'){
        handleClickDisabled2 = true;
    }

    if (!handleClickDisabled2) {

        if (element2.style.display === 'none') {
            element2.style.display = 'block';
        } else {
            element2.style.display = 'none';
        }

        element1.style.display = 'none';
        element3.style.display = 'none';
        document.getElementById('radio2').checked = true;
    }
});


document.getElementById('container3').addEventListener('click', () => {

    let element1 = document.getElementsByClassName('firstHidden')[0];
    let element3 = document.getElementsByClassName('thirdHidden')[0];
    let element2 = document.getElementsByClassName('secondHidden')[0];
    
    handleClickDisabled = false
    handleClickDisabled2 = false

    if(element3.style.display == 'block'){
        handleClickDisabled3 = true;
    }

    if (!handleClickDisabled3) {
        console.log('ok');
       

        if (element3.style.display === 'none') {
            element3.style.display = 'block';
        } else {
            element3.style.display = 'none';
        }

        element2.style.display = 'none';
        element1.style.display = 'none';
        document.getElementById('radio3').checked = true;
        
    }
});





