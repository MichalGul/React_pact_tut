import './App.css';
import Card from "./Card";
import InputEvents from "./events/InputEvents";
import MovementEvents from "./events/MovementEvents";


function App() {
  return (
    <div className="App">
        <Card/>
        <InputEvents></InputEvents>
        <MovementEvents></MovementEvents>
    </div>
  );
}

export default App;
