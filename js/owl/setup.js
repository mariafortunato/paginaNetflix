$('.owl-carousel').owlCarousel({
    loop:true,   //efeito de loop, carrosel
    margin:10,   //margin entre eles
    nav:false,     // itens de navegação <> setas
    responsive:{
        0:{
            items:2    // mais de mil px, 5 itens na tela
        },
        600:{
            items:4     // mais de 600 px, 3 itens na tela
        },
        1000:{
            items:6      // mais de mil px, 5 itens na tela
        }                // responsividade
    }
})