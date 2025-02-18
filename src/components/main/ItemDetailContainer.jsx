import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';
import products from '../../data/products'; 

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const foundItem = products.find((product) => product.id === Number(itemId));
    setItem(foundItem);
  }, [itemId]);

  if (!item) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="item-detail-container">
      <img src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
      <p>Stock: {item.stock}</p>
      <button
        className="btn-buy"
        onClick={() => alert('Página en construcción. Pronto podrás comprar.')}
      >
        Comprar
      </button>
    </div>
  );
};

export default ItemDetailContainer;