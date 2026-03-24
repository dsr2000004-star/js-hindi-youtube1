/////  IIFE (Immediately Invoked Function Expressions) ////////

(function chai() {
    console.log(`DB CONNECTED`);

})(),

(function aurCode() {
    console.log(`DB`);

})(),


    (function aurCode(naam) {
        console.log(`DB ${naam}`);

    })("mera naam divyanshu hai")



/* agar 2 IIFE functions ko run karwana hai to pehle IIFE function k baad ek comma (,) lagana hota hai varna dono hi run nahi karenge */


// Why IIFE used?
// IIFE is a function which is executed immediately
// Sometimes there is problem due to global scope pollution, so IIFE is used to eliminate the pollution caused by variable, declearations done which are done in global scope.....      