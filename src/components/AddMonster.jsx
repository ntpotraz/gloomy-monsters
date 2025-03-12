import React, { useState } from 'react';
import './AddMonster.css';

const AddMonster = (props) => {
  const monsters = props.monsters;
  const monsterNameList = [];
  for (let i in monsters) {
    monsterNameList.push(i.replace('_', ' '));
  }

  const [searchList, setSearchList] = useState(monsterNameList);
  const [input, setInput] = useState("");

  const monsterList = searchList.map((monster) => {
    return (
      <li onClick={() => props.addDeck(monster)} key={monster}>
        {monster}
      </li>
    );
  });

  const handleInput = (e) => {
    setInput(e.target.value);
    setSearchList(
      monsterNameList.filter((monster) => {
        return monster.toLowerCase().includes(e.target.value.toLowerCase());
      })
    );
  };


  return (
    <div className='addMonster'>
      <input onChange={handleInput} type='text' placeholder='Search Monster' />
      {
        input != "" ?
      <ul>
        {monsterList}
      </ul>
        :
          null
      }
    </div>
  );
};

export default AddMonster;
