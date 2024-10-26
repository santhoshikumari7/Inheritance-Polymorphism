class Lion{
    constructor(legs,eyes,nose,tails){
      console.log("Inside Lion Constructor")
      this.noOfLegs = legs;
      this.noOfEyes = eyes;
      this.noOfNose = nose;
      this.noOfTails = tails;
     
 }
 foodBehaviour = ()=>{
    console.log("lion hunts animals eat its meat and drinks blood.");
 };

 sleepinBehaviour = ()=>{
    console.log("lion sleepes under trees in forest.");
 };

 facingHuman = ()=>{
    console.log("human escaps from Lion.");
 }

}
export default Lion;