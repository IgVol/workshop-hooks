import React from 'react';
import ReactDOM from 'react-dom';

const states = []
let calls = -1 // !!

function useState(defaultValue) {
  const callId = ++calls // !!
  if (states[callId]) {
    return states[callId]
  }
  const setValue = newValue => {
    states[callId][0] = newValue;
    renderWithCustomHooks();
  }
  const tuple = [defaultValue, setValue]
  states[callId] = tuple // !!
  return tuple
}


function App() {
  const [count, setCount] = useState(0)
  console.log(count);
  return (
    <div>
      <button onClick={() => setCount(count+1)}>+</button>
        {count}
      <button onClick={() => setCount(count-1)}>-</button>
    </div>
  );
}


const renderWithCustomHooks = () => {
  calls = -1;
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderWithCustomHooks()