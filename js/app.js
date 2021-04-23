let init = () =>{
    let container = document.getElementsByClassName('jumbo-slider__container')[0],
    slides = document.getElementsByClassName('jumbo-slider__slide'),
    circles = document.getElementsByClassName('jumbo-slider__circle'),
    links = document.getElementsByClassName('jumbo-slider__link'), 
    current = 1, 
    time = 12000;
    //add animation class to slide container
    slides[0].classList.add('jumbo-slider__slide--active');
    links[current-1].classList.add('jumbo-slider__link--active');
    circles[current-1].classList.add('jumbo-slider__circle--filled')

    //update elipsis and links
    let updateNav = (current) =>{
        // console.log(`current: ${current}`)
        for(let i = 0; i < slides.length; i++){
            links[i].classList.remove('jumbo-slider__link--active');
            circles[i].classList.remove('jumbo-slider__circle--filled');
        }
        links[current-1].classList.add('jumbo-slider__link--active')
        circles[current-1].classList.add('jumbo-slider__circle--filled')
    }
    let startSliding = () =>{
        setInterval(() =>{
            //remove active from first and add it to second slide.
            slides[1].classList.add('jumbo-slider__slide--active')
            slides[0].classList.remove('jumbo-slider__slide--active')
            // clone the first slide and place it last spot and remove after cloned.
            container.appendChild(slides[0].cloneNode([true]))
            container.removeChild(slides[0])
        //   console.log(`slides: $(slides.length)`)
            if(current < slides.length){
                current++
                updateNav(current)
            } else {
                current = 1
                updateNav(current)
            }

        }, time)
    }
    startSliding();
}
init()