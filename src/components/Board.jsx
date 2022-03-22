import React, { useState } from 'react';
import MonsterData from '../data/MonsterData.json';
import MonsterPack from './MonsterPack';
import AddMonster from './AddMonster';
import './Board.css';

const Board = () => {
  const [monsterLevel, setMonsterLevel] = useState(0);
  const [monsterDecks, setMonsterDecks] = useState([]);

  const addNewDeck = (name) => {
    const monster = name.replace(' ', '_');
    setMonsterDecks((oldDeck) => [...oldDeck, MonsterData[monster]]);
  };

  const handleMonsterLevel = () => {
    setMonsterLevel((oldLevel) => oldLevel + 1);
    if (monsterLevel > 6) {
      setMonsterLevel(0);
    }
  };
  const inScenario = true;

  const activeBoard = monsterDecks.map((monster) => {
    return (
      <MonsterPack
        monster={monster}
        level={`lvl_${monsterLevel}`}
        key={monster.name}
      />
    );
  });

  return (
    <div className='board'>
      <div className='levelDiv'>
        <button className='monsterLevel' onClick={handleMonsterLevel}>
          {monsterLevel}
        </button>
      </div>
      <div className='addMonster'>
        <AddMonster monsters={MonsterData} addDeck={addNewDeck} />
      </div>
      <div className='monsterDecks'>{inScenario && activeBoard}</div>
    </div>
  );
};

export default Board;
