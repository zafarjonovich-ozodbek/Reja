// MITASK-C:

/* Shunday class tuzing nomi Shop, va uni constructoriga 3 hil mahsulot pass bolsin, 
hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method 
ishga tushgan vaqt ham log qilinsin.

MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 4ta non,
 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 
 4) & shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud! */

//  class Shop {
//     constructor(non, osh, somsa) {
//         this.non = "non";
//         this.osh = "osh";
//         this.somsa = "somsa";
//     }

//     qoldiq() {
//         console.log(`Xozir ${this.non}ta non, ${this.osh}ta osh, ${this.somsa}ta somsa bor!`);
//     }

//     sotish(ovqat, soni) {

//         if(ovqat === "non"){
//             this.non -= soni;
//         } else {
//             console.log("Non yetarli emas!")
//         };

//         if(ovqat === "osh"){
//             this.osh -= soni;
//         } else {
//             console.log("Osh yetarli emas!")
//         };

//         if(ovqat === "somsa"){
//             this.somsa -= soni;
//         } else {
//             console.log("Somsa yetarli emas!")
//         };

//         console.log(`${soni}ta ${ovqat} sotildi!`);             
//     }
//  };


//  const menu = new Shop("non", 9);
//  menu.qoldiq()
//  menu.sotish("somsa", 8)


 const moment = require("moment");

class Shop {
    constructor(non, lagmon, cola) {
        this.non = non;
        this.lagmon = lagmon;
        this.cola = cola;
    }

    qoldiq() {
        const now = moment().format("hh:mm");
        console.log(`Xozir ${now}da ${this.non}ta non, ${this.lagmon}ta lagmon, ${this.cola}ta cola mavjud`);
    };

    sotish(name, num) {
        if(name === "non") {
            if(this.non >= num) {
                this.non -= num;
            } else {
                console.log("Non yetarli emas!");
            }
        } 

        if(name === "lagmon") {
            if(this.lagmon >= num) {
                this.lagmon -= num;
            } else {
                console.log("lagmon yetarli emas!");
            }
        } 

        if(name === "cola") {
            if(this.cola >= num) {
                this.cola -= num;
            } else {
                console.log("Cola yetarli emas!");
            }
        } 

        console.log(`${num}ta ${name} sotildi.`);
    }

    qabul(name, num) {
        if(name === "non") {
            this.non = this.non + num;
        }

        if(name === "lagmon") {
            this.lagmon = this.lagmon + num;
        }

        if(name === "cola") {
            this.cola = this.cola + num;
        }

        console.log(`${num}ta ${name} qabul qilindi.`)
    }
}

const menu = new Shop(30, 25, 20);
menu.qoldiq();
menu.sotish("non", 9);
menu.qoldiq()



// // MITASK-B:

// // savol: shunday function tuzing, 1ta string parametrga ega bolsin. Hamda osa stringda qatnashkan raqamlar sonini return qilsin

// // yechim: 

// function count(password) {
//     let count = 0;

//     for(let a = 0; a < password.length; a++) {
//         if(password[a] >= "0" && password[a] <= "9") {
//             count++
//         }
//     }
//     return count;
// }
// console.log(count("kdshufi743ydhf7934fbhdf9wid"));








////////// LESSON: 21 && 22

// console.log("Jack Ma maslahatlari:");
// const list = [
//     "yaxshi talaba bo'ling", // 0 - 20
//     "togri boshliq tanlang va ko'p xato qiling", // 20-30
//     "o'zingiz uchun ishlashni boshlang", // 30 - 40
//     "siz kuchli bo'lgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling",  // 50-60
//     "endi dam oling foydasi yoq", // 60-
// ];

// //////// CALLBACK function
// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//        setTimeout(function () {
//         callback(null, list[5]);
//        }, 5000);

// //        console.log("====================")

// //        setInterval(function() {
// //         callback(null, list[5]);
// //        }, 1000)
//     }
// }

// console.log("passede here 0");
// maslahatBering(59, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log("javob:", data);
//     }
// });
// console.log("passed here 1");


// // //////// ASYNC function
// // async function maslahatBering(a) {
// //     if (typeof a !== "number") throw new Error("insert a number");
// //     else if (a <= 20) return list[0];
// //     else if (a > 20 && a <= 30) return list[1];
// //     else if (a > 30 && a <= 40) return list[2];
// //     else if (a > 40 && a <= 50) return list[3];
// //     else if (a > 50 && a <= 60) return list[4];
// //     else {
// //         return new Promise((resolve, reject) => {
// //             setTimeout(() => {
// //                 resolve(list[5]);
// //             }, 5000)
// //         })
// //     }
// // }

// // /////// call via THEN/CATCH
// // console.log("passede here 0");
// // maslahatBering(25)
// //     .then(data => {
// //         console.log("javob:", data)
// //     }).catch(err => {
// //         console.log("ERROR:", err)
// //     })
// // console.log("passede here 1");

// // //////// call via ASYNC/AWAIT
// // async function run() {
// //     let javob = await maslahatBering(19);
// //     console.log(javob);
// //     javob = await maslahatBering(70);
// //     console.log(javob);
// //     javob = await maslahatBering(44);
// //     console.log(javob);
// // }
// // run();
