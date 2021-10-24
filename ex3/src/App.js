import { useState } from 'react';
import './App.css';
import OrangeCounter from './components/OrangeCounter';

function App() {
  const [counter, setCounter] = useState(0);
  const [oranges, setOranges] = useState([]);

  const moreOranges = () => {
    let orangesClone = oranges;
    
    setCounter(counter + 1);
    orangesClone.push('🍊');
    setOranges([...orangesClone])
  }

  return (
    <div className="App">
      <button onClick={moreOranges}>Add oranges</button>
      <OrangeCounter oranges={oranges} />
    </div>
  );
}

export default App;
