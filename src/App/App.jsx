import s from './App.module.css';
import Names from "../Names/Names";
import Race from "../Race/Race";
import Stats from "../Stats/Stats";

import data from "../data/stats";
import limits from "../data/limits";
import {useState} from "react";
import Error from "../Error/Error";


function App() {

  let totalPoints = 0;
  console.log(data)
  data.map(({name, points}) => (
      totalPoints += points
  ));
  const [isVisible, setIsVisible] = useState(totalPoints !== limits.totalUpper);
  const [currentTotalPoints, setTotalPoints] = useState(totalPoints);

  const toggleVisibility = (value) => {
      setIsVisible(value);
  };

  return (
    <div className={s.App}>
      <form>
        <Names/>
        <br/>
        <Race/>
        <br/>
        <Stats stats={data} limits={limits} totalPoints={currentTotalPoints} setTotalPoints={setTotalPoints} />
        <br/>
        <Error totalPoints={currentTotalPoints} isVisible={isVisible} toggleVisibility={toggleVisibility} limits={limits}/>
      </form>
    </div>
  );
}

export default App;
