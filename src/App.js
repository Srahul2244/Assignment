import logo from './logo.svg';
import './App.css';
import Simple from './components/Simple';
import Second from './second/Second';

function App() {
  return (
    <div className="App">
      <Simple/>
      <hr/>
      <div className='seconds'><Second/></div>
      
    </div>
  );
}

export default App;
