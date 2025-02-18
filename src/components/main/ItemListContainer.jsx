import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ItemListContainer.css';
import products from '../../data/products';

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (categoryId) {
     
      const filteredProducts = products.filter((product) => product.category === categoryId);
      setItems(filteredProducts);
    } else {
      
      setItems(products);
    }
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h2>{categoryId ? `Categoría: ${categoryId.replace('-', ' ')}` : 'Todos los productos'}</h2>
      <div className="item-list">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            <p>Stock: {item.stock}</p>
            <Link to={`/item/${item.id}`} className="btn-detail">
              Ver detalle
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;