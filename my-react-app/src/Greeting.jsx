import { useEffect, useRef } from 'react';



function Greeting({state}) {
    const prevName = useRef(state.name)
    useEffect (() => {
        prevName.current = state.name;
    }, [state.name]);
    return(
        <div>   {
            prevName.current !== state.name
        ? `Привет, у тебя поменялось имя, теперь ты ${state.name}!`
        : `Привет, ${state.name}!`
                }
        </div>
    )
    
    
}

export default Greeting