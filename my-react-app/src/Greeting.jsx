import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Greeting({state}) {
    const [greetMsg, setGreetMsg] = useState('Привет, ')
    
    useEffect(() => 
    {
        console.log(state.name)
        if (state.isFirst) { // true если имя сгенерировано впервые
            setGreetMsg('Привет, ')
        }
        else { // если имя поменялось, в state.isFirst передается false
            setGreetMsg('Привет, у тебя поменялось имя, теперь ты ')
        }
        
    }, [state])

    return (
        <div>
            
            {greetMsg} {state.name}!

        </div>
    )
}

export default Greeting