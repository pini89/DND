import React, { useState } from "react";

import s from './Points.module.css';

const PointsComponent = (params) => {
    const isNumber = (value) => {
        return typeof value === "number" && !Number.isNaN(value);
    }

    const [currentPoints, setPoints] = useState(params.points);
    const [currentMod, setMod] = useState(params.modifiers[currentPoints]);

    const setPointsAndMod = (pointVal, modVal) =>{
        setPoints(pointVal)
        setMod(modVal)
    }

    const addPoints = (pointVal) => {
        let newPointsVal = currentPoints + pointVal
        setPointsAndMod(newPointsVal,params.modifiers[newPointsVal])
        params.setTotalPoints(params.currentTotalPoints + pointVal)
        params.setOldPoints(newPointsVal)
    }

    const handleIncrement = (e) => {
        // to prevent the form from being sent we will use the following line
        e.preventDefault();
        if (currentPoints < params.limits.fieldMax) {
            addPoints(1)
        }
    };

    const handleDecrement = (e) => {
        e.preventDefault();
        if (currentPoints > params.limits.fieldMin) {
            addPoints(-1)
        }
    };

    const onChangeHandler = (e) => {

        let value = isNumber(parseInt(e.currentTarget.value)) ? parseInt(e.currentTarget.value) : 0;
        setPointsAndMod(value,params.modifiers[value])
    };

    const onBlurHandler = (e) => {
        let oldPoints = params.oldPoints === 0 ? params.points : params.oldPoints;
        let value = e.target.value;
        (value === "" || value < params.limits.fieldMin) &&
            setPointsAndMod(params.limits.fieldMin,params.modifiers[params.limits.fieldMin])


        value > params.limits.fieldMax &&
            setPointsAndMod(params.limits.fieldMax, params.modifiers[params.limits.fieldMax])

        let diff = oldPoints - currentPoints;

        params.setTotalPoints(params.currentTotalPoints - diff)
        params.setOldPoints(currentPoints)
    };

    return (
        <div className={s.statRow}>
          <span className={s.statTitle}>{params.name} </span>
          <button className={s.btn} onClick={handleDecrement}>-</button>
          <input className={s.points} onChange={onChangeHandler} onBlur={onBlurHandler} value={currentPoints}></input>
          <button className={s.btn} onClick={handleIncrement}>+</button>
          <span className={s.mod}>{currentMod}</span>
        </div>
    );
};
export default PointsComponent;
