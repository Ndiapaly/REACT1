// src/Image.js
import React from "react";

const Image = ({ imageUrl }) => (
  <img src={imageUrl} className="card-img-top" alt="Product" />
);

export default Image;
