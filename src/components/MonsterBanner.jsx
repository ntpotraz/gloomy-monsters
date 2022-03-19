import React from 'react';
import './MonsterBanner.css';

const MonsterBanner = (props) => {
  const monster = props.monster;
  const name = props.name.toUpperCase();

  return (
    <div className='monsterBanner'>
      <div>
        <img src={`img/icons/${name}.png`} alt='icon' className='icon' />
        <div className='monsterHeader'>
          <h2 className='level'>{monster.level}</h2>
          <h3 className='name'>{name}</h3>
          {/* This is where attributes go */}
        </div>
      </div>
      <div className='stats'>
        <div className='normalInfo'>
          <span>{monster.norm.health}</span>
          <span>{monster.norm.move}</span>
          <span>{monster.norm.attack}</span>
          <span>{monster.norm.range}</span>
        </div>
        <div className='statIcons'>
          <img src='img/icons/healthIcon.png' alt='healthIcon' />
          <img src='img/icons/movementIcon.png' alt='movementIcon' />
          <img src='img/icons/attackIcon.png' alt='attackIcon' />
          <img src='img/icons/rangeIcon.png' alt='rangeIcon' />
        </div>
        <div className='eliteInfo'>
          <span>{monster.elite.health}</span>
          <span>{monster.elite.move}</span>
          <span>{monster.elite.attack}</span>
          <span>{monster.elite.range}</span>
        </div>
      </div>
    </div>
  );
};

export default MonsterBanner;
