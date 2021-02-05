import './App.css';
import Card from "./Card";
import InputEvents from "./events/InputEvents";
import MovementEvents from "./events/MovementEvents";
import FormValidation from "./FormValidation";
import ShoppingList from "./shoppingList/ShoppingList";
function App() {
  return (
    <div className="App">
        <Card/>
        <InputEvents></InputEvents>
        <MovementEvents></MovementEvents>
        <FormValidation></FormValidation>
        <ShoppingList></ShoppingList>
    </div>
  );
}

export default App;
