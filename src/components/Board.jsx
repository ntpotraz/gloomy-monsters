import React from 'react';
import MonsterData from '../data/MonsterData.json';
import MonsterPack from './MonsterPack';

const Board = () => {
  const scenarioLevel = 'lvl_4';

  const monsterDecks = [
    MonsterData.Cave_Bear,
    MonsterData.Lurker,
    MonsterData.Forest_Imp,
    MonsterData.Flame_Demon,
  ];

  return (
    <div className='board'>
      {monsterDecks.map((monster) => {
        return (
          <MonsterPack monster={monster} level={scenarioLevel} key={monster} />
        );
      })}
    </div>
  );
};

export default Board;
