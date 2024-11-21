const button = document.querySelector('button');

button.onclick = function() {
    console.log('You selected me')
}

button.addEventListener('click', function(){
    console.log(this), console.log('yay');
});