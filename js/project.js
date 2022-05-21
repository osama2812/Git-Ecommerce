let bar = document.getElementById('bar')
let closed = document.getElementById('closed')
let nav = document.getElementById('navbar')


if (bar){
    bar.addEventListener('click' , () => {
        nav.classList.add('active')
    })
}


if (closed) {
    closed.addEventListener('click' , () => {
        nav.classList.remove('active')
    })
    
}


/*special  page product*/
let mainImg = document.getElementById("mainImg")
let smallImg = document.getElementsByClassName("small-img")

smallImg[0].onclick = function(){
    mainImg.src = smallImg[0].src;
}

smallImg[1].onclick = function(){
    mainImg.src = smallImg[1].src;
}

smallImg[2].onclick = function(){
    mainImg.src = smallImg[2].src;
}

smallImg[3].onclick = function(){
    mainImg.src = smallImg[3].src;
}

