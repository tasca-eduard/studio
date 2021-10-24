import { useState } from 'react';
import './App.css';
import OrangeCounter from './components/OrangeCounter';

function App() {
  const [counter, setCounter] = useState(0);

  const moreOranges = () => {
    setCounter(counter + 1);
  }

  return (
    <div className="App">
      <button onClick={moreOranges}>Add oranges</button>
      <OrangeCounter counter={counter} />
    </div>
  );
}

export default App;
