import React,{ useState } from 'react';

const App = () => {

  const [ count, setCount ] = useState(0);

  return (
    <React.Fragment>
      <header>
        <h1>Counter App</h1>
      </header>
      <h1>The current value is {count}</h1>
      <button onClick={()=>setCount(0)}>Reset Counter</button>
      <button onClick={()=> count >= 10 ? undefined : setCount(count + 1)}>Increase Counter</button>
      <button onClick={()=>count <= 0 ? undefined :setCount(count - 1)}>Decrease Counter</button>
    </React.Fragment>
  );
}
 
export default App;