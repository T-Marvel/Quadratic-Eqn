document.getElementById("outputHeader").style.display = "none";
document.getElementById("output1").style.display = "none";
document.getElementById("output2").style.display = "none";
document.getElementById("output3").style.display = "none";


function quadratic_calculation () {
    var x, x1, x2,R;
    width = window.innerWidth;
    a = document.getElementById("first-coefficient").value;
    b = document.getElementById("second-coefficient").value;
    c = document.getElementById("third-coefficient").value;
    d = ( Math.pow(b,2)) - ( 4 * a * c); //Calculation of d: the discriminant
        
    //Testing of the d: the discriminant to varify if it has real roots
    if ( d > 0 ) {
        
        x1 = (-b + Math.sqrt(d)) / ( 2 * a);
        x2 = (-b - Math.sqrt(d)) / ( 2 * a);
        

        if ( width <= 500 ) {
            document.getElementById("outputHeader").style.display = "block";
            document.getElementById("output1").style.display = "block";
            document.getElementById("output2").style.display = "none";
            document.getElementById("output3").style.display = "none";
            document.getElementById("outputX1").setAttribute("type", "number");
            document.getElementById("outputX2").setAttribute("type", "number");
            document.getElementById("outputX1").value = (Math.round(x1 * 100)/100); 
            document.getElementById("outputX2").value = (Math.round(x2 * 100)/100);
            document.getElementById("outputR").setAttribute("type", "hidden");
            document.getElementById("outputX").setAttribute("type", "hidden");

        } else {
            document.getElementById("outputHeader").style.display = "block";
            document.getElementById("output1").style.display = "block";
            document.getElementById("output2").style.display = "none";
            document.getElementById("output3").style.display = "none";
            document.getElementById("outputX1").setAttribute("type", "number");
            document.getElementById("outputX2").setAttribute("type", "number");
            document.getElementById("outputX1").value = x1;
            document.getElementById("outputX2").value = x2;
            document.getElementById("outputR").setAttribute("type", "hidden");
            document.getElementById("outputX").setAttribute("type", "hidden");
        }
        

    } else if ( d == 0 && a != 0 ) {

        x = (-b) / ( 2 * a);

        if ( width <= 500 ) {
            document.getElementById("outputHeader").style.display = "block";
            document.getElementById("output1").style.display = "none";
            document.getElementById("output3").style.display = "none";
            document.getElementById("output2").style.display = "block";
            document.getElementById("outputX").setAttribute("type", "number");   
            document.getElementById("outputX").value = (Math.round(x * 100)/100);
            document.getElementById("outputX1").setAttribute("type", "hidden");
            document.getElementById("outputX2").setAttribute("type", "hidden");
            document.getElementById("outputR").setAttribute("type", "hidden");
        } else {
            document.getElementById("outputHeader").style.display = "block";
            document.getElementById("output1").style.display = "none";
            document.getElementById("output3").style.display = "none";
            document.getElementById("output2").style.display = "block";
            document.getElementById("outputX").setAttribute("type", "number");
            document.getElementById("outputX").value = x ;
            document.getElementById("outputR").setAttribute("type", "hidden");
            document.getElementById("outputX1").setAttribute("type", "hidden");
            document.getElementById("outputX2").setAttribute("type", "hidden");
        }
        
        

    } else {

        if ( a == 0 ) {

            return 0;
            
        } else {
            document.getElementById("outputHeader").style.display = "block";
            document.getElementById("output1").style.display = "none";
            document.getElementById("output2").style.display = "none";
            document.getElementById("output3").style.display = "block";
            R = "NO REAL ROOTS";
            document.getElementById("outputR").setAttribute("type", "text");
            document.getElementById("outputR").value = R;
            document.getElementById("outputX").setAttribute("type", "hidden");
            document.getElementById("outputX1").setAttribute("type", "hidden");
            document.getElementById("outputX2").setAttribute("type", "hidden");
            
        }
        
    }

}