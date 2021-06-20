// Functions that use closures to perform arithmetic operations
let calcClosure = function() {

    // Closure values can be temporarily saved
    let closureCounter = 1;
    let closureNum = 100;

    const fixNum1 = 10;
    const fixNum2 = 20;

    return function Calculation() {

        console.log("Closure times : " + closureCounter);
        console.log("Closure value : " + closureNum);

        // Addition
        closureNum += fixNum2;
        console.log(closureNum);
        // Subtraction
        closureNum -= fixNum1;
        console.log(closureNum);
        // Multiplication
        closureNum *= fixNum2;
        console.log(closureNum);
        // Division
        closureNum /= fixNum1;
        console.log(closureNum);

        closureCounter++;
    };
};

let calc = calcClosure();

// Compute using the variables stored by the closure
calc();
calc();
calc();