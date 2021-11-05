import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulaire from './form.js';
import NavvBar from './Navigation';
import Image from './Nature at Night.jpg';
function App() {
  return (
    <div className="App">
      <NavvBar />
      <Formulaire /> 
      <br/>
      <img src={Image} alt="nature" fluid />
    </div>
  );
}

export default App;
