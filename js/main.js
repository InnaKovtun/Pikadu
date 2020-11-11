let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function(event){
    event.preventDefault();//отменяет стандартный клик по ссылке
    menu.classList.toggle('visible');
})

const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSingUp = document.querySelector('.login-signup');

const listUsers = [
    {
        id: '01',
        email: 'innainna911@gmail.com',
        password: '12345',
        displayName: 'InnaKov'
    },
    {
        id: '02',
        email: 'sam890@gmail.com',
        password: '12345667',
        displayName: 'SamSmith'
    },
];

const setUsers = {
    user: null,
    logIn(){
        console.log('logIn')
    },
    logOut(){
        console.log('logOut')
    },
    signUp(){
        console.log('singIn')
    }
}

loginForm.addEventListener('submit', event => {
    event.preventDefault();
    setUsers.logIn();
});

loginSingUp.addEventListener('click', event => {
    event.preventDefault();
    setUsers.signUp();
});