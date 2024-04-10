import React, { useState } from "react";

import Points from "../Points/Points";
import modifiers from "../data/modifiers";

import s from './Stats.module.css';

const Stats = (params) => {
    const [oldPoints, setOldPoints] = useState(0);

    return (
        <div className={s.list}>
            <ul className={s.ul}>
              {params.stats.map(({name, points}) => (
                <div key={name} className={s.statRows + " " + name}>
                  <Points points={points}
                          name={name}
                          limits={params.limits}
                          modifiers={modifiers}
                          currentTotalPoints={params.totalPoints}
                          setTotalPoints={params.setTotalPoints}
                          oldPoints={oldPoints}
                          setOldPoints={setOldPoints}
                  />
                </div>
              ))}
            </ul>
        </div>
    );
};
export default Stats;
