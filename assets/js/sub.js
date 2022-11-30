(() => {

    const subTop = document.querySelector('.subTop');
    const tab_btn = document.querySelectorAll('.tab_btn');
    const history = document.querySelectorAll('.history');
    const moreBtn = document.querySelector('.moreBtn');
    const proGrid = document.querySelector('.proGrid');
    const category = document.querySelectorAll('.category li button');
    let Summer = [{
            name: "프리미엄 서큘레이터",
            id: "SIF-KF90W",
            imgUrl: "./assets/img/sum1.png",
            tag: [true, true, false, false, false],
        },
        {
            name: "캠핑용선풍기",
            id: "SIF-YB200",
            imgUrl: "./assets/img/sum2.png",
            tag: [true, false, false, false, true],
        },
        {
            name: "캠핑용서큘레이터",
            id: "SIF-WL09CAM",
            imgUrl: "./assets/img/sum3.png",
            tag: [true, true, false, false, false],
        },
        {
            name: "공기청정서큘레이터",
            id: "SIF-AIR70",
            imgUrl: "./assets/img/sum4.png",
            tag: [true, true, false, false, false],
        },
        {
            name: "공기청정서큘레이터",
            id: "SIF-SC30R",
            imgUrl: "./assets/img/sum5.png",
            tag: [true, true, false, false, false],
        },
        {
            name: "서큘레이터",
            id: "SIF-GA500A",
            imgUrl: "./assets/img/sum6.png",
            tag: [true, true, false, false, false],
        },
        {
            name: "프리미엄 DC팬",
            id: "SIF-12WLDC",
            imgUrl: "./assets/img/sum7.png",
            tag: [true, false, false, true, false],
        },
        {
            name: "무선BLDC팬",
            id: "SIF-PRC12NX",
            imgUrl: "./assets/img/sum8.png",
            tag: [true, false, false, true, false],
        },
        {
            name: "서큘레이터",
            id: "SIF-CK80S",
            imgUrl: "./assets/img/sum9.png",
            tag: [true, true, false, false, false],
        },
        {
            name: "서큘레이터",
            id: "SIF-BS90S",
            imgUrl: "./assets/img/sum10.png",
            tag: [true, true, false, false, false],
        },
        {
            name: "선풍기",
            id: "SIF-BS50R",
            imgUrl: "./assets/img/sum11.png",
            tag: [true, false, true, false, false],
        },
        {
            name: "프리미엄 서큘레이터",
            id: "SIF-CK40R",
            imgUrl: "./assets/img/sum12.png",
            tag: [true, true, false, false, false],
        },
        {
            name: "프리미엄 서큘레이터",
            id: "SIF-KF90W",
            imgUrl: "./assets/img/sum13.png",
            tag: [true, true, false, false, false],
        },
        {
            name: "캠핑용선풍기",
            id: "SIF-YB200",
            imgUrl: "./assets/img/sum14.png",
            tag: [true, true, false, false, false],
        },
        {
            name: "캠핑용서큘레이터",
            id: "SIF-WL09CAM",
            imgUrl: "./assets/img/sum15.png",
            tag: [true, true, false, false, false],
        },
        {
            name: "공기청정서큘레이터",
            id: "SIF-AIR70",
            imgUrl: "./assets/img/sum16.png",
            tag: [true, true, false, false, false],
        },
        {
            name: "공기청정서큘레이터",
            id: "SIF-SC30R",
            imgUrl: "./assets/img/sum17.png",
            tag: [true, true, false, false, false],
        },
        {
            name: "서큘레이터",
            id: "SIF-GA500A",
            imgUrl: "./assets/img/sum18.png",
            tag: [true, true, false, false, false],
        },
        {
            name: "프리미엄 DC팬",
            id: "SIF-12WLDC",
            imgUrl: "./assets/img/sum19.png",
            tag: [true, false, false, true, false],
        },
        {
            name: "무선BLDC팬",
            id: "SIF-PRC12NX",
            imgUrl: "./assets/img/sum20.png",
            tag: [true, true, false, false, false],
        },
        {
            name: "서큘레이터",
            id: "SIF-CK80S",
            imgUrl: "./assets/img/sum21.png",
            tag: [true, true, false, false, false],
        },
        {
            name: "서큘레이터",
            id: "SIF-BS90S",
            imgUrl: "./assets/img/sum22.png",
            tag: [true, true, false, false, false],
        },
        {
            name: "선풍기",
            id: "SIF-BS50R",
            imgUrl: "./assets/img/sum23.png",
            tag: [true, true, false, false, false],
        },
        {
            name: "프리미엄 서큘레이터",
            id: "SIF-CK40R",
            imgUrl: "./assets/img/sum24.png",
            tag: [true, true, false, false, false],
        },
        {
            name: "선풍기",
            id: "SIF-BS50R",
            imgUrl: "./assets/img/sum25.png",
            tag: [true, true, false, false, false],
        },
        {
            name: "프리미엄 서큘레이터",
            id: "SIF-CK40R",
            imgUrl: "./assets/img/sum26.png",
            tag: [true, true, false, false, false],
        },
    ];
    let Winter = [{
        name: "에코히터(베이지)",
        id: "SEH-ECO5000B",
        imgUrl: "./assets/img/win1.png",
        tag: [true, true, false, false, false],
    },
    {
        name: "에코히터(핑크)",
        id: "SEH-ECO5000P",
        imgUrl: "./assets/img/win2.png",
        tag: [true, true, false, false, false],
    },
    {
        name: "에코히터(베이지)",
        id: "SEH-ECO720B",
        imgUrl: "./assets/img/win3.png",
        tag: [true, true, false, false, false],
    },
    {
        name: "에코히터(핑크)",
        id: "SEH-ECO360P",
        imgUrl: "./assets/img/win4.png",
        tag: [true, true, false, false, false],
    },
    {
        name: "에코히터",
        id: "SEH-ECO2000",
        imgUrl: "./assets/img/win5.png",
        tag: [true, true, false, false, false],
    },
    {
        name: "에코히터",
        id: "SEH-ECO1000",
        imgUrl: "./assets/img/win6.png",
        tag: [true, true, false, false, false],
    },
    {
        name: "벽걸이형",
        id: "SEH-AW95",
        imgUrl: "./assets/img/win7.png",
        tag: [true, false, false, false, true],
    },
    {
        name: "히터",
        id: "SEH-900BKK",
        imgUrl: "./assets/img/win8.png",
        tag: [true, false, false, true, false],
    },
    {
        name: "히터",
        id: "SEH-900BKK",
        imgUrl: "./assets/img/win9.png",
        tag: [true, false, false, true, false],
    },
    {
        name: "히터",
        id: "SEH-900BKK",
        imgUrl: "./assets/img/win10.png",
        tag: [true, false, false, true, false],
    },
    {
        name: "히터",
        id: "SEH-900BKK",
        imgUrl: "./assets/img/win11.png",
        tag: [true, false, false, true, false],
    },
    {
        name: "히터",
        id: "SEH-900BKK",
        imgUrl: "./assets/img/win12.png",
        tag: [true, false, false, true, false],
    },
    {
        name: "히터",
        id: "SEH-900BKK",
        imgUrl: "./assets/img/win13.png",
        tag: [true, false, false, true, false],
    },
    {
        name: "팬히터",
        id: "SEH-900BKK",
        imgUrl: "./assets/img/win14.png",
        tag: [true, false, true, false, false],
    },
    {
        name: "팬히터",
        id: "SEH-900BKK",
        imgUrl: "./assets/img/win15.png",
        tag: [true, false, true, false, false],
    },
    {
        name: "팬히터",
        id: "SEH-900BKK",
        imgUrl: "./assets/img/win16.png",
        tag: [true, false, true, false, false],
    },
    {
        name: "전기온풍기",
        id: "SEH-900BKK",
        imgUrl: "./assets/img/win17.png",
        tag: [true, false, true, false, false],
    },
];
let Kitchen = [{
    name: "음식물처리기",
    id: "SFW-ML500NO",
    imgUrl: "./assets/img/kit1.png",
    tag: [true, true, false, false, false],
},
{
    name: "음식물처리기",
    id: "SFW-ML500NO",
    imgUrl: "./assets/img/kit2.png",
    tag: [true, true, false, false, false],
},
]
    setTimeout(() => {
        if (subTop) {
            subTop.classList.add('active');
        }
    }, 100);
    tab_btn.forEach((e, i) => {
        e.addEventListener('click', () => {
            for (let j = 0; j < tab_btn.length; j++) {
                tab_btn[j].classList.remove('active');
                history[j].classList.remove('active');
            }
            e.classList.add('active');
            history[i].classList.add('active');
        })
    });

    // 데이터 가져와서 html추가, 제품 카테고리
    let pageNum = 0;
    let proNum = 0;
    let proTab = [];
    function proCont(a, i) {
        proGrid.innerHTML += `
            <div class="product">
                <img src="${a[i].imgUrl}" alt="">
                <p class="name">${a[i].name}</p>
                <p class="id">${a[i].id}</p>
            </div>
        `;
    }

    function reset() {
        proGrid.innerHTML = ``;
        proTab = [];
    }

    function addProduct(a) {
        for (let i = 0; i < a.length; i++) {
            if (pageNum < 12) {
                pageNum++;
                proCont(a, i);
            }
        }
        if (a.length < 12) {
            moreBtn.style.display = 'none';
        }
        if(pageNum == 12){
            pageNum = 11
        }

    }

    function more(a) {
        for (let j = 0; j < 8; j++) {
            pageNum++;
            if (pageNum < a.length) {
                proCont(a, pageNum);
                console.log(pageNum)
            } else {
                moreBtn.style.display = 'none';
            }
        }
    }
    function paste(a,i){
        for (let j = 0; j < proNum; j++){
            if(a[j].tag[i]){
                proTab[pageNum] = a[j];
                pageNum++
            }
        }
    }
    function tab(x){
        category.forEach((a, i) => {
            a.addEventListener('click', () => {
                for (let j = 0; j < category.length; j++){
                    category[j].classList.remove('active')
                }
                a.classList.add('active')
                reset();
                moreBtn.style.display = 'none';
                pageNum = 0;
                paste(x, i);
                for(let k=0; k<proTab.length; k++){
                    console.log(proTab[k])
                    proCont(proTab,k)
                }
            })
        })
    }

    if (proGrid.classList.contains('summer')) {
        addProduct(Summer);
        moreBtn.addEventListener('click', () => {
            more(Summer)
        });
        proNum = Summer.length;
        tab(Summer)
    } else if (proGrid.classList.contains('winter')) {
        addProduct(Winter);
        moreBtn.addEventListener('click', () => {
            more(Winter)
        });
        proNum = Winter.length;
        tab(Winter)

    }
    else if (proGrid.classList.contains('kitchen')) {
        addProduct(Kitchen);
        moreBtn.addEventListener('click', () => {
            more(Kitchen)
        });
        proNum = Kitchen.length;
        tab(Kitchen)

    }

})();