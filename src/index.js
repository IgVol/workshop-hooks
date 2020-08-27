import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count+1)}>+</button>
        {count}
      <button onClick={() => setCount(count-1)}>-</button>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
