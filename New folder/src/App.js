import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart';
import { useState } from "react";

function App() {
  const [isOpen , setIsOpen] = useState(false);

  function openModal () {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      {isOpen && <Cart onOpen={openModal} onClose={closeModal}/>}
      <Header onOpen={openModal}/>
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
