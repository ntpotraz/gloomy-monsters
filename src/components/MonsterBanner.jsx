import React from 'react';
import './MonsterBanner.css';

const MonsterBanner = (props) => {
  const monster = props.monster;
  const name = props.name;

  const isFlying = monster.norm.attr.includes('%flying%');

  const normAttributes = monster.norm.attr.map((attr) => {
    if (attr.includes(':')) {
      const seperate = attr.split(': ');
      const ret = seperate[0];
      const ran = seperate[1];
      const retNum = ret.charAt(ret.length - 1);
      const ranNum = ran.charAt(ran.length - 1);

      return (
        <div className='normRangeRet' key={ret}>
          <img src='gloomy-monsters/img/icons/retaliate.png' alt='retIcon' />
          <span>{': ' + retNum}</span>
          <img src='gloomy-monsters/img/icons/range.png' alt='rangeIcon' />
          <span>{': ' + ranNum}</span>
        </div>
      );
    } else if (attr.includes('%')) {
      const type = attr.substring(1, attr.indexOf('%', 1));
      let num = '';
      if (/\d/.test(attr.toString())) {
        num = ': ' + attr.charAt(attr.length - 1);
      }
      if (type === 'flying') return '';
      else {
        return (
          <div className='normAttr' key={type}>
            <img
              className='attrIcon'
              src={`gloomy-monsters/img/icons/${type}.png`}
              alt={`${type}Icon`}
            />
            <span className='attrNum'>{num}</span>
          </div>
        );
      }
    } else {
      return <span key={attr}>{attr}</span>;
    }
  });

  const eliteAttributes = monster.elite.attr.map((attr) => {
    if (attr.includes(':')) {
      const seperate = attr.split(': ');
      const ret = seperate[0];
      const ran = seperate[1];
      const retNum = ret.charAt(ret.length - 1);
      const ranNum = ran.charAt(ran.length - 1);

      return (
        <div className='eliteRangeRet' key={ret}>
          <span>{ranNum + ' :'}</span>
          <img src='gloomy-monsters/img/icons/range.png' alt='rangeIcon' />
          <span>{retNum + ' :'}</span>
          <img src='gloomy-monsters/img/icons/retaliate.png' alt='retIcon' />
        </div>
      );
    } else if (attr.includes('%')) {
      const type = attr.substring(1, attr.indexOf('%', 1));
      let num = '';
      if (/\d/.test(attr.toString())) {
        num = attr.charAt(attr.length - 1) + ' :';
      }
      if (type === 'flying') return '';
      else {
        return (
          <div className='eliteAttr' key={type}>
            <span className='attrNum'>{num}</span>
            <img
              className='attrIcon'
              src={`gloomy-monsters/img/icons/${type}.png`}
              alt={`${type}Icon`}
            />
          </div>
        );
      }
    } else {
      return <span key={attr}>{attr}</span>;
    }
  });

  return (
    <div className='monsterBanner'>
      <div>
        <img
          src={`gloomy-monsters/img/icons/${name}.png`}
          alt='icon'
          className='icon'
        />
        <div className='monsterHeader'>
          <h2 className='level'>{monster.level}</h2>
          <h3 className='name'>{name.toUpperCase()}</h3>
          {isFlying && (
            <img
              className='flying'
              src='gloomy-monsters/img/icons/flyIcon.png'
              alt='flyingicon'
            />
          )}
        </div>
      </div>
      <div className='stats'>
        <div className='normAttributes'>{normAttributes}</div>
        <div className='numbers'>
          <div className='normalInfo'>
            <p>{monster.norm.health}</p>
            <p>{monster.norm.move}</p>
            <p>{monster.norm.attack}</p>
            <p>{monster.norm.range}</p>
          </div>
          <div className='statIcons'>
            <img
              src='gloomy-monsters/img/icons/healthIcon.png'
              alt='healthIcon'
            />
            <img
              src='gloomy-monsters/img/icons/movementIcon.png'
              alt='movementIcon'
            />
            <img
              src='gloomy-monsters/img/icons/attackIcon.png'
              alt='attackIcon'
            />
            <img
              src='gloomy-monsters/img/icons/rangeIcon.png'
              alt='rangeIcon'
            />
          </div>
          <div className='eliteInfo'>
            <p>{monster.elite.health}</p>
            <p>{monster.elite.move}</p>
            <p>{monster.elite.attack}</p>
            <p>{monster.elite.range}</p>
          </div>
        </div>
        <div className='eliteAttributes'>{eliteAttributes}</div>
      </div>
    </div>
  );
};

export default MonsterBanner;
