import React from 'react';
import { Container } from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';

export default function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce(
      (sum, { cost, quantity }) => sum + cost.display * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.name === product.name
    ).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

  return (
    <>
     <Container>
       <Row>
       <Col className="text-center">
       <h1>Cart</h1>
       {cart.length > 0 && (
        <button onClick={clearCart}>Clear Cart</button>
      )}
       </Col>
       </Row>
       <Row>
       <Col className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>${product.cost.display}</h4>
            <input
              value={product.quantity}
              onChange={(e) =>
                setQuantity(
                  product,
                  parseInt(e.target.value)
                )
              }
            />
            <img src={product.image} alt={product.name} />
            <button onClick={() => removeFromCart(product)}>
              Remove
            </button>
          </div>
        ))}
      </Col>
      <Col className="pt-5">
      <div>Total Cost: ${getTotalSum()}</div>
      </Col>
       </Row>
      
     </Container>
    </>
  );
}
