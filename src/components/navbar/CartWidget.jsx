
import './CartWidget.css'; 

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <span role="img" aria-label="cart">🛒</span>
      <span className="cart-notification">3</span>
    </div>
  );
};

export default CartWidget;