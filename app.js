// 1-misol
// Savol : 3 ta son berilgan . ular orasidan eng kattasini topuvchi algoritm yozing?

// Javob
/*
let sayi1 = prompt("Birinchi soni kirit");
let sayi2 = prompt("Ikkinchi son kirit");
let sayi3 = prompt("Uchinchi soni kirit");

let enBuyukSayi = sayi1;
if (sayi2 > enBuyukSayi) {
    enBuyukSayi = sayi2;
}
if (sayi3 > enBuyukSayi) {
    enBuyukSayi = sayi3;
}
alert( + enBuyukSayi);
*/

// 2-misol
// Savol : 2 ta son berilgan . Ulardan kattasini kubini topuvchi algaritm yozing

/*
let Son1 = prompt("Birinchi soni kirit");
let Son2 = prompt("Ikkinchi soni kirit");
let Raqam = Son1 > Son2 ? Son1 : Son2;
let kubu = Math.pow(Raqam, 3);
alert("Chiqan son: " + kubu);
*/


// 3-misol
// Savol : 3 ta son berilgan . Ushbu sonlar orasidan toq sonlar yig'indisi
// Javob

/*
var Son1 = +prompt("Birinchi soni kiriting:");
var Son2 = +prompt("Ikkinchi soni  kiriting:");
var Son3 = +prompt("Ichinchi soni kiriting:");
var toplam = 0;
if (Son1 % 2 !== 0) {
    toplam += Son1;
}
if (Son2 % 2 !== 0) {
    toplam += Son2;
}
if (Son3 % 2 !== 0) {
    toplam += Son3;
}
alert(" Siz kiritgan sonlar yig'indisi " + toplam);
*/



// 4-misol
//Savol : To'rta son berilgan.  Bu sonlar orasida 3 ga karralilari soni toping
// Javob

/*
let a = prompt("Birinchi soni kiriting");
let b = prompt("Ikkinchi soni kiriting");
let c = prompt("Uchinchi soni kiriting");
let d = prompt("To'rtinchi soni kiriting");

if(a % 3 ==0){
    console.log(a);
}


if(b % 3 ==0){
    console.log(b);
}

if(c % 3 ==0){
    console.log(c);
}
if(d % 3 ==0){
    console.log(d);
}

else{
    console.log("Bu son 3 ga karrali son emas");
}
*/






// 5-misol
// Savol : Foydalanuvchi kiritigan son 3 ga ham  5 ga karrali bo'lsa rost aks holda yolg'on  
// qiymat algaritm yozing

// Javob
/*

let Son =prompt("Soni kiriting")
if (Son %3 ==0){
    alert("Rost")
}else{
    alert("Yolg'on");
}
if (Son %5 ==0){
    alert("Rost")
}else{
    alert("Yolg'on");
}
*/






