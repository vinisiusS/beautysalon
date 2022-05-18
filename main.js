/* Abre e Fecha o menu */ 
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')


for(const element of toggle){
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}

/* quando clicar em um item do menu, esconde o menu */

const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

/* QUANDO ROLAR PRA BAIXO FAIS UMA SOMBRA EM BAIXO DO HEADER */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll(){
    if(window.scrollY >= navHeight){
        header.classList.add('scroll')
    } else{
        header.classList.remove('scroll')
    }
}

/* CARROSEL TESTIMONIALS SWIPERJS */

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination:{
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints:{
        767:{
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
    
});

/* SCROLLreveal: Mostrar elementos quando der scroll na pagina */

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true,
})

scrollReveal.reveal(`
#home .image, #home .text,
#about .image, #about .text,
#services header, services .card,
#testimonials header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social                         `
, {interval: 100})

/* Botao voltar para o topo */
const backToTopButton = document.querySelector('.seta-up')
function backToTop(){
    if(this.window.scrollY >= 560){
        backToTopButton.classList.add('show')
    }else{
        backToTopButton.classList.remove('show')
    }
}

/* Menu ativo conforme a seção na página */
const sections = document.querySelectorAll('main section[id]')
function activateMenu(){
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for(const section of sections){
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStar = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStar && checkpointEnd){
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.add('active')

        }else{
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }
    }
}

/* Inicializa as fuction */

window.addEventListener('scroll', function(){
    changeHeaderWhenScroll()
    backToTop()
    activateMenu()
})




