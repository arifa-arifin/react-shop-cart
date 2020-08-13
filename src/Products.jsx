import React, { useState } from 'react';
import './Product.css';
import {Row, Col, Container} from 'react-bootstrap';

export default function Products({ setCart, cart }) {
  const [products] = useState([
    
    {
      id: 1,
      name: 'Samsung Series 4',
      cost: {
        actual: 13999,
        display: 22500,
      },
      image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
    },
    {
      id: 2,
      name: 'Samsung Super 6',
      cost: {
        actual: 13999,
        display: 22500,
      },
      image:
      "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
    },
    {
      id: 3,
      name: 'Samsung Super 6',
      cost: {
        actual: 13999,
        display: 22500,
      },
      image:
      "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
    },
  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  // const [, setCategory] = useState(HOME_GARDEN);

  const getProducts = () => {
    return products.filter(
      (product) => product.id !== 0 
    );
  };

  return (
    <>
      <Container>
      <Row className="products">
        
        {getProducts().map((product, idx) => (
          <Col md={4}>
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>Rs.{product.cost.display}</h4>
            <img src={product.image} alt={product.name} className="img"/>
            <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>
          </div>
          </Col>
          
        ))}
        
      </Row>
      </Container>
    </>
  );
}
