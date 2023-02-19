import React from "react";
import { useNavigate } from "react-router-dom";

import ms from "./ProductCardComp.module.css";

const ProductCardComp = (props) => {
  // console.log(props);
  const { title, thumbnail, price, _id } = props;
  // console.log(thumbnail);
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/product/${_id}`);
  };

  return (
    <div className={ms.container} onClick={onClick}>
      <h2>{title}</h2>
      <img src={thumbnail} alt={`product_image-${title}`} />
      <p>${price}</p>
    </div>
  );
};

export default ProductCardComp;
