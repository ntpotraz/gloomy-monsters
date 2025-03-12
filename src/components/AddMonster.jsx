import React, { useState } from 'react';
import './AddMonster.css';

const AddMonster = (props) => {
  const monsters = props.monsters;
  const monsterNameList = [];
  for (let i in monsters) {
    monsterNameList.push(i.replace('_', ' '));
  }

  const [searchList, setSearchList] = useState(monsterNameList);

  const monsterList = searchList.map((monster) => {
    return (
      <li className='monsterListItem' onClick={() => props.addDeck(monster)} key={monster}>
        {monster}
      </li>
    );
  });

  const handleInput = (e) => {
    setSearchList(
      monsterNameList.filter((monster) => {
        return monster.toLowerCase().includes(e.target.value.toLowerCase());
      })
    );
  };

  const input = document.querySelector("input");

  return (
    <div className='addMonster'>
      <input onChange={handleInput} type='text' placeholder='Search Monster' />
      {
        input.value != "" ?
      <ul className="monsterList">
        {monsterList}
      </ul>
        :
          null
      }
    </div>
  );
};

export default AddMonster;
