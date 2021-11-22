import './App.css';
import { ItemListContainer } from './containers/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from './containers/CartContainer/CartContainer';
import { NavBar } from './components/NavBar/NavBar.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
        <Route exact path="/itemdetail/:itemId" element={<ItemDetailContainer />} />
        <Route exact path="/cart" element={<CartContainer greeting="Acá se verá el carrito 🤙🏼" />} />
        <Route path="/*" />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
