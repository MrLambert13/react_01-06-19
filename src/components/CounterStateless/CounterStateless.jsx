import './CounterStateless.sass';

//React импортируем в каждом файле
import React, {useState} from 'react';

//stateless
export function CounterStateless(props) {
    const [count, setCount] = useState(0);
    return (
        <div className="CounterStateless">
            <button onClick={()=> setCount(count - 1)}>-</button>
            {count}
            <button onClick={()=> setCount(count + 1)}>+</button>
        </div>
    );
};
