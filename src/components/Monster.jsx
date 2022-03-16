import React, { useState } from 'react';
import Status from '../data/status';
import './Monster.css';

const Monster = (props) => {
  const [statArray, setStatArray] = useState(Status);
  const [health, setHealth] = useState(10);

  const handleMinusHealth = () => {
    setHealth((oldHealth) => {
      return oldHealth === 0 ? 0 : oldHealth - 1;
    });
  };

  const handlePlusHealth = () => {
    setHealth((oldHealth) => oldHealth + 1);
  };

  const handleStatusActive = (stat) => {
    setStatArray((oldArray) =>
      oldArray.map((updateStat) => {
        return updateStat.id === stat.id
          ? { ...updateStat, isActive: !updateStat.isActive }
          : updateStat;
      })
    );
  };

  const statusBar = statArray.map((stat) => {
    return (
      <img
        className={stat.isActive ? 'statOn' : 'statOff'}
        key={stat.id}
        src={`/img/icons/${stat.img}`}
        alt={stat.stat}
        onClick={() => {
          handleStatusActive(stat);
        }}
      />
    );
  });

  return (
    <div className='monster'>
      <div className='monsterInfo'>
        <div>
          <button className='minus-button' onClick={handleMinusHealth}>
            -1
          </button>
          <span className='health' onClick={props.removeMonster(0)}>
            {health}
          </span>
          <button className='plus-button' onClick={handlePlusHealth}>
            +1
          </button>
        </div>
        <div className='statusBar'>{statusBar}</div>
      </div>
    </div>
  );
};

export default Monster;
