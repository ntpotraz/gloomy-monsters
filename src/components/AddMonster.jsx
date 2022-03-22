import React, { useState } from 'react';
import './AddMonster.css';

const AddMonster = (props) => {
  const monsters = props.monsters;
  const monsterNameList = [];
  for (let i in monsters) {
    monsterNameList.push(i.replace('_', ' '));
  }

  const [searchList, setSearchList] = useState(monsterNameList);

  const handleClick = (e) => {
    console.log(e.target.innerText);
  };

  const monsterList = searchList.map((monster) => {
    return (
      <li onClick={() => props.addDeck(monster)} key={monster}>
        {monster}
      </li>
    );
  });

  const handleInput = (e) => {
    console.log(e.target.value.toLowerCase());
    setSearchList(
      monsterNameList.filter((monster) => {
        return monster.toLowerCase().includes(e.target.value.toLowerCase());
      })
    );
  };

  return (
    <div className='addMonster'>
      <input onChange={handleInput} type='text' placeholder='Search Monster' />
      <ul>{monsterList}</ul>
    </div>
  );
};

export default AddMonster;
