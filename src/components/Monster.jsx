import React, { useState } from 'react';
import Status from '../data/status';
import './Monster.css';

const Monster = (props) => {
  const monsterElements = props.monsters.map((mon) => (
    <div key={mon.id}>
      <div className='monsterInfo'>
        <div>
          <span
            className='monsterNumber'
            onClick={() => props.handleMonsterNumber(mon.id)}
          >
            {mon.number}
          </span>
          <div className='monsterHealth'>
            <button
              className='minus-button'
              onClick={() => props.handleMinusHealth(mon.id)}
            >
              -1
            </button>
            <span
              className='health'
              onClick={(event) => props.removeMonster(event, mon.id)}
            >
              {mon.health}
            </span>
            <button
              className='plus-button'
              onClick={() => props.handlePlusHealth(mon.id)}
            >
              +1
            </button>
          </div>
        </div>
        <div className='statusBar'>
          {Status.map((stat) => {
            return (
              <img
                className={mon.statusEffects[stat.id] ? 'statOn' : 'statOff'}
                key={stat.id}
                src={`img/icons/${stat.img}`}
                alt={stat.stat}
                onClick={() => props.handleStatus(mon.id, stat.id)}
              ></img>
            );
          })}
        </div>
      </div>
    </div>
  ));

  return <div className='monster'>{monsterElements}</div>;
};

export default Monster;
