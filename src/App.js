import { useState } from 'react';
import './App.css';
import { Ex1, Ex2, Ex3, Ex4 } from './PropsDestructure.js'


export default function App() {
  //properties
  let obj1 = {
    id: 1,
    name: "lenevo",
    aprice: "1,20,000",
    oprice: "1,00,000"
  }
  let obj2 = {
    id: 2,
    name: "BANG&OLUFSEN",
    aprice: "70,000",
    oprice: "50,000",
  }
  let obj3 = {
    id: 3,
    name: "MacBook",
    aprice: "1,50,000",
    oprice: "1,00,000"
  }
  let obj4 = {
    id: 4,
    name: "MacBook",
    aprice: "1,20,000",
    oprice: "90,000"
  }


  let [counter, setCounter] = useState(0)
  return (
    <>
      <h1>Counter App: </h1>
      <div className='wrapper'>
        <button className='minus' disabled={counter === 0} onClick={() => {
          if (counter > 0) {
            setCounter(counter - 1)
          }
        }}>-</button>
        <p>{counter}</p>
        <button className='plus' disabled={counter === 10} onClick={() => {
          if (counter < 10) {
            setCounter(counter + 1)
          }
        }}>+</button>
      </div>
      <Ex1 {...obj1} />
      <Ex2 {...obj2} />
      <Ex3 id={obj3.id} name={obj3.name} aprice={obj3.aprice} oprice={obj3.oprice} />
      <Ex4 {...obj4} />
    </>
  )
}

