const btnHumbargur = document.querySelector('#btnHumBurgur');
const body = document.querySelector('body')
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay') ;
const fadeElems = document.querySelectorAll('.has-fade')

btnHumbargur.addEventListener('click', function () {
    console.log('hello world')

    if(header.classList.contains('open')){
        body.classList.remove('noscroll')
        header.classList.remove('open')
        fadeElems.forEach(function (x) {
            x.classList.remove('fade-in')
            x.classList.add('fade-out')
        })
    }
    else{
        header.classList.add('open')
        body.classList.add('noscroll')
        fadeElems.forEach(function (x) {
            x.classList.remove('fade-out')
            x.classList.add('fade-in')
        })
    }
})