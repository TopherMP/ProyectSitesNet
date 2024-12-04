import React from 'react';


export function ProductCard({ name, image, description, price, onAddToCart }) {
  // Función para manejar el clic en "Add to Cart"
  const handleAddToCart = () => {
    const product = { name, image, description, price }; // Crear objeto de producto
    onAddToCart(product); // Llamar a la función pasada como prop
  };

  return (
    <div className="col-md-4">
      <div className="card h-100">
        <img
          src={image}
          className="card-img-top"
          alt={name}
          style={{ objectFit: 'fill', maxHeight: 'auto' }}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><strong>${price.toFixed(2)}</strong></p>
          <button className="btn btn-primary" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
