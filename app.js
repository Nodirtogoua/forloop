/* #1 */

// let arr = [3, 9, 13, 7];
// function nodir(arr, b) {
//     k = 0;
//     for (i = 0; i < arr.length; i++) {
//         for (n = i; n < arr.length; n++) {
//             if (arr[n] + arr[i] == b) {
//                 k = i + " " + n;
//             }
//         }
//     }
//     return k.split(Number());
// }
// console.log(nodir(arr, 22));





/* #2.1 */

// function polyndrome(a){
//     b = a.split("");
//     for(i = 0; i < b.length; i++){
//         for(n = b.length-1; n < b.length; n--){
//             if(b[i] == b[n]){
//                 return true;
//             }
//             else{
//                 return false;
//             }
//         }
//     }
// }
// console.log(polyndrome("jaji"));





/* #2.2 */

// function nodir(a) {
//     if (a == a.split('').reverse('').join('')) {
//         return true;
//     }
//     return false;
// }
// console.log(nodir("kiyik"));





/* #3 */

// let str = ["Salom men nemoman", "Nemo masxaraboz baliq", "Biz uni yaxshi koramiz", "U multfilmda bor", "menda nemoning rasmi bor"];

// function nodir(arr, a) {
//     let b = [];
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i].toLowerCase().includes(a)) {
//             b.push(arr[i]);
//         }
//     }
//     return b;
// }
// console.log(nodir(str, "nemo"));





/* #4 */

// let arr = [9, 20];

// function nodir(arr) {
//     let k = 0;
//     for (i = arr[0] + 1; i < arr[1]; i++) {
//         k = k + i;
//     }
//     return k;
// }
// console.log(nodir(arr));




/* #5 */

// function nodir(n){
//     k = 1;
//     for(i = 1; i <= n; i++){
//         k = k * i;
//     }
//     return k;
// }
// console.log(nodir(5));




/* #6 */

// const a = "      some text here    ";
// function nodir(a){
//     b = a.split(" ");
//     d = "";
//     for(i = 0; i < b.length; i++){
//         if(b[i] != ""){
//             d = d + b[i] + " ";
//         }
//         c = d.split(" ");
//         j = c.splice(0, c.length-1);
//     }
//     return j.join(" ");
// }
// console.log(nodir(a));





/* #7 */
// let alphabet = ["a", "b", "c", "d", "e", "f",
//     "g", "h", "i", "j", "k", "l",
//     "m", "n", "o", "p", "q", "r",
//     "s", "t", "u", "v", "w", "x",
//     "y", "z"];
// const symbol = ['!', '#', '$', '%', '^', '&', '*', '_', '+', '-', '/',];
// function validate(a) {
//     harf = null;
//     raqam = null;
//     sim = null;
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < alphabet.length; j++) {
//             for (k = 0; k < symbol.length; k++) {
//                 if (a[i].toLowerCase().includes(alphabet[j])) {
//                     harf += 1;
//                 }
//                 else if (Number(a[i])) {
//                     raqam += 1;
//                 }
//                 else if (a[i].includes(symbol[k])) {
//                     sim += 1;
//                 }
//             }
//         }
//     }
//     if (a.length >= 8 && raqam > 0 && harf > 0 && sim > 0) {
//         return true;
//     }
//     else {
//         return false
//     }
// }
// console.log(validate("1234567_8!ll"));




/* #8 */
// k = '';
// for(i = 11; i <= 21; i++){
//     k += " " + i;
// }
// console.log(k);


/* #9 */
// let l = prompt("Email: ");
// function nodir(a) {
//     let p = "@";
//     for (i = 0; i < a.length; i++) {
//             if (a.includes(p)) {
//                 return true;
//             }
//             else {
//                 return false;
//         }
//     }
// }
// console.log(nodir(l));




/* #10 */
// let arr = [1, 2, 3, 4, 5, 6];
// function nodir(a) {
//     k = [];
//     for (i = 0; i < a.length; i++){
//         if(a[i] % 2 == 0){
//             k.push(a[i]);
//         }
//     }
//     return k;
// }
// console.log(nodir(arr));




/* #11 */

// function nodir(a, b) {
//     k = 0;
//     for (i = 1; i <= a; i++) {
//         k = k + Math.pow(i, b);
//     }
//     return k;
// }
// console.log(nodir(12, 4));



/* #12 */

// function nodir(a){
//     b = a.split(".");
//     d = b.join(" ");
//     c = d.split("/");
//     f = c.join(" ");
//     return f;
// }
// console.log(nodir("https.//google.com/10"));




/* #13 */

// let a = [2, 3, 5, 1, 8, 6, 7];

// function nodir(a) {
//     let k;
//     for (i = 0; i < a.length; i++) {
//         for (n = i + 1; n < a.length; n++) {
//             if (a[i] > a[n]) {
//                 k = a[i];
//                 a[i] = a[n];
//                 a[n] = k;
//             }
//         }
//     }
//     return a;
// }
// console.log(nodir(a));



// function nodir(a) {
//     let k = [];
//     for (i = 0; i < a.length; i++) {
//         if (a[i] == Number(a[i])) {
//             k.push(a[i]);
//         }
//     }
//     return k;
// }
// console.log(nodir("ahfjsdlh7sdkf56"));



// function nodir(a, b) {
//     return "Liked by " + a.join(" ") + " and " + (b - a.length) + " too";
// }
// function umar(a, b) {
//     let k = [];
//     let 
//     for (let i = 0; i < 3; i++) {
//         k.push(a[i]);
//     }
//     if (b == a.length) {
//         b = '';
//     }
//     return "Liked by " + k.join(" ") + " and " + b + " too";
// }
// console.log(umar(["Ezoz","Ezoz","Ezoz","Ezoz","Ezoz","Ezoz"], 1));


// function nodir(a){
//     k = [ ];
//     let q;
//     for(i = 0; i <= a; i++){
//         if(a % i == 0){
//             k.push(i);
//         }
//     }
//     if(k.length == 2){
//         q = "Tub son: ";
//         return q + a + " --> " + k.length + "ta " + "(" + k + ")";
//     }
//     return a + " --> " + k.length + "ta " + "(" + k + ")";
// }
// console.log(nodir(30));