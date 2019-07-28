import './CounterStateless.sass';

//React импортируем в каждом файле
import React, { useState } from 'react';

const mapping = {
  minus: -1,
  plus: 1
};

const handleButton = ({ target: { name } }) => setCount(count + mapping[name]);

//stateless
export function CounterStateless() {
  const [count, setCount] = useState(0);
  return (
    <div className="CounterStateless">
      {count > 0 && <button name="minus" onClick={handleButton}>-</button>}
      {count}
      <button name="plus" onClick={handleButton}>+</button>
    </div>
  );
};
