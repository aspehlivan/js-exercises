
function multiply(x, y) {
   return x * y;
}

function calculateAreaOfPerpendicularTriangle(x, y) {
   var multiplication = multiply(x, y);

   return multiplication / 2;
}

var area = calculateAreaOfPerpendicularTriangle(3, 4);

console.log( area );
