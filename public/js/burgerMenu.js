const burgerButton = document.querySelector('#burgerButton')


burgerButton.addEventListener('click',function(e){
    document.querySelector('.burgerMenu').classList.toggle('burgerView')
})