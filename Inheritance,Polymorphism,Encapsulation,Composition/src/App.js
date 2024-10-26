
import './App.css';
import Lion from "./classes/Lion";
import Cub from "./classes/Cub";

function App() {

  let roar = new Lion(4,2,1,1);

  let roar2 = new Lion();
  roar2.noOfLegs = 6;
  roar2.noOfEyes = 2;
  roar2.foodBehaviour();
  roar2.sleepinBehaviour();
  roar2.facingHuman();

  console.log(roar2.noOfLegs);
  console.log(roar2.noOfEyes);
  console.log(roar2.noOfNose);
  console.log(roar2.noOfTails);

  console.log("----Cub----")
  let simha = new Cub();
  simha.foodBehaviour();
  simha.sleepinBehaviour();
  simha.facingHuman();
  simha.calculateResult();
  simha.calculateResult(1);
  simha.calculateResult(1,2);
  simha.calculateResult(1,2,3);

  
  
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
