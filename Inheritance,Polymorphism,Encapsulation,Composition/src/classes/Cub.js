import Lion from "./Lion";

class Cub extends Lion{
    foodBehaviour = ()=>{
     console.log("Cub eat pure non vegitarion and drinks blood.");
    };


   sleepingBehaviour = ()=>{
    console.log("Cub sleeps on top of trees in forests.");
 };

 facingHuman = ()=>{
   console.log("Human rus away from Cub.");

 };
 calculateResult = (a)=>{
   console.log("Inside Calculate Results - 0 Parameters");
 };

 calculateResult = (a,b)=>{
   console.log("Inside Calculate Results - 2 Parameters");
 };
 calculateResult = (a,b,c)=>{
   console.log("Inside Calculate Results - 3 Parameters");
 };

}





export default Cub;