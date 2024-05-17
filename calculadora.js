const mathOperations = {
   sum: function(a,b) {
       return a + b;
   },
   
   diff: function(a,b) {
       return a - b;
   },
   product: function(a,b) {
       return a * b
   },
   div: function(a,b) {
    if(b>0){return a / b;}
    else{
        throw new Error("No se puede dividir por 0");
    }
   },
   restoDiv: function(a,b) {
    if(b>0){return a % b;}
    else{
        throw new Error("No se puede dividir por 0");
    }
        
   }
}
  module.exports = mathOperations