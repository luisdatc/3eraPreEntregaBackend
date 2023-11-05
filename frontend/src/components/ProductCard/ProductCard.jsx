import React from "react";
import { Col } from "react-bootstrap";

const ProductCard = ({ title, description, price, code, stock, category, thumbnails}) => {
  return (
    <Col sm={12} md={6} lg={6} xl={6}>
      <div className="card m-2" /* style="width: 18rem" */>
        <img src={thumbnails[0]} className="card-img-top img-fluid" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
        <div className="card-body">
          <p className="card-text">{description}</p>
          <p className="card-text">{category} </p>
          <div className="card-sub /* d-flex justify-content-evenly */">
{/*             <p className="card-text">{code} </p> */}
            <p className="card-text">{stock} </p>
          </div>
          <p className="card-text text-end">{price}</p>
          <div className="card-button text-center">
            <button className="">Agregar al Carrito</button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
