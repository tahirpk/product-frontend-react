import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
   
    <Card className="my-3 p-3 rounded fixed-size">
      <Card.Header as="h5">{product.name}</Card.Header>
      <Link to={`/product/${product.id}`} onClick={function() { console.log('click'); }}>
        <Card.Img
          src={product.image}
          variant="top"
          height={176.109}
          width={221}
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Footer as="h4" className="text-center bold">
          ${product.price}
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default Product;
