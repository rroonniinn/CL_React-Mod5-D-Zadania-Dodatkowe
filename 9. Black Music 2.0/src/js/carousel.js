function carousel() {
  
    $('#mainCarousel').slick({

        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrws: true,
        responsive: [
            {
              breakpoint: 860,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
              }
            },
            
          ]
    })
    

};


export { carousel };