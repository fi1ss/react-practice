import { useState, useEffect } from 'react';

import Header from './Header.jsx'
import Greeting from './Greeting.jsx'
import Clock from './Clock.jsx'

const names = [
  'Вася',
  'Петя',
  'Коля',
  'Миша',
  'Маша',
  'Ваня',
  'Рома'
]

function App() {

  return (
    <div>
      <Container />
    </div>
  )
}

function randomName (){
  const index = Math.floor(Math.random() * names.length);
  return (names[index])
}

function Container(){
  const [state, setState] = useState({
    name: randomName(),
    isFirst: true
  })

  useEffect(() => {
    const timer = setInterval(() => {
        setState({
          name: randomName(),
          isFirst: false
        });
    }, 10000
    );
    return () => {
      clearInterval(timer);
    }
  }, []);


  return (
    <div>
      <Header />
      <Greeting state={state}/>
      <Clock />
    </div>
  )
}



export default App
