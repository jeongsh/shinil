(()=>{
    const subAbout = document.querySelector('.subAbout');
    const vAbout = document.querySelector('.vAbout');
    const subTitle = document.querySelector('.sub_title');
    const black = document.querySelector('.black');
    const header = document.querySelector('header');
    const aboutImg = document.querySelectorAll('.aboutImg');
    const aboutTxt = document.querySelectorAll('.aboutTxt');
    const subTop = document.querySelector('.subTop');
    let wheel = 4;
    let sWidth = 0;
    let sOpacity = 0;
    let sColor = 0;

    history.scrollRestoration = "manual"

    function scrollEvent() {
        sWidth = (window.outerWidth - 1400) / 4 * wheel;
        vAbout.style.width = `calc(100vw - ${sWidth}px)`;
        sOpacity = 0.3 - (0.075 * wheel);
        black.style.opacity = `${sOpacity}`;
        sColor = 255 - (255 / 4 * wheel);
        subTitle.style.color = `rgb(${sColor},${sColor},${sColor})`

    }
    subAbout.addEventListener('mousewheel', (e) => {
        if (this.scrollY < subAbout.offsetHeight / 4 + 200) {
            if (e.wheelDelta > 0) {
                header.classList.remove('on');
                wheel++;
                if (wheel > 4) {
                    wheel = 4;
                }
                scrollEvent();
                if (wheel != 0) {
                    subTitle.classList.remove('active')
                }
            } else {
                wheel--;
                if (wheel < 0) {
                    subTitle.classList.add('active');
                    wheel = 0;
                } else if (wheel == 0) {
                    header.classList.add('on');
                }

                scrollEvent();
            }
        }
    })
    window.addEventListener('scroll', () => {
        let currentScroll = this.scrollY;
        if (currentScroll > subAbout.offsetHeight - subAbout.offsetTop) {
            header.classList.remove('on');
        } else if (currentScroll <= subAbout.offsetHeight - subAbout.offsetTop && wheel == 0) {
            header.classList.add('on');
        }
        aboutTxt.forEach((e, i) => {
            // if (this.scrollY > e.offsetTop &&
            //     this.scrollY < e.offsetTop + e.offsetHeight) {
            //          for (let j = 0; j < e.length; j++){
            //         aboutImg[j].classList.remove('active')
            //     }
            //     aboutImg[i].classList.add('active')
            //     console.log( e.offsetTop, this.scrollY,e.offsetTop+e.offsetTop,'if' )
            // }
            // else{

              
            // }
            let Top = window.pageYOffset+e.getBoundingClientRect().top;
            if(currentScroll > Top - window.outerHeight/2 && this.scrollY < Top + e.offsetHeight - window.outerHeight/2){
                aboutImg[i].classList.add('active')
            }
            else if(currentScroll < Top - window.outerHeight/2){
                aboutImg[i].classList.remove('active')
            }
        })

    })
    
})();