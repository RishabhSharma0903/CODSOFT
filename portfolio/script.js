// scrolling nav color and active changing code
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

//toggle icon navbar
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navigation');

menuicon.onclick = ()=>{
    menuicon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 350;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navlinks.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
    menuicon.classList.remove('fa-x');
    navbar.classList.remove('active');

}

// download CV code
document.getElementById('downloadButton').addEventListener('click', function() {
    // Replace 'path/to/your/cv.pdf' with the actual path to your CV PDF file
    let url = 'assests/Rishabh_Sharma_Resume.pdf';
    // Create a temporary link element
    let link = document.createElement('a');
    link.href = url;
    // Set the download attribute and filename for the link
    link.download = 'Rishabh_Sharma_Resume.pdf';
    // Append the link to the body
    document.body.appendChild(link);
    // Trigger the click event on the link
    link.click();
    // Remove the link from the body
    document.body.removeChild(link);
});

//gsap 
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navigationLinks = document.querySelectorAll('.navigation a');

    navigationLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            gsap.to(window, {
                scrollTo: {
                    y: targetSection,
                    offsetY: 10 // Adjust this value according to your header height
                },
                duration: 0.8,
                ease: 'power2.inOut'
            });
        });
    });

    // Smooth scrolling for the footer button
    const footerButton = document.querySelector('.footer-icontop a');

    footerButton.addEventListener('click', (event) => {
        event.preventDefault();

        gsap.to(window, {
            scrollTo: {
                y: 0,
                offsetY: 10 // Adjust this value according to your header height
            },
            duration: 0.8,
            ease: 'power2.inOut'
        });
    });
});

//scroll reveal             //agar container ke andar wale content boxes ko use kro to kuch css styling ko override kr deta jisse wo kam nhi krte jaise ex:- scaling on hovering
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 1700,
    delay: 150
});
ScrollReveal().reveal('.home-content,.heading,.abt-heading,.contact-heading', {origin : 'top'});//top

ScrollReveal().reveal('.skills,.img-content,#contactForm,.img-content img', {origin : 'bottom'});//bottom 

ScrollReveal().reveal('.abt-img-content img,.home-content h1,.services .heading,.project .heading,.header .logo', {origin : 'left'});//left

ScrollReveal().reveal('.home-content p,.abt-content,.project-container,.service-container', {origin : 'right'});//right


//typed js
const typed = new Typed('.intro-text',{
    strings:['Frontend Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});