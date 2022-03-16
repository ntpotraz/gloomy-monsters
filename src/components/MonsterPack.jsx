import React, { useState } from 'react';
import Monster from './Monster';
import './MonsterPack.css';

const MonsterPack = () => {
  const [pack, setPack] = useState([]);
  const [slot, setSlot] = useState(-1);

  const newSlot = () => {
    setSlot((oldSlot) => {
      return oldSlot + 1;
    });
  };

  const removeMonster = (id) => {
    console.log('Removing Monster ' + id);
  };

  const newMonster = () => {
    newSlot();
    setPack((oldPack) => {
      return [
        ...oldPack,
        <Monster id={slot} key={slot} removeMonster={() => removeMonster} />,
      ];
    });
  };

  console.log(slot);

  return (
    <div className='monsterPack'>
      {pack}
      <button className='spawnButton' onClick={newMonster}>
        +
      </button>
    </div>
  );
};

export default MonsterPack;
