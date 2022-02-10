import React, { useState } from "react";

const Counter = () =>
{
    const [count, setCount] = useState(0) // хук (useState) позволяющий оповестить компоненты имеющие (в данном примере) число,
                                          //о его изменение посредством вызова (в данном примеере) setCount

    const increment = () => setCount(count + 1)

    const decrement = () => setCount(count - 1)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={ increment}> increment </button>
            <button onClick={ decrement}> decrement </button>
        </div>
    )
}

export default Counter;