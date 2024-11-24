'use strict'

let pics = [
    'photos/html-system-websites-collage-design_23-2150432939.jpg',
    'photos/html-system-websites-collage-design_23-2150432945.avif',
    'photos/html-system-websites-collage-design_23-2150432963.avif',
    'photos/html-system-websites-collage-design_23-2150432967.avif'
];

let img = document.querySelector("#slider img");
img.src = pics[0];

const next = document.querySelector("#slider .next");
const prev = document.querySelector("#slider .prev");

let countslide = 0;

next.addEventListener("click", function () {
    clearInterval(set)
    countslide++;
    if (countslide > pics.length - 1) {
        countslide = 0;
    }
    img.src = pics[countslide];
})

prev.addEventListener("click", function () {
    clearInterval(set)
    countslide--;
    if (countslide == -1) {
        countslide = pics.length - 1;
    }
    img.src = pics[countslide];
})

let set = setInterval(() => {
    countslide++;
    if (countslide > pics.length - 1) {
        countslide = 0;
    }
    img.src = pics[countslide]
}, 1500);

// 'use strict'

// let pics = [
//     'photos/html-system-websites-collage-design_23-2150432939.jpg',
//     'photos/html-system-websites-collage-design_23-2150432945.avif',
//     'photos/html-system-websites-collage-design_23-2150432963.avif',
//     'photos/html-system-websites-collage-design_23-2150432967.avif'
// ];

// let img = document.querySelector("#slider img");
// img.src = pics[0];


// const next = document.querySelector("#slider .next");
// const prev = document.querySelector("#slider .prev");

// let countslide = 0;
// let set;
// let clicked = false; // İlk tıklama kontrolü

// next.addEventListener("click", function () {
//     clearInterval(set); // Interval durdurulur
//     countslide++;
//     if (countslide > pics.length - 1) {
//         countslide = 0;
//     }
//     img.src = pics[countslide];

//     if (!clicked) {
//         clicked = true; // İlk tıklama olduğunda clicked değişkeni true olur
//     } else {
//         startInterval(); // 2. defa tıklanırsa interval başlatılır
//         clicked = false; // Tekrar başlatılmak için clicked durumu sıfırlanır
//     }
// })

// prev.addEventListener("click", function () {
//     clearInterval(set); // Interval durdurulur
//     countslide--;
//     if (countslide == -1) {
//         countslide = pics.length - 1;
//     }
//     img.src = pics[countslide];

//     if (!clicked) {
//         clicked = true; // İlk tıklama olduğunda clicked değişkeni true olur
//     } else {
//         startInterval(); // 2. defa tıklanırsa interval başlatılır
//         clicked = false; // Tekrar başlatılmak için clicked durumu sıfırlanır
//     }
// })

// function startInterval() {
//     set = setInterval(() => {
//         countslide++;
//         if (countslide > pics.length - 1) {
//             countslide = 0;
//         }
//         img.src = pics[countslide];
//     }, 1500);
// }

// // Başlangıçta interval başlatılıyor
// startInterval();



