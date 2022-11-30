(() => {
    const header = document.querySelector('header');
    const navInner = document.querySelector('.nav-inner');
    const mainMenu = document.querySelectorAll('.nav-outer li');
    const innerCont = document.querySelectorAll('.inner-cont');
    const menuButton = document.querySelector('.menuButton');
    const menuPage = document.querySelector('.menuPage');
    const line = document.querySelector('.m1');
    const m1 = document.querySelectorAll('.m1 li');
    const m2 = document.querySelectorAll('.m2 ul');
    const mImg = document.querySelectorAll('.mImg img');
    const promImg = document.querySelectorAll('.imgBox img');
    const promoButton = document.querySelectorAll('.promoButton li');
    let subNum = 1;

    // 서브페이지 네비게이션
    // 서브페이지의 경우 네비게이션 하단부 고정
    for (let i = 0; i < mainMenu.length; i++) {
        if (header.classList.contains(`s${i}`)) {
            subNum = i;
            innerCont[subNum].classList.add('on');
            mainMenu[subNum].classList.add('on');
        }
    }
    // 서브페이지의 경우 스크롤시 상단 네비게이션 숨김
    if (header.classList.contains('sub_nav')) {
        window.addEventListener('mousewheel',(e)=>{
            if(e.wheelDelta < 0){
                header.classList.add('up')
            }
            else{
                header.classList.remove('up')
            }
        })
    }

    // 전체 네비게이션
    // 서브페이지의 경우 네비게이션 하단부 고정
    if (header.classList.contains('sub_nav')) {
        header.classList.add('active');
        navInner.classList.add('active');
        header.addEventListener('mouseleave', () => {
            for (let j = 0; j < mainMenu.length; j++) {
                mainMenu[j].classList.remove('active');
                innerCont[j].classList.remove('active');
            }
            innerCont[subNum].classList.add('on');
            mainMenu[subNum].classList.add('on');
        });
    } else {
        header.addEventListener('mouseleave', () => {
            header.classList.remove('active');
            navInner.classList.remove('active');
            for (let j = 0; j < mainMenu.length; j++) {
                mainMenu[j].classList.remove('active');
                innerCont[j].classList.remove('active')
            }
        });
    }

    mainMenu.forEach((e, i) => {
        e.addEventListener('mouseover', () => {
            header.classList.add('active')
            navInner.classList.add('active')
            for (let j = 0; j < mainMenu.length; j++) {
                mainMenu[j].classList.remove('active');
                innerCont[j].classList.remove('active')
            }
            e.classList.add('active');
            innerCont[subNum].classList.remove('on')
            mainMenu[subNum].classList.remove('on')
            if (e.classList.contains('active')) {
                innerCont[i].classList.add('active')
            } else {
                innerCont.forEach((a) => {
                    a.classList.remove('active');
                })
            }
        });
        e.addEventListener('mouseout', () => {

        });
    });


    // 메뉴버튼
    let isMpage = false;
    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('active');
        menuPage.classList.toggle('active');
        if (isMpage == false) {
            isMpage = true
        } else {
            isMpage = false
            for (let j = 0; j < mainMenu.length; j++) {
                m1[j].classList.add('active');
                m1[j].classList.remove('on');
                m2[j].classList.remove('active');
                mImg[j].classList.remove('active');
            }
            mImg[0].classList.add('active');
            line.classList.remove('active');
        }
    });

    m1.forEach((e, i) => {
        e.addEventListener('mouseover', () => {
            for (let j = 0; j < mainMenu.length; j++) {
                m1[j].classList.remove('active');
            }
            e.classList.add('active');
        });
        e.addEventListener('click', () => {
            for (let j = 0; j < mainMenu.length; j++) {
                m1[j].classList.remove('on');
                m2[j].classList.remove('active');
                mImg[j].classList.remove('active');

            }
            e.classList.add('on');
            m2[i].classList.add('active');
            mImg[i].classList.add('active');
            line.classList.add('active');
        });
    })

    // 프로모션
    promoButton.forEach((e, i) => {
        e.addEventListener('mouseover', () => {
            for (let j = 0; j < promoButton.length; j++) {
                promoButton[j].classList.remove('active');
                promImg[j].classList.remove('active');
            }
            e.classList.add('active')
            promImg[i].classList.add('active');
        })
    });

})();