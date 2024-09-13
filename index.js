function quadratic_calculation () {
    var x, x1, x2,R
    a = document.getElementById("first-coefficient").value;
    b = document.getElementById("second-coefficient").value;
    c = document.getElementById("third-coefficient").value;
    d = ( Math.pow(b,2)) - ( 4 * a * c); //Calculation of d: the discriminant
        
    //Testing of the d: the discriminant to varify if it has real roots
    if ( d > 0 ) {
        
        x1 = (-b + Math.sqrt(d)) / ( 2 * a);
        x2 = (-b - Math.sqrt(d)) / ( 2 * a);
        alert("x1: " + x1 + "   &   " + "x2: " + x2)

    } else if ( d == 0 ) {

        x = (-b) / ( 2 * a);
        alert ("x: " + x + ", equal roots.");

    } else {

        alert("NO REAL ROOTS!")

    }

}