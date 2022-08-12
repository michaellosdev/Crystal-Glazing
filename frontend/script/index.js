const contactForm = document.querySelector('.contact-form')
let name = document.getElementById('name');
let email = document.getElementById('email');
let phone = document.getElementById('phone')
let message = document.getElementById('message');
let requiredFields = document.querySelector('.required-fields')

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let formData = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value

    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');

    if (formData.name === '' || formData.email === '' || formData.phone === '' ||formData.message === '') {
        name.style.border = '2px solid red'
        email.style.border = '2px solid red'
        phone.style.border = '2px solid red'
        message.style.border = '2px solid red'
        requiredFields.style.visibility = 'visible'
    } else {
        
        xhr.onload = function() {
        console.log(xhr.responseText);
        if (xhr.responseText == 'success') {
            alert('Email sent');
                name.value = '';
                email.value = '';
                phone.value = '';
                message.value = '';
                name.style.border = '1px solid black'
                email.style.border = '1px solid black'
                phone.style.border = '1px solid black'
                message.style.border = '1px solid black'
                requiredFields.style.visibility = 'hidden'
        } else {
            alert('Something went wrong!')
            console.log(error.message)

        }

    }
    }


    

    xhr.send(JSON.stringify(formData))

})

//hamburger menu mobile

const hamburgerMenu = document.querySelector('#checkbox2')
const mobileNav = document.querySelector('.mobile-nav')
const linksMobileNan = document.querySelectorAll('.link')
const bar2 = document.querySelector('.bar2')
const bar3 = document.querySelector('.bar3')

let menuOpen = false

function hamburgerMenuFn() {
    

    if (hamburgerMenu.checked) {
        mobileNav.style.display = 'flex'
        bar2.style.backgroundColor="white"
        bar3.style.backgroundColor="white"
        menuOpen = true
        console.log('open')
        document.body.style.overflow = 'hidden'
    } else {
        mobileNav.style.display = 'none'
        bar2.style.backgroundColor="black"
        bar3.style.backgroundColor="black"
        menuOpen = false
        console.log('i closed')
        document.body.style.overflow = ''
    }
}

hamburgerMenu.addEventListener('click', hamburgerMenuFn)
linksMobileNan.forEach((item)=> {
    item.addEventListener('click', ()=> {
        mobileNav.style.display = 'none'
        bar2.style.backgroundColor="black"
        bar3.style.backgroundColor="black"
        hamburgerMenu.checked = false
        let menuOpen = false
        document.body.style.overflow = ''

    })
})