import  { useSelector, useDispatch } from 'react-redux';
import { 
    increment,
    decrement,
    reset,
    incrementByAmount
     } from './counterSlice';

import { useState } from 'react'


const Counter =()=> {
    const count = useSelector((state)=> state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number ( incrementAmount) || 0; // since we are using a text input, we need to verify that we get a number value


    const resetAll = ()=> {
        setIncrementAmount(0); // this sets the increment to zero
        dispatch(reset()); // this sets the global state to zero as well
    } 

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>

            </div>
            <input type="text"
            value={incrementAmount}
            onChange= {(e)=> setIncrementAmount(e.target.value)} />

            <div>
                <button onClick={() => dispatch(incrementByAmount(addValue)) }>
                    Add Amount
                </button>
                <button onClick={resetAll}>Reset</button>
            </div>
        </section>
    )
}

export default Counter