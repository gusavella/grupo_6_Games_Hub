document.querySelectorAll(".carousel").forEach(carousel => {
    let counter_buttons=0;
    const TIMER = 4000
    const items = carousel.querySelectorAll(".carousel-item");
    const button_html = Array.from(items, () => {
        return `<span class="carousel-button"></span>`;
    });
    
    carousel.insertAdjacentHTML('beforeend', `<div class="carousel-nav">
                                                ${button_html.join("")}
                                               </div>`);

    const buttons = carousel.querySelectorAll('.carousel-button')

    buttons.forEach((button, i) => {
                                    button.addEventListener('click', () => {
                                                                            items.forEach(item => item.classList.remove('carousel-item-selected'));
                                                                            buttons.forEach(button => button.classList.remove('carousel-button-selected'));
                                                                            items[i].classList.add('carousel-item-selected');
                                                                            button.classList.add('carousel-button-selected');
                                                                        })

    })

    items[0].classList.add('carousel-item-selected');
    buttons[0].classList.add('carousel-button-selected');


    function pulse(buttons){ 
   
        if(counter_buttons==buttons.length){
            counter_buttons=0
        }
        buttons[counter_buttons].click()
        counter_buttons+=1   
        setTimeout(pulse,TIMER , buttons);
    } 
    setTimeout(pulse, TIMER, buttons);
});

