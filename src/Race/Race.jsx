import React, { useState } from 'react';

import s from './Race.module.css';

const Race = () => {
    const [selectedValue, setSelectedValue] = useState('1');
    const options = [
        {value: 'Human', label: 'Human'},
        {value: 'Elf', label: 'Elf'},
        {value: 'Dwarf', label: 'Dwarf'},
        {value: 'Halfling', label: 'Halfling'},
    ];

    return (
        <div className={s.race}>
            <span className={s.label}>Race</span>
            <select
                className={s.select}
                value={selectedValue}
                onChange={e => setSelectedValue(e.target.value)}
            >
                <option value='1' disabled>Select a Race</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
export default Race;