export const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2, // Mostrar 2 slides
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3, // Mostrar 3 slides
            },
        }
    ]
};