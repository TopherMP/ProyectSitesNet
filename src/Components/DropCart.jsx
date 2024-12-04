import React from "react";
import { Link } from "react-router-dom";

export function DropCart({ cart, total }) {

  // Agrupa los productos por nombre y cuenta cuántas unidades hay de cada uno
  const groupedCart = cart.reduce((acc, product) => {
    const existingProduct = acc.find((item) => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      acc.push({ ...product, quantity: 1 });
    }
    return acc;
  }, []);

  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="dropCartButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Carrito ({cart.length})
      </button>
      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropCartButton">
        {groupedCart.length === 0 ? (
          <li><span className="dropdown-item">El carrito está vacío</span></li>
        ) : (
          <>
            {groupedCart.map((product, index) => (
              <li key={index}>
                <span className="dropdown-item">
                  {product.name} - {product.quantity} {product.quantity === 1 ? "unidad" : "unidades"} - ${product.price.toFixed(2)}
                </span>
              </li>
            ))}
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <span className="dropdown-item">
                <strong>Total: ${total.toFixed(2)}</strong>
              </span>
            </li>
              <li className="text-center">
                <Link to={"/comprar"} className="btn btn-primary m-2">Comprar</Link>
              </li>
          </>
        )}
      </ul>
    </div>
  );
}
