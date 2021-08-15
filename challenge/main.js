let btnshow = document.getElementById('btn-show');
let sideleft = document.getElementById('SideLeft');

btnshow.addEventListener('click', () => {
    if(sideleft.style.display === 'none') {
        sideleft.style.width = '100%';
        sideleft.style.display = 'block';
        btnshow.innerText = "Close Side Left";

    } else {
        sideleft.style.display = 'none';
        btnshow.innerText = "Show Side Left";
    }

})


