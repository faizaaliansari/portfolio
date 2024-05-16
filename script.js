let menuIcon = querySelector('#menu-icon');
let navbar = document.querySelector('.vavbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + ']').classList.add('active')
            })
        }
    })
}


menuIcon.onclick = () => {
    menuIcon.classlist.toggle('box-x');
    navbar.classlist.toggle('active');
}