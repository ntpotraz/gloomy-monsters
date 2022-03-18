import React, { useState } from 'react';
import Monster from './Monster';
import MonsterData from '../data/MonsterData.json';
import './MonsterPack.css';

const MonsterPack = () => {
  const [pack, setPack] = useState([]);
  const [slot, setSlot] = useState(0);
  const [monsterNumber, setMonsterNumber] = useState(1);
  const [selectedMonster] = useState(MonsterData.Cave_Bear.lvl_1);

  const removeMonster = (event, id) => {
    event.stopPropagation();
    setPack((oldPack) =>
      oldPack.filter((mon) => {
        if (mon.health > 0) {
          return mon;
        } else {
          return mon.id !== id;
        }
      })
    );
  };

  const createNewMonster = () => {
    const newMonster = {
      id: slot,
      health: selectedMonster.norm.health,
      eliteHealth: selectedMonster.elite.health,
      isElite: false,
      number: monsterNumber,
      statusEffects: [false, false, false, false, false, false, false, false],
    };

    setPack((oldPack) => {
      return [...oldPack, newMonster];
    });

    setMonsterNumber((oldNumber) => {
      if (oldNumber === 10) {
        return 1;
      }
      return oldNumber + 1;
    });

    setSlot((oldSlot) => {
      return oldSlot + 1;
    });
  };

  const handlePlusHealth = (id) => {
    setPack((oldPack) =>
      oldPack.map((mon) => {
        if (
          mon.id === id &&
          !mon.isElite &&
          mon.health !== selectedMonster.norm.health
        ) {
          return { ...mon, health: mon.health + 1 };
        } else if (
          mon.id === id &&
          mon.isElite &&
          mon.health !== selectedMonster.elite.health
        ) {
          return { ...mon, health: mon.health + 1 };
        } else {
          return mon;
        }
      })
    );
  };

  const handleMinusHealth = (id) => {
    setPack((oldPack) =>
      oldPack.map((mon) => {
        if (mon.id === id && mon.health !== 0) {
          return { ...mon, health: mon.health - 1 };
        } else {
          return mon;
        }
      })
    );
  };

  const handleStatus = (id, stat) => {
    setPack((oldPack) =>
      oldPack.map((mon) => {
        if (mon.id === id) {
          let newArray = [...mon.statusEffects];
          newArray[stat] = !newArray[stat];
          return {
            ...mon,
            statusEffects: newArray,
          };
        } else {
          return mon;
        }
      })
    );
  };

  const handleMonsterNumber = (id) => {
    setPack((oldPack) =>
      oldPack.map((mon) => {
        if (mon.id === id) {
          if (mon.number === 10) {
            return { ...mon, number: 1 };
          }
          return { ...mon, number: mon.number + 1 };
        } else {
          return mon;
        }
      })
    );
  };

  const handleEliteMonster = (id) => {
    setPack((oldPack) =>
      oldPack.map((mon) => {
        if (mon.id === id) {
          mon.isElite // Needs to be opposite, since the boolean hasn't changed yet
            ? (mon.health = selectedMonster.norm.health)
            : (mon.health = selectedMonster.elite.health);
          return { ...mon, isElite: !mon.isElite };
        } else {
          return mon;
        }
      })
    );
  };

  return (
    <div className='monsterPack'>
      <Monster
        monsters={pack}
        handlePlusHealth={handlePlusHealth}
        handleMinusHealth={handleMinusHealth}
        removeMonster={removeMonster}
        handleStatus={handleStatus}
        handleMonsterNumber={handleMonsterNumber}
        handleEliteMonster={handleEliteMonster}
      />
      <button className='spawnButton' onClick={createNewMonster}>
        +
      </button>
    </div>
  );
};

export default MonsterPack;
