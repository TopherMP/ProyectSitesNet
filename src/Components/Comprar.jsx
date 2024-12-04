import React, { useState } from "react";

export function Comprar({ cart, total }) {
  const [email, setEmail] = useState("");

  const handlePurchase = () => {
    if (!email) {
      alert("Por favor, ingresa un correo válido.");
      return;
    }

    if (cart.length === 0) {
      alert("El carrito está vacío. No hay productos para comprar.");
      return;
    }

    const purchaseDetails = `
      Resumen de tu Compra:
      ${cart.map(
        (product) =>
          `- ${product.name} (${product.quantity} ${
            product.quantity === 1 ? "unidad" : "unidades"
          }): $${product.price.toFixed(2)}`
      ).join("\n")}
      
      Total: $${total.toFixed(2)}
    `;

    // Simula el envío del correo
    alert(`Compra realizada con éxito.\nSe enviará al correo: ${email}\n\n${purchaseDetails}`);
    
    // Limpiar carrito después de la compra (opcional)
    // Esto debería manejarse en un estado global o con una función pasada desde el padre
    // setCart([]);
  };

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">Resumen de tu Compra</h1>
      {cart.length === 0 ? (
        <p className="text-center">El carrito está vacío.</p>
      ) : (
        <>
          <ul className="list-group mb-4">
            {cart.map((product, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {product.name} - {product.quantity}{" "}
                {product.quantity === 1 ? "unidad" : "unidades"} - $
                {product.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <h3 className="text-end">Total: ${total.toFixed(2)}</h3>
        </>
      )}
      <div className="mt-4">
        <div className="input-group">
          <input
            type="email"
            className="form-control"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handlePurchase}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
