
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/main/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          {/* Ruta para el catálogo principal */}
          <Route path="/" element={<ItemListContainer />} />

          {/* Ruta para las categorías */}
          <Route path="/category/:categoryId" element={<ItemListContainer />} />

          {/* Ruta para el detalle de un producto */}
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;