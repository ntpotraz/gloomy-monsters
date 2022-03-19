import React from 'react';
import './MonsterBanner.css';

const MonsterBanner = (props) => {
  const monster = props.monster;
  const name = props.name;

  const isFlying = monster.norm.attr.includes('%flying%');
  console.log(isFlying);

  return (
    <div className='monsterBanner'>
      <div>
        <img src={`img/icons/${name}.png`} alt='icon' className='icon' />
        <div className='monsterHeader'>
          <h2 className='level'>{monster.level}</h2>
          <h3 className='name'>{name.toUpperCase()}</h3>
          {isFlying && (
            <img className='flying' src='img/icons/push.png' alt='flyingicon' />
          )}
        </div>
      </div>
      <div className='stats'>
        <div className='attr'>{monster.norm.attr}</div>
        <div className='numbers'>
          <div className='normalInfo'>
            <p>{monster.norm.health}</p>
            <p>{monster.norm.move}</p>
            <p>{monster.norm.attack}</p>
            <p>{monster.norm.range}</p>
          </div>
          <div className='statIcons'>
            <img src='img/icons/healthIcon.png' alt='healthIcon' />
            <img src='img/icons/movementIcon.png' alt='movementIcon' />
            <img src='img/icons/attackIcon.png' alt='attackIcon' />
            <img src='img/icons/rangeIcon.png' alt='rangeIcon' />
          </div>
          <div className='eliteInfo'>
            <p>{monster.elite.health}</p>
            <p>{monster.elite.move}</p>
            <p>{monster.elite.attack}</p>
            <p>{monster.elite.range}</p>
          </div>
        </div>
        <div className='attr'>{monster.elite.attr}</div>
      </div>
    </div>
  );
};

export default MonsterBanner;
