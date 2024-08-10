import { useState } from 'react';
import Compon from './component/Compon';

function App(props) {
  const [test, setTest]=useState(false)
  const a = ()=>{
    setTest(true)
  }
  const b = ()=>{
    setTest(false)
  }

  return (
    <div className="App">
     <button onClick={a}> Click</button>
     {test===true ? <Compon onClose={b}/>:null}
    </div>
  );
}

export default App;
