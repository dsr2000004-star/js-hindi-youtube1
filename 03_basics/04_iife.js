/////  IIFE (Immediately Invoked Function Expressions) ////////

(function chai() {
    console.log(`DB CONNECTED`);

})();   

(function aurCode() {
    console.log(`DB`);

})()


    (function aurCode(naam) {
        console.log(`DB ${naam}`);

    })("mera naam divyanshu hai")



/* agar 2 IIFE functions ko run karwana hai to pehle IIFE function k baad ek comma (,) lagana hota hai varna dono hi run nahi karenge */