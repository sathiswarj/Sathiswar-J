// Problem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
//   Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
//   Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string

class Calculator{
    constructor(a,b){
       this.a = a;
         this.b = b ;
    }

     calculate(expression){
        switch(expression){
           case "ADDITION":
            return this.a + this.b;
            case "SUBTRACTION":
                return this.a - this.b;
            case "MULTIPICATION":
                return this.a * this.b;
            case "DIVISION":
                return this.a / this.b 
        }
    }
}

const calc = new Calculator(2,1)
console.log("Addition is :" , calc.calculate("ADDITION"))
console.log("Subtraction is :", calc.calculate("SUBTRACTION"))
console.log("Multipication is :",calc.calculate("MULTIPICATION"))
console.log("Division is :",calc.calculate("DIVISION"))
